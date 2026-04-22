import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Level Up Your Career <br />
            With <span className="text-blue-600">Indias</span> <br />
            <span className="text-blue-600">Top Institutes</span>
          </h1>

          <div className="flex gap-4 mt-8">
            <button className="border px-6 py-3 rounded-lg">
              Explore Courses
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Talk to Expert
            </button>
          </div>
        </div>

        <div className="flex-1">
          <Image
  src="https://images.unsplash.com/photo-1573164713988-8665fc963095"
  alt="hero"
  width={600}
  height={400}
  priority
  className="rounded-xl w-full h-auto"
/>
        </div>

      </div>
    </section>
  );
}