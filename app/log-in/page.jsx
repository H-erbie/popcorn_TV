"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "../components/firebase/auth/sign-in";
import { useRouter } from "next/navigation";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";

const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { result, error } = await signIn(email, password);
    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/home");
  };
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h2 className="capitalize text-center text-2xl font-extrabold">
          sign in
        </h2>
        <Form.Root
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-max p-3 justify-center items-center"
        >
          <Form.Field className="flex flex-col relative gap-5">
            <Form.Label>Email</Form.Label>

            <Form.Control asChild>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
                className="rounded-md"
              />
            </Form.Control>
            <div className="absolute -right-[95%] bottom-4 text-red-500">
              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field className="flex flex-col relative  gap-5">
            <Form.Label>Password</Form.Label>

            <Form.Control asChild>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="password"
                className="rounded-md"
              />
            </Form.Control>
            <div className="absolute -right-[85%] text-red-500">
              <Form.Message match="tooShort">
                Password is too short
              </Form.Message>
              <Form.Message match="valueMissing">
                Please enter your password
              </Form.Message>
            </div>
          </Form.Field>

          <Form.Submit asChild>
            <button className="py-2 px-3 hover:bg-slate-800 cursor-pointer bg-slate-900 rounded-md mx-auto w-max capitalize">
              sign in
            </button>
          </Form.Submit>  
        </Form.Root>
        <p className="mx-auto w-max">
          Don't yet have an account?{" "}
          <Button asChild>
            <Link href="/sign-up">sign up</Link>
          </Button>
        </p>
      </div>
    </section>
  );
};

export default Page;
