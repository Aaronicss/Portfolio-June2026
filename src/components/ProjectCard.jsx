function ProjectCard({ title, description, image, link }) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-blue-500">
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mb-6 text-gray-400">
          {description}
        </p>

        {link ? (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block rounded-xl bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-600"
  >
    View Project
  </a>
) : (
  <button
    disabled
    className="cursor-not-allowed rounded-xl bg-gray-700 px-5 py-3 font-medium text-gray-400"
  >
    Private Project
  </button>
)}
      </div>
    </div>
  );
}

export default ProjectCard;