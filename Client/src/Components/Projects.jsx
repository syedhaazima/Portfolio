
import { Helmet } from "react-helmet-async";

const projects = [
  {
    number: "01",
    title: "UPI Fraud Detection",
    category: "Data Analytics",
    description:
      "Analyzed 26,000+ UPI transactions to identify fraudulent patterns using statistical analysis, data cleaning and visualization techniques.",
    technologies: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
  },
  {
    number: "02",
    title: "Influencer Campaign Performance Tracker",
    category: "Business Intelligence",
    description:
      "Developed a Power BI dashboard to analyze influencer campaign performance, engagement metrics and business insights from 100,000+ records.",
    technologies: ["Power BI", "Python", "Pandas"],
  },
  {
    number: "03",
    title: "AI-Powered GitHub Profile Analyzer",
    category: "AI Application",
    description:
      "Built an AI-powered application concept to analyze GitHub profiles and generate insights using GitHub API and an LLM.",
    technologies: ["React", "Node.js", "Express", "GitHub API", "Ollama"],
  },
  {
    number: "04",
    title: "LuxeStay – Hotel Management",
    category: "Full Stack Development",
    description:
      "Developed a hotel management CRUD application with hotel listing, data management and a responsive user interface.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    number: "05",
    title: "Karpanai Technologies",
    category: "Client Website",
    description:
      "Developed a corporate website for a STEM and AI education company, showcasing technology programs, courses and educational services.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
  },
  {
    number: "06",
    title: "Weather Application",
    category: "Frontend Development",
    description:
      "Created a weather application with a simple interface to display weather information using web technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>My Projects | Syed Haazima A - Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Syed Haazima A's projects in AI applications, UPI fraud detection, data analytics, Power BI, MERN stack development and web applications."
        />
        <meta
          name="keywords"
          content="Syed Haazima Projects, UPI Fraud Detection, Power BI Dashboard, AI GitHub Analyzer, MERN Stack Projects, React Projects, Data Analytics"
        />
        <meta
          property="og:title"
          content="Projects | Syed Haazima A"
        />
        <meta
          property="og:description"
          content="Explore my software development, artificial intelligence and data analytics projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="projects"
        className="min-h-screen bg-[#0d0818] px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              My Work & Creations
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured <span className="text-purple-400">Projects</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              A collection of projects where I turn ideas into
              practical applications and meaningful solutions.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-500" />
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#160f25] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/20"
              >
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-purple-500 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="mb-7 flex items-center justify-between">
                  <span className="text-3xl font-bold text-purple-400/40">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-4 text-xl font-bold text-white transition group-hover:text-purple-300">
                  {project.title}
                </h3>

                <p className="mb-7 min-h-[100px] text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="border-t border-purple-500/20 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-purple-500/10 px-3 py-2 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}