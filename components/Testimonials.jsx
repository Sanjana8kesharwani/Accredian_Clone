import Image from "next/image";

export default function Testimonials() {
  const logos = [
    "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
    "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-xl mb-10">
          Real-World Learning Powered By{" "}
          <span className="text-blue-600">Leading Institutions</span>
        </h2>

        <div className="flex justify-center items-center gap-16">

          {logos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="logo"
              width={120}
              height={60}
              className="object-contain"
            />
          ))}

        </div>

      </div>
    </section>
  );
}