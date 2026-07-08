import Image from "next/image";

const contributors = [
  {
    name: "Krish (Budo)",
    image: "/krish.jpeg",
    contribution:
      "Dedicated countless hours to researching... absolutely nothing useful. Still managed to become the team's certified relationship analyst. If there's a girl within a 5 km radius, Budo somehow knows.",
  },
  {
    name: "Ribesh",
    image: "/ribesh.jpeg",
    contribution:
      "Proof that height doesn't measure success. Our shortest teammate but somehow the first one to get a job. Carries the team's motivation—and occasionally everyone's expectations too.",
  },
  {
    name: "Bharat",
    image: "/bharat.jpeg",
    contribution:
      "Professional supplier of 'thulo guff'. Every story starts with 'Bro, trust me...' and somehow gets more unbelievable every minute. Still keeps the group entertained 24/7.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-50 py-30 "
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-3 text-center text-4xl font-bold">
          Special Contributors 😂
        </h2>

        <p className="mb-12 text-center text-gray-600">
          Without these legends, this project would probably have been finished
          earlier.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {contributors.map((person) => (
            <div
              key={person.name}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
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

              <h3 className="mb-3 text-center text-2xl font-bold">
                {person.name}
              </h3>

              <p className="text-center text-gray-600">
                {person.contribution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}