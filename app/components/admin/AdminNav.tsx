"use client";

import { usePathname } from "next/navigation";
import AdminNavItem from "./AdminNavItem";
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from "react-icons/md";
import Link from "next/link";
import Container from "../Container";

const AdminNav = () => {
  const pathname = usePathname();
  return (
    <div className="w-full shadow-sm top-20 bvorder-b-[1px] pt-4">
      <Container>
        <div
          className="flex flex-row items-center justify-between md:jutify-center
        gap-8 md:gap-12 overflow-x-auto flex-nowrap"
        >
          <Link href={"/admin"}>
            <AdminNavItem label="Summary" icon={MdDashboard} selected={pathname === "/admin"} />
          </Link>
          <Link href={"/admin/add-products"}>
            <AdminNavItem label="AddProducts" icon={MdLibraryAdd} selected={pathname === "/admin/add-products"} />
          </Link>
          <Link href={"/admin/manage-propducts"}>
            <AdminNavItem label="ManageProducts" icon={MdDns} selected={pathname === "/admin/manage-products"} />
          </Link>
          <Link href={"/admin/manage-orders"}>
            <AdminNavItem label="ManageOrders" icon={MdFormatListBulleted} selected={pathname === "/admin/manage-orders"} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AdminNav;
