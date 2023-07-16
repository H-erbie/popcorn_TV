"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signUp } from "../components/firebase/auth/sign-up";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebase_app from "../components/firebase/config";
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";


const auth = getAuth(firebase_app);
const Page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [profileImg, setProfileImg] = useState(null);

  const handleForm = async (event) => {
    event.preventDefault();
    const userName = `${fname} ${lname}`;
    const storageRef = ref(
      getStorage(),
      `user-images/${userName}/${profileImg.name}`
    );
    const snapshot = await uploadBytes(storageRef, profileImg);
    const photoUrl = await getDownloadURL(snapshot.ref);
    const { result, error } = await signUp(email, password, userName, photoUrl);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    if (error) {
      return console.log(error);
    }
    // else successful
    console.log(result, profileImg);
    return router.push("/home");
  };
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-5">
        <h2 className="capitalize text-center text-2xl font-extrabold">
          sign up
        </h2>
        <Form.Root
          onSubmit={handleForm}
          className="flex flex-col gap-5 w-max m-auto p-3 justify-center items-center"
        >
          <Form.Field className="relative">
            <Form.Control asChild>
              <input
                type="text"
                placeholder="first name"
                onChange={(e) => setFname(e.target.value)}
                required
                name="fname"
                id="fname"
                value={fname}
              />
            </Form.Control>
            <div className="absolute -right-[95%] bottom-2 text-red-500">
              <Form.Message match="valueMissing">
                Please enter your first name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field className="relative">
            <Form.Control asChild>
              <input
                type="text"
                placeholder="last name"
                onChange={(e) => setLname(e.target.value)}
                required
                name="lname"
                id="lname"
                value={lname}
              />
            </Form.Control>
            <div className="absolute -right-[95%] bottom-2 text-red-500">
              <Form.Message match="valueMissing">
                Please enter your last name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field className="relative">
            <Form.Control asChild>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                id="email"
                value={email}
              />
            </Form.Control>
            <div className="absolute -right-[95%] bottom-2 text-red-500">
              <Form.Message match="valueMissing">
                Please enter your email
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field className="relative">
            <Form.Control asChild>
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                name="password"
                id="password"
                value={password}
              />
            </Form.Control>
            <div className="absolute -right-[95%] bottom-2 text-red-500">
              <Form.Message match="valueMissing">
                Please enter your password
              </Form.Message>
            </div>
          </Form.Field>
              <div className="max-w-[300px] gap-16 rounded-md flex items-center bg-[#222] p-3">
                <label htmlFor="file">upload image</label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="max-w-[80px] p-0 overflow-hidden"
                  required
                  onChange={(e) => setProfileImg(e.target.files[0])}
                />
              </div>
            <div className="absolute -right-[95%] bottom-2 text-red-500">
                Please choose an image
            </div>

          <Form.Submit asChild>
            <button className="py-2 px-3 hover:bg-slate-800 cursor-pointer bg-slate-900 rounded-md mx-auto w-max capitalize">
              sign up
            </button>
          </Form.Submit>
        </Form.Root>
        <p className="mx-auto w-max">
          Already have an account?{" "}
          <Button asChild>
            <Link href="/log-in">log in</Link>
          </Button>
        </p>
      </div>
    </section>
  );
};
export default Page;
