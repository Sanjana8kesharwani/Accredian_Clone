export default function Navbar() {
  return (
    <div className="bg-white shadow-sm w-full">

      <div className="bg-blue-100 text-center py-2 text-sm">
        Navigate your ideal career path
      </div>

      <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <h1 className="text-blue-600 font-bold text-xl">accredian</h1>

        <div className="flex gap-6 items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Courses
          </button>
          <p>For Business</p>
          <p>Resources</p>
          <p>About Us</p>
          <button className="border px-4 py-2 rounded-lg">Login</button>
        </div>
      </nav>
    </div>
  );
}