"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/Heading";
import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/inputs/input";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
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

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setisLoading(true);
    console.log(data);
  };
  return (
    <>
      <Heading title="Sign up for Ecommerce" />
      <Button outline label="Sign up with Google" icon={AiOutlineGoogle} onClick={() => {}} />

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
