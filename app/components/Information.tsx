import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type props = {
  formdata: {
    title: string;
    name: string;
    Faculty: string;
    Semester: string;
    date: string;
    teacher:string;
  };

  setformdata: Dispatch<
    SetStateAction<{
      title: string;
      name: string;
      Faculty: string;
      Semester: string;
      date: string;
      teacher:string;
    }>
  >;
};

const Information = ({ formdata, setformdata }: props) => {
  const handleinputchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="md:w-[50%] w-full h-full mt-10  border-2 border-zinc-300 bg-white shadow-2xl drop-shadow-2xl  rounded-lg p-8">
      <h1 className="text-3xl text-center pb-6 lobster-two-regular-italic">Edit Information</h1>

      <section className="flex flex-col gap-8">
        {/* TITLE */}

        <div className="flex flex-col">
          <label>Title</label>
          <input
            name="title"
            value={formdata.title ?? ""}
            onChange={handleinputchange}
            className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="Report on Discrete Structure"
          />
        </div>

        {/* NAME */}

        <div className="flex flex-col">
          <label>Name</label>

          <input
            name="name"
            value={formdata.name ?? ""}
            onChange={handleinputchange}
            className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="Nabin Khatri"
          />
        </div>

        {/* FACULTY */}

        <div className="flex flex-col">
          <label>Faculty</label>

          <input
            name="Faculty"
            value={formdata.Faculty ?? ""}
            onChange={handleinputchange}
            className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="BCA"
          />
        </div>

        {/* SEMESTER */}

        <div className="flex flex-col">
          <label>Semester</label>

          <input
            name="Semester"
            value={formdata.Semester ?? ""}
            onChange={handleinputchange}
           className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="2nd Semester"
          />
        </div>

     

    {/* DATE */}

        <div className="flex flex-col">
          <label>Date</label>

          <input
            name="date"
            value={formdata.date ?? ""}
            onChange={handleinputchange}  
           className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="2083-04-01"
          />
        </div>

        {/* TEACHER */}

         <div className="flex flex-col">
          <label>Teacher</label>

          <input
            name="teacher"
            value={formdata.teacher ?? ""}
            onChange={handleinputchange}  
            className=" p-4 rounded-lg  outline-gray-100  focus:outline-blue-600 outline-2 shadow-md shadow-black/40"
            placeholder="Govinda Raj Khaniya"
          />
        </div>
      </section>
    </main>
  );
};

export default Information;
