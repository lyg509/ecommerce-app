import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  // 이메일 중복 확인
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  // 이미 사용중인 이메일이면 에러 반환
  if (existingUser) {
    return NextResponse.json({ error: "Email is already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
