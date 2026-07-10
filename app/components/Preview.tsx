import html2canvas from "html2canvas";
import Image from "next/image";
import logo from "@/public/gpkoiralalogo.jpg";
import jsPDF from "jspdf";
import React from "react";

type props = {
  formdata: {
    title: string;
    name: string;
    Faculty: string;
    Semester: string;
    date: string;
    teacher:string;
  };
};

const Preview = ({ formdata }: props) => {
  const downloadpdf = async () => {
    const input = document.getElementById("pdf");

    if (!input) return;

    const canvas = await html2canvas(input,{
      scale:4
    });
    const imgdata = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const width = 190;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgdata, "PNG", 10, 10, width, height);
    pdf.save("frontpage.pdf");
  };

  return (
    <div className="w-full flex justify-center flex-col gap-8 items-center p-10">
      <div
        id="pdf"
        className="w-198.5 min-h-280.75   border-2  p-8 rounded-md font-[Times-new-roman]  "
      >
        <div className="flex justify-center">
          <img src="./gpkoiralalogo.jpg" width={100} height={100} alt="logo" />

        </div>


        <div className="flex flex-col gap-4 items-center">

          <p className=" text-[35px] font-semibold">Tribhuwan University</p>
          <p className=" text-[28px] font-semibold">
            G.P Koirala Memorial(Community)College
          </p>
        </div>

        <div>
          <div className="flex flex-col items-center pt-8 ">
            <p className="text-xl">Sifal, Kathmandu</p>
          </div>

          <div className="flex pt-20 gap-15 justify-center">
            <div className="flex-col flex gap-4 text-2xl">
              <p>Title </p>
              <p>Name </p>
              <p>Faculty </p>
              <p>Semester </p>
              <p>Date </p>

            </div>

            <div className="flex flex-col gap-4 text-2xl">
              <p>:&nbsp;&nbsp;{formdata.title}</p>
              <p>:&nbsp;&nbsp;{formdata.name}</p>
              <p>:&nbsp;&nbsp;{formdata.Faculty}</p>
              <p>:&nbsp;&nbsp;{formdata.Semester}</p>
              <p>:&nbsp;&nbsp;{formdata.date}</p>

            </div>
          </div>

          <div className="flex flex-col  items-center pt-10">
            <p className="underline text-2xl font-bold pb-8">Submitted to</p>
            <p className="  font-semibold text-xl pb-1">
              G.P Koirala Memorial(Community)College
            </p>
            <p className="text-xl">Sifal,Kathmandu</p>
            <p>(Affiliated to Tribhuwan University)</p>
            <p className="pt-15 text-2xl font-semibold pb-2">Submitted By</p>
            <p className="font-semibold text-3xl">{formdata.name}</p>
          </div>
          <div className="pt-20 flex px-10  justify-end  ">
            <div className="flex flex-col items-center ">
              <p className="text-2xl">Signature</p>
              <p className="text-2xl">...................</p>
              <p className="text-2xl">{(formdata.teacher)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <button onClick={downloadpdf} className="p-2 bg-blue-500 w-full  text-white transition-transform hover:cursor-pointer hover:bg-blue-700  hover:scale-105 rounded-md ">
          Download pdf
        </button>
      </div>
    </div>
  );
};

export default Preview;
