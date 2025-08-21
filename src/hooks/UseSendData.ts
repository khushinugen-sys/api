import { useState } from "react";

const UsesendData = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState<any>("");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: { preventDefault: any }) {
    e.preventDefault();
    const NEXT_PUBLIC_API_URL = "http://192.168.29.100:9009";
    const apires = await fetch(`${NEXT_PUBLIC_API_URL}/auth/email/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });
    if (apires.ok) {
      const res = await apires.json();
      console.log(res);
      setMessage("✔️Login Sucessful");
    } else {
      if (apires.status === 401) {
        setMessage("✔️Invalid Email or Password");
      }
    }
  }
  return {
    email,
    setEmail,
    password,
    setPassword,
    message,
    handleSubmit,
  };
};
export default UsesendData;
