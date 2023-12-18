"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";

import Button from "../components/Button";
import Input from "../components/inputs/input";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import router from "next/router";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";

interface RegisterFromProps {
  currentUser: SafeUser | null;
}

const RegisterForm: React.FC<RegisterFromProps> = ({ currentUser }) => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Account created");

        signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        }).then((callback) => {
          if (callback?.ok) {
            router.push("/cart");
            router.refresh();
            toast.success("Logged In");
          }

          if (callback?.error) {
            toast.error(callback.error);
          }
        });
      })
      .catch(() => toast.error("Something went wrong"))
      .finally(() => {
        setisLoading(false);
      });
  };

  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting...</p>;
  }

  return (
    <>
      <Heading title="Sign up for Ecommerce" />
      <Button
        outline
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={() => {
          signIn("google");
        }}
      />

      <hr className="bg-slate-300 w-full h-px" />
      <Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />

      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />

      <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
      <Button label={isLoading ? "Loading" : "Sign Up"} onClick={handleSubmit(onSubmit)}></Button>
      <p className="text-sm">
        Already have an account ?{" "}
        <Link className="underline" href="/login">
          Log in
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
