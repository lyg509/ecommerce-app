"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../components/Heading";
import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/inputs/input";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
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
      <Heading title="Sign in to Ecommerce" />
      <Button outline label="Continue with Google" icon={AiOutlineGoogle} onClick={() => {}} />

      <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />

      <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password" />
      <Button label={isLoading ? "Loading" : "Login"} onClick={handleSubmit(onSubmit)}></Button>
      <p className="text-sm">
        Do not have an account ?{" "}
        <Link className="underline" href="/register">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
