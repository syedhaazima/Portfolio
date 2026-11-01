
import { Helmet } from "react-helmet-async";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "⌨️",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    icon: "🌐",
    skills: ["HTML5", "CSS3", "React.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Data Analytics & AI",
    icon: "🤖",
    skills: ["Pandas", "NumPy", "Power BI","SQL","Jupyter Notebook", "Excel"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Excel", "Figma", "Canva","Antigravity"],
  },
];

export default function Skills() {
  return (
    <>
      <Helmet>
        <title>Technical Skills | Syed Haazima A</title>
        <meta
          name="description"
          content="Explore Syed Haazima A's technical skills in Java, Python, JavaScript, React, Node.js, SQL, AI, machine learning, Power BI and data analytics."
        />
        <meta
          name="keywords"
          content="Syed Haazima Skills, Java Developer, Python Developer, React Developer, MERN Stack, SQL, Power BI, Machine Learning, Data Analytics"
        />
        <meta
          property="og:title"
          content="Technical Skills | Syed Haazima A"
        />
        <meta
          property="og:description"
          content="Discover my programming, full-stack development, AI and data analytics skills."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="skills"
        className="min-h-screen bg-[#090612] px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              My Technical Arsenal
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Skills & <span className="text-purple-400">Technologies</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-400">
              Technologies and tools I use to build applications,
              solve problems and bring ideas to life.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-500" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="group rounded-2xl border border-purple-500/20 bg-[#160f25] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/20"
              >
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-2xl">
                    {group.icon}
                  </span>

                  <h3 className="text-lg font-bold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-purple-500/20 bg-purple-500/5 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-400/60 hover:bg-purple-500/15 hover:text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
