
"use client";
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="max-w-sm mx-auto mt-32">
      <button onClick={()=>signIn("credentials",{email:"user@test.com",password:"123456",callbackUrl:"/"})}
        className="bg-black text-white w-full py-2">
        Sign In
      </button>
    </div>
  );
}
