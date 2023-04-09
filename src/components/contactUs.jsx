'use client';
import { useState } from "react";
import Wrapper from "./reusableComponent/wrapper";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
  };

  return (
    <Wrapper title={"Title"} className="bg-white h-[100vh]">

    </Wrapper>
  );
}
