import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import aaronPhoto from "../assets/hero_pic.jpg"

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-24">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="mb-4 h-1 w-24 rounded-full bg-blue-500"></div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
            Change the world,
            <br />
            <span className="text-blue-500">
              one software at a time
            </span>
          </h1>

          <h2 className="mb-10 text-xl text-gray-300 md:text-2xl">
            Hello, I'm Aaron Lazaro.
            <br />
            Full-Stack AI Developer
          </h2>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Aaronicss"
              className="rounded-full border border-gray-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/aaron-lazaro/"
              className="rounded-full border border-gray-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://www.facebook.com/OfficialAaronLazaro/"
              className="rounded-full border border-gray-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="mailto:lazaroaaronpaul@gmail.com"
              className="rounded-full border border-gray-700 p-4 transition hover:border-blue-500 hover:text-blue-500"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Right Content - Photo Placeholder */}
        <div className="hidden md:flex">
          <div className="relative">
            {/* Blue Accent */}
            <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-blue-500"></div>

            {/* Photo Container */}
            <div className="relative flex h-125 w-100 items-center justify-center rounded-3xl border border-gray-800 bg-zinc-900">
              {
              <img
                src={aaronPhoto}
                alt="Aaron Lazaro"
                className="h-full w-full rounded-3xl object-cover"
              />
              }
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}