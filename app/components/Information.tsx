import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

type props = {
  formdata: {
    title: string;
    name: string;
    Faculty: string;
    Semester: string;
    address: string;
    date: string;
    teacher:string;
  };

  setformdata: Dispatch<
    SetStateAction<{
      title: string;
      name: string;
      Faculty: string;
      Semester: string;
      address: string;
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
    <main className="md:w-[30%] w-full min-h-screen bg-gray-200 rounded-md p-8">
      <h1 className="text-3xl text-center pb-6">gp frontpage generator</h1>

      <section className="flex flex-col gap-8">
        {/* TITLE */}

        <div className="flex flex-col">
          <label>Title</label>
          <input
            name="title"
            value={formdata.title ?? ""}
            onChange={handleinputchange}
            className="outline p-2 rounded-md bg-blue-"
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
            className="border p-2 rounded-md"
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
            className="border p-2 rounded-md"
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
            className="border p-2 rounded-md"
            placeholder="2nd Semester"
          />
        </div>

      {/* ADDRESS */}

        <div className="flex flex-col">
          <label>Address</label>

          <input
            name="address"
            value={formdata.address ?? ""}
            onChange={handleinputchange}
            className="border p-2 rounded-md"
            placeholder="Dakshindhoka, Kathmandu"
          />
        </div>

    {/* DATE */}

        <div className="flex flex-col">
          <label>Date</label>

          <input
            name="date"
            value={formdata.date ?? ""}
            onChange={handleinputchange}  
            className="border p-2 rounded-md"
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
            className="border p-2 rounded-md"
            placeholder="Govinda Raj Khaniya"
          />
        </div>
      </section>
    </main>
  );
};

export default Information;
