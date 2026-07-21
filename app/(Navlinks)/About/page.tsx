import { Crown, Stamp } from "lucide-react";
import Image from "next/image";

const contributors = [
  {
    name: "Krish (Messi Paglu 😘)",
    image: "/krish oliya.jpeg",
    post: "Frontend-developer",
    contribution:
      "Dedicated countless hours to researching... absolutely nothing useful. .Messi Die hard fan ,Above pic was taken when Messi and Krish were making strategy for Spain vs Argentina match (Results = iykyk) ",
  },
  {
    name: "Ribesh",
    image: "/ribesh.jpeg",
    post: "UI/UX Designer",
    contribution:
      " Our  teammate somehow the first one to get a job. Carries the team's motivation—and occasionally everyone's expectations too.",
  },
  {
    name: "Bharat",
    image: "/bharat.jpeg",
    post: "Backend Developer",
    contribution:
      "Professional supplier of 'thulo guff'. Every story starts with 'Bro, trust me...' and somehow gets more unbelievable every minute. Still keeps the group entertained 24/7.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-30 ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl mx-auto ">
          <h2 className="mb-3 text-4xl font-bold flex gap-2 justify-center rounded-2xl bg-blue-800 p-2 text-white   items-center ">
            <span>Special Contributors</span>
            <Stamp className="text-orange-6" size={34} />
          </h2>
        </div>

        <p className="mb-12 text-center text-gray-600">
          Without these legends, this project would probably have been finished
          earlier.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {contributors.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl bg-white  p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex justify-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={180}
                  height={180}
                  className="h-44 w-44 rounded-full object-cover"
                />
              </div>
              <div className="pb-8">
                <p className="text-center px-4 py-2 rounded-2xl text-sm text-white about tracking-wider bg-blue-900 ">
                  {person.post}
                </p>
              </div>

              <h3 className="mb-3 text-center text-2xl font-bold">
                {person.name}
              </h3>

              <p className="text-center text-gray-600">{person.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
