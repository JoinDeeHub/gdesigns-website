import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function App() {
  const projects = [
    {
      image: "/project1.jpeg",
      title: "Luxury Courtyard Villa",
      desc: "Elegant tropical-style residence with open spaces and premium landscape planning.",
    },
    {
      image: "/project2.jpeg",
      title: "Modern Kerala Residence",
      desc: "Contemporary architecture inspired by traditional Kerala roofing aesthetics.",
    },
    {
      image: "/project3.jpeg",
      title: "Contemporary Family Home",
      desc: "Minimal modern elevation with luxurious outdoor and parking design.",
    },
    {
      image: "/project4.jpeg",
      title: "Urban Duplex Design",
      desc: "Sophisticated duplex residence designed for functionality and elegance.",
    },
    {
      image: "/project5.jpeg",
      title: "Premium Apartment Project",
      desc: "Multi-floor residential project with modern structural detailing.",
    },
    {
      image: "/project6.jpeg",
      title: "Luxury Landscape Design",
      desc: "Beautiful outdoor paving and landscape concepts with modern aesthetics.",
    },
    {
      image: "/project7.jpeg",
      title: "Architectural Visualization 1",
      desc: "High-quality architectural concept render with detailed planning.",
    },
    {
      image: "/project8.jpeg",
      title: "Architectural Visualization 2",
      desc: "High-quality architectural concept render with detailed planning.",
    },
    {
      image: "/project9.jpeg",
      title: "Architectural Visualization 3",
      desc: "High-quality architectural concept render with detailed planning.",
    },
  ];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b border-yellow-500/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <img
              src="/logo.jpeg"
              alt="Logo"
              className="w-14 h-14 rounded-full border border-yellow-500/40"
            />

            <h1 className="text-[10px] sm:text-sm md:text-xl lg:text-2xl font-semibold text-yellow-400 tracking-wide whitespace-nowrap">
              G DESIGNS ARCHITECTS & BUILDERS
            </h1>
          </div>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
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

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-center px-6"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1974&auto=format&fit=crop')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl">

          <p className="uppercase tracking-[8px] text-yellow-500 mb-4">
            Luxury Architecture & Construction
          </p>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-yellow-400">
            G DESIGNS ARCHITECTS & BUILDERS
          </h1>

          <div className="w-40 h-[2px] bg-yellow-500 mx-auto my-8"></div>

          <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Designing timeless spaces with innovation,
            elegance, and structural excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">

            <a
              href="#projects"
              className="bg-yellow-500 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300"
            >
              VIEW PROJECTS
            </a>

            <a
              href="#contact"
              className="border border-yellow-500 text-yellow-400 px-10 py-4 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              CONTACT US
            </a>

          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-[#0b0b0b] py-24 px-6 md:px-20"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div>

            <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Building Dreams. Creating Reality.
            </h2>

            <div className="w-24 h-1 bg-yellow-500 mb-8"></div>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              G Designs Architects & Builders specializes in
              residential, commercial, and modern architectural
              projects. Our mission is to blend creativity
              with functionality to create inspiring spaces.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              From concept planning to final construction,
              we ensure quality, precision, and customer
              satisfaction at every stage.
            </p>

          </div>

          <div>
            <img
              src="/project6.jpeg"
              alt="Architecture"
              className="rounded-3xl shadow-2xl object-cover h-full border border-yellow-500/20"
            />
          </div>

        </div>

      </section>

      {/* FEATURED PROJECTS */}
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

          <div className="grid md:grid-cols-2 gap-10">

            <div className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111]">

              <img
                src="/house1.jpeg"
                alt="House"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  Modern Luxury Residence
                </h3>

                <p className="text-gray-400">
                  Elegant contemporary architecture with
                  premium elevation and spacious planning.
                </p>
              </div>

            </div>

            <div className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111]">

              <img
                src="/house2.jpeg"
                alt="House"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  Contemporary Villa Design
                </h3>

                <p className="text-gray-400">
                  Premium residential architecture with
                  timeless aesthetics and elegance.
                </p>
              </div>

            </div>

            <div className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111]">

              <img
                src="/stairs1.jpeg"
                alt="Stairs"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  Premium Interior Staircase
                </h3>

                <p className="text-gray-400">
                  Luxury floating staircase concept with
                  elegant detailing and interiors.
                </p>
              </div>

            </div>

            <div className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-[#111]">

              <img
                src="/stairs2.jpeg"
                alt="Stairs"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-3">
                  Modern Interior Architecture
                </h3>

                <p className="text-gray-400">
                  Interior concepts designed with luxury,
                  creativity and modern aesthetics.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXPLORE MORE */}
      <section className="bg-[#050505] py-24 px-6 md:px-20">

        <div className="text-center mb-16">

          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            More Creations
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Explore More Projects
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/10 shadow-2xl hover:border-yellow-500/50 transition duration-500"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FLOOR PLAN */}
      <section className="py-24 px-6 bg-[#0b0b0b]">

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
            className="block border border-yellow-500/20 rounded-2xl p-12 hover:bg-yellow-500/10 transition duration-300 bg-[#111]"
          >

            <h3 className="text-3xl text-yellow-400 font-semibold mb-4">
              View Floor Plan PDF
            </h3>

            <p className="text-gray-400">
              Click here to explore detailed architectural
              floor plans and planning documentation.
            </p>

          </a>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-black py-24 px-6 text-center"
      >

        <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Contact G Designs Architects & Builders for
          premium architectural solutions and modern
          construction services.
        </p>

        <div className="space-y-6 text-lg">

          <a
            href="mailto:gdesigns.ab@gmail.com"
            className="flex justify-center items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaEnvelope className="text-yellow-500" />
            gdesigns.ab@gmail.com
          </a>

          <a
            href="tel:+919567169331"
            className="flex justify-center items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaPhoneAlt className="text-yellow-500" />
            +91 9567169331
          </a>

          <div className="flex justify-center items-start gap-6 flex-wrap">

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-500" />

            <p>Palace Road Attingal, Kerala</p>
          </div>

          <div className="text-yellow-500 text-xl font-semibold">
            &
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-yellow-500" />

            <p>Bengaluru, Karnataka, India</p>
          </div>

        </div>

          <a
            href="https://www.instagram.com/gdesigns.ab?igsh=MWpqem01cTNsM2JwNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-3 hover:text-yellow-400 transition"
          >
            <FaInstagram className="text-yellow-500" />
            Follow on Instagram
          </a>

        </div>

        <div className="border-t border-yellow-500/10 mt-16 pt-8 text-gray-500 text-sm">
          © 2026 G Designs Architects & Builders.
          All rights reserved.
        </div>

      </section>

    </div>
  );
}

export default App;