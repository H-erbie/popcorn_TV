"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signUp } from "../components/firebase/auth/sign-up";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import {getStorage,ref, uploadBytes,getDownloadURL} from 'firebase/storage'
import firebase_app from "../components/firebase/config";

const auth = getAuth(firebase_app)
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

    const storageRef = ref(getStorage(), `user-images/${userName}/${profileImg.name}`)
    const snapshot = await uploadBytes(storageRef, profileImg)
    const photoUrl = await getDownloadURL(snapshot.ref)
    const { result, error } = await signUp(email, password, userName, photoUrl);

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
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-5 w-max m-auto p-3 justify-center items-center"
      >
        <input
          type="text"
          placeholder="first name"
          onChange={(e) => setFname(e.target.value)}
          required
          name="fname"
          id="fname"
        />
        <input
          type="text"
          placeholder="last name"
          onChange={(e) => setLname(e.target.value)}
          required
          name="lname"
          id="lname"
        />
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          name="email"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
          id="password"
        />
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
        <input
          type="submit"
          value="sign up"
          className="py-2 px-3 hover:bg-red-500 cursor-pointer bg-red-600 rounded-md mx-auto w-max capitalize"
        />
      </form>
      <p className="mx-auto w-max">
        Already have an account?{" "}
        <Link href="/log-in" className="underline hover:text-red-300">
          sign in
        </Link>
      </p>
      </div>
    </section>
  );
};
export default Page;
