"use client";

import AuthForm from "../components/AuthForm";
import { useRouter } from "next/navigation";
import { userRegistration } from "../Services/apiService";
import toast from "react-hot-toast";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const data: any = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

     if(!data.email)
    {
      toast.error("Required Email")
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Invalid Email Format");
      return;
    }

    if(!data.password)
    {
      toast.error("Required Password")
      return;
    }

     setLoading(true);

    try {
      const res = await userRegistration<{
        isSuccess: boolean;
        result: any;
        messages: string[];
        errorMessages?: string[];
      }>(data);

      if (res.isSuccess) {
        toast.success(res.messages[0]);
        setLoading(false);
        router.push('/login')
      } else {
        toast.error(res?.messages![0]);
        setLoading(false);
      }
    } catch (error: any) {
      const message = error?.errorMessages?.[0] || error?.messages?.[0] || "An unexpected error occurred";
      toast.error(message);
      setLoading(false);
    }
  };


  return (
    <AuthForm
      title="Register"
      submitText="Create Account"
      linkText="Already have an account?"
      linkHref="/login"
      onSubmit={handleRegister}
      loading={loading}
    />
  );
}
