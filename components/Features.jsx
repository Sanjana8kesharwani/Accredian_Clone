export default function Features() {
  const data = [
    { value: "50%", title: "Highest Salary Hike" },
    { value: "50%", title: "Average Salary Hike" },
    { value: "50%", title: "Positive Career Impact" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-xl text-center mb-10">
          A Legacy of{" "}
          <span className="text-blue-600">Excellence & Impact</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl text-center shadow">
              <h3 className="text-2xl font-bold text-blue-600">
                {item.value}
              </h3>
              <p className="text-gray-600 mt-2">{item.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}