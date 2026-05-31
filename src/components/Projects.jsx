import ProjectCard from "./ProjectCard";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.png"
import project4 from "../assets/project4.png"
import project5 from "../assets/project5.png"

export default function Projects() {
  const projects = [
    {
      title: "SoleID: AI-Powered Sneaker Identification",
      description:
        "used Computer Vision and Deep Learning techniques to classify shoe models to improve product discoverability and purchasing.",
      image: project1,
      link: "https://sole-id-iota.vercel.app",
    },
    {
      title: "In-Vento: Intelligent Automated Inventory System for SME",
      description:
        "used Computer Vision and Machine Learning to automate and predict shelf life of burger ingredients to improve business operations efficiency.",
      image: project2,
      link: "#",
    },
    {
      title: "AI-Powered Museum Tour Guide",
      description:
        "used YOLOv11 to map geo-location and assist visitors.",
      image: project3,
      link: null,
    },
    {
      title: "Emosense using Natural Language Processing",
      description:
        "used Natural Language Processing to detect emotions from textual-input.",
      image: project4,
      link: "https://https://emosenses.streamlit.app",
    },
    {
      title: "Floodguard using Machine Learning",
      description:
        "used Machine Learning to predict flood probability and allocate resources.",
      image: project5,
      link: "https://https://floodguard.streamlit.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-black py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>

          <h2 className="text-4xl font-bold text-white">
            Projects
          </h2>

          <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-8 xl:grid-cols-3 mb-8">
  {projects.slice(0, 3).map(project => (
    <ProjectCard key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      link={project.link}/>
  ))}
</div>

<div className="flex justify-center gap-8">
  {projects.slice(3).map(project => (
    <div className="w-full max-w-sm">
      <ProjectCard key={project.title}
      title={project.title}
      description={project.description}
      image={project.image}
      link={project.link} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}