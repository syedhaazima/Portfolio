
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Me | Syed Haazima A</title>
        <meta
          name="description"
          content="Learn about Syed Haazima A, a Computer Science Engineering student passionate about React, full-stack development, artificial intelligence and data analytics."
        />
        <meta
          name="keywords"
          content="About Syed Haazima, Computer Science Student, MERN Stack Developer, AI Developer, Data Analytics"
        />
        <meta
          property="og:title"
          content="About Me | Syed Haazima A"
        />
        <meta
          property="og:description"
          content="Discover my education, technical interests and journey in software development, AI and data analytics."
        />
        <meta property="og:type" content="profile" />
      </Helmet>

      <section
        id="about"
        className="relative min-h-screen overflow-hidden bg-[#0d0818] px-6 pb-24 pt-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              Get To Know Me
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              About <span className="text-purple-400">Me</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-500" />
          </div>

          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-purple-600/10 blur-2xl" />

              <div className="relative rounded-2xl border border-purple-500/20 bg-[#160f25] p-8">
                <p className="mb-5 text-lg leading-9 text-gray-300">
                  Hello! I'm <span className="font-semibold text-purple-400">Syed Haazima A</span>,
                  a Computer Science and Engineering student passionate about
                  building modern web applications and intelligent solutions.
                </p>

                <p className="mb-5 leading-8 text-gray-400">
                  I work with React, JavaScript, Node.js, Python and SQL.
                  My interests include full-stack development, Artificial
                  Intelligence and Data Analytics.
                </p>

                <p className="leading-8 text-gray-400">
                  I enjoy transforming ideas into practical projects,
                  exploring new technologies and continuously improving
                  my development skills through hands-on experience.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-purple-500/20 bg-[#160f25] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
                <div className="mb-4 text-3xl">🎓</div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Education
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                 AL-Ameen Engineering College , Erode.
                </p>
                <p className="text-sm leading-6 text-gray-400">
                  B.E. Computer Science and Engineering
                </p>
                <p className="mt-2 text-sm text-purple-400">
                  2023 – 2027
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-[#160f25] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
                <div className="mb-4 text-3xl">💻</div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  MERN Development
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  Building responsive web applications and  MERN full-stack projects.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-[#160f25] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
                <div className="mb-4 text-3xl">🤖</div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Artificial Intelligence
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  Exploring AI applications, machine learning.
                </p>
              </div>

              <div className="rounded-xl border border-purple-500/20 bg-[#160f25] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60">
                <div className="mb-4 text-3xl">📊</div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  Data Analytics
                </h3>
                <p className="text-sm leading-6 text-gray-400">
                  Working with Python , Pandas , Numpy , SQL, Excel and Power BI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
