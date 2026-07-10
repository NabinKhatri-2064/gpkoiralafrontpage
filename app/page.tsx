"use client";

import React, { useState } from "react";
import Information from "./components/Information";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";

const page = () => {
  const [formdata, setFormData] = useState({
    title: "",
    name: "",
    Faculty: "",
    Semester: "",
    date: "",
    teacher: "",
  });

  return (
    <main className="pt-25  px-20">
      <section className="flex-col md:flex md:flex-row   gap-5">
        <Information formdata={formdata} setformdata={setFormData} />
        <Preview formdata={formdata} />
      </section>
    </main>
  );
};

export default page;
