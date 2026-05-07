export default function GDesignsWebsite() {
  return (
    <div className="bg-black text-white overflow-x-hidden scroll-smooth font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <img
              src="/logo.jpeg"
              alt="logo"
              className="w-14 h-14 md:w-16 md:h-16 object-cover border border-yellow-500 rounded"
            />

            <h1 className="text-[10px] sm:text-sm md:text-xl lg:text-2xl font-semibold text-yellow-400 tracking-wide whitespace-nowrap">
              G DESIGNS ARCHITECTS & BUILDERS
            </h1>

          </div>

          {/* MENU */}
          <div className="hidden lg:flex gap-10 text-sm uppercase tracking-widest">

            <a href="#home" className="hover:text-yellow-400 transition">
              Home
            </a>

            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>

          </div>

          {/* BUTTON */}
          <a
            href="#contact"
            className="hidden md:block border border-yellow-500 px-6 py-3 text-yellow-400 hover:bg-yellow-500 hover:text-black transition"
          >
            Get In Touch
          </a>

        </div>

      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto pt-28">

          {/* TITLE */}
          <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl font-extrabold text-yellow-400 leading-tight tracking-wide drop-shadow-2xl">
            G DESIGNS ARCHITECTS & BUILDERS
          </h1>

          {/* DECORATION */}
          <div className="flex items-center justify-center gap-4 mt-8">

            <div className="h-[1px] w-16 md:w-32 bg-yellow-500"></div>

            <div className="w-3 h-3 bg-yellow-500 rotate-45"></div>

            <div className="h-[1px] w-16 md:w-32 bg-yellow-500"></div>

          </div>

          {/* SUBTITLE */}
          <p className="mt-8 text-lg md:text-2xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed">
            Designing timeless spaces with innovation,
            elegance and structural excellence.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a
              href="#projects"
              className="bg-yellow-400 text-black px-10 py-5 text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-500 text-yellow-400 px-10 py-5 text-lg hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-black to-[#0b0b0b]"
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Building Dreams.
              <br />
              Creating Reality.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              G Designs Architects & Builders specializes in residential,
              commercial and modern architectural projects.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Our mission is to blend creativity with functionality
              to create inspiring luxury spaces with precision.
            </p>

            <a
              href="#projects"
              className="inline-block border border-yellow-500 text-yellow-400 px-8 py-4 hover:bg-yellow-500 hover:text-black transition"
            >
              Explore Projects
            </a>

          </div>

          {/* IMAGE */}
          <div className="relative">

            <img
              src="/house1.jpeg"
              alt="house"
              className="rounded-lg shadow-2xl border border-yellow-500/20"
            />

            <div className="absolute -right-4 -top-4 grid grid-cols-6 gap-2">

              {Array.from({ length: 36 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-yellow-500 rounded-full"
                ></div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-6 bg-black"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              Featured Projects
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Premium Architectural Designs
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* PROJECT 1 */}
            <div className="group overflow-hidden rounded-xl border border-yellow-500/20">

              <img
                src="/house1.jpeg"
                alt="project"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* PROJECT 2 */}
            <div className="group overflow-hidden rounded-xl border border-yellow-500/20">

              <img
                src="/house2.jpeg"
                alt="project"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* PROJECT 3 */}
            <div className="group overflow-hidden rounded-xl border border-yellow-500/20">

              <img
                src="/stairs1.jpeg"
                alt="stairs"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* PROJECT 4 */}
            <div className="group overflow-hidden rounded-xl border border-yellow-500/20">

              <img
                src="/stairs2.jpeg"
                alt="stairs"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

          </div>

        </div>

      </section>

      {/* FLOOR PLAN */}
      <section className="py-24 px-6 bg-[#050505]">

        <div className="max-w-7xl mx-auto text-center">

          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Floor Plan
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-14">
            Detailed Architectural Planning
          </h2>

          <a
            href="/final floor plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-yellow-500/20 rounded-xl p-10 hover:bg-yellow-500/10 transition"
          >

            <h3 className="text-3xl text-yellow-400 font-semibold mb-4">
              View Floor Plan PDF
            </h3>

            <p className="text-gray-400">
              Click to open detailed architectural floor plan.
            </p>

          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-20 px-6 border-t border-yellow-500/10 bg-black"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {/* EMAIL */}
          <div>

            <p className="text-yellow-500 text-lg mb-3">
              Email
            </p>

            <p className="text-gray-300 break-all">
              gdesigns.ab@gmail.com
            </p>

          </div>

          {/* PHONE */}
          <div>

            <p className="text-yellow-500 text-lg mb-3">
              Phone
            </p>

            <p className="text-gray-300">
              +91 9567169331
            </p>

          </div>

          {/* KERALA */}
          <div>

            <p className="text-yellow-500 text-lg mb-3">
              Kerala Office
            </p>

            <p className="text-gray-300">
              Palace Road Attingal,
              Kerala, India
            </p>

          </div>

          {/* KARNATAKA */}
          <div>

            <p className="text-yellow-500 text-lg mb-3">
              Karnataka Office
            </p>

            <p className="text-gray-300">
              Bengaluru, Karnataka,
              India
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center bg-black border-t border-yellow-500/10 text-gray-500">

        © 2026 G Designs Architects & Builders.
        All rights reserved.

      </footer>

    </div>
  );
}