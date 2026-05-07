import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function App() {
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
            Designing timeless spaces with innovation, elegance,
            and structural excellence.
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

      {/* ABOUT SECTION */}
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
              projects. Our mission is to blend creativity with
              functionality to create inspiring spaces.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              From concept planning to final construction, we
              ensure quality, precision, and customer satisfaction
              at every stage.
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

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="bg-[#050505] py-24 px-6 md:px-20"
      >
        <div className="text-center mb-16">
          <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
            Our Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Explore Our Creations
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "/project1.jpeg",
            "/project2.jpeg",
            "/project3.jpeg",
            "/project4.jpeg",
            "/project5.jpeg",
            "/project6.jpeg",
            "/project7.jpeg",
            "/project8.jpeg",
            "/project9.jpeg",
          ].map((img, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-[#111] border border-yellow-500/10 shadow-2xl hover:border-yellow-500/50 transition duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="Project"
                  className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  Premium Design Project
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Modern architecture blending luxury,
                  functionality, elegance, and timeless aesthetics.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-black py-24 px-6 md:px-20 text-center"
      >
        <p className="text-yellow-500 uppercase tracking-[4px] mb-4">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let’s Build Something Amazing
        </h2>

        <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

        <p className="text-gray-400 text-lg mb-12">
          Contact G Designs Architects & Builders for modern
          architectural solutions and premium construction services.
        </p>

        <div className="space-y-8 text-lg">
          {/* EMAIL */}
          <div className="flex justify-center items-center gap-4">
            <FaEnvelope className="text-yellow-400 text-2xl" />

            <a
              href="mailto:gdesigns.ab@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              gdesigns.ab@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="flex justify-center items-center gap-4">
            <FaPhoneAlt className="text-yellow-400 text-2xl" />

            <a
              href="tel:+919567169331"
              className="hover:text-yellow-400 transition"
            >
              +91 9567169331
            </a>
          </div>

          {/* LOCATION */}
          <div className="flex justify-center items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />

            <div className="text-left text-gray-300">
              <p>Palace Road Attingal, Kerala</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

          {/* INSTAGRAM */}
          <div className="flex justify-center items-center gap-4">
            <FaInstagram className="text-yellow-400 text-2xl" />

            <a
              href="https://www.instagram.com/gdesigns.ab?igsh=MWpqem01cTNsM2JwNA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050505] border-t border-yellow-500/10 py-8 text-center text-gray-500">
        © 2026 G Designs Architects & Builders. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
