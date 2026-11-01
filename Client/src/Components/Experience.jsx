
import { Helmet } from "react-helmet-async";

const experiences = [
  {
    role: "AI & ML Intern",
    company: "WAISE-Women in AI Empowerment",
    duration: "15 Days",
    type: "Internship",
    description:
      "Worked on an AI Hallucination Risk Detector project, exploring Natural Language Processing and Machine Learning concepts using Python and Scikit-learn.",
    skills: ["Python", "Machine Learning", "NLP", "Scikit-learn"],
  },
  {
    role: "Full Stack Development Intern",
    company: "FictionMaster",
    duration: "10 Days",
    type: "Internship",
    description:
      "Gained practical exposure to frontend and backend development, working with web technologies and full-stack application concepts.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
];

const achievements = [
  {
    title: "1st Place",
    event: "Prompt 2 Web – Engineers Day 2K25",
  },
  {
    title: "3rd Place",
    event: "Web Gen Intra Hackathon 2K25",
  },
  {
    title: "Conference Presentation",
    event: "International Conference",
  },
];

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience & Achievements | Syed Haazima A</title>
        <meta
          name="description"
          content="Explore Syed Haazima A's internship experience in AI and full-stack development, along with hackathon awards and conference achievements."
        />
        <meta
          name="keywords"
          content="Syed Haazima Experience, AI Internship, Full Stack Developer Internship, Machine Learning, NLP, Hackathon Achievements"
        />
        <meta
          property="og:title"
          content="Experience & Achievements | Syed Haazima A"
        />
        <meta
          property="og:description"
          content="My professional journey, AI and full-stack internships, and technical achievements."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="min-h-screen bg-[#0d0818] px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              My Professional Journey
            </p>

            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Experience & <span className="text-purple-400">Achievements</span>
            </h1>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-500" />
          </div>

          <h2 className="mb-8 text-2xl font-bold text-white">
            Internship Experience
          </h2>

          <div className="relative space-y-8 border-l-2 border-purple-500/30 pl-7">
            {experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative rounded-2xl border border-purple-500/20 bg-[#160f25] p-7 transition duration-300 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/20"
              >
                <span className="absolute -left-[37px] top-8 h-4 w-4 rounded-full border-4 border-[#0d0818] bg-purple-400" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-purple-500/10 px-4 py-1 text-xs font-semibold text-purple-300">
                    {experience.type}
                  </span>

                  <span className="text-sm text-gray-400">
                    {experience.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {experience.role}
                </h3>

                <p className="mt-2 font-medium text-purple-400">
                  {experience.company}
                </p>

                <p className="mt-4 leading-7 text-gray-400">
                  {experience.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-purple-500/20 px-3 py-2 text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="mb-8 text-2xl font-bold text-white">
              Achievements
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title + achievement.event}
                  className="rounded-2xl border border-purple-500/20 bg-[#160f25] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60"
                >
                  <div className="mb-4 text-3xl">🏆</div>

                  <h3 className="text-xl font-bold text-purple-300">
                    {achievement.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {achievement.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
