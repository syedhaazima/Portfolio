
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import heroImage from "../assets/img.png";

export default function Hero() {
  return (
    <>
      <Helmet>
        <title>Syed Haazima A | MERN Stack & AI Developer</title>
        <meta
          name="description"
          content="Explore Syed Haazima A's portfolio featuring MERN stack development, artificial intelligence, data analytics, and innovative software projects."
        />
        <meta
          name="keywords"
          content="Syed Haazima, MERN Stack Developer, AI Developer, React Developer, Python, Data Analytics, Portfolio"
        />
        <meta
          property="og:title"
          content="Syed Haazima A | Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Building intelligent applications and meaningful digital experiences."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-[#090612] px-6 pt-24"
      >
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              ✦ Welcome to my universe
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Hi, I'm
              <span className="text-purple-400"> Syed</span>
              <br />
              Haazima A
            </h1>

            <h2 className="mt-5 text-xl font-medium text-gray-300 md:text-2xl">
              MERN Stack Developer
              <span className="text-purple-400"> | </span>
              AI Developer
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              Building intelligent applications and meaningful digital
              experiences through web development, artificial intelligence,
              and data analytics.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="rounded-lg bg-purple-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/30"
              >
                Explore My Work
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-purple-400/50 px-7 py-3 font-semibold text-purple-300 transition duration-300 hover:bg-purple-500/10"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-9 flex items-center gap-6">
              <a
                href="https://github.com/syedhaazima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 transition hover:text-purple-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/syed-haazima-a-3197032bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 transition hover:text-purple-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:syedhaazima263@gmail.com"
                className="text-sm font-medium text-gray-400 transition hover:text-purple-400"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Developer Image Reactor */}
          <div className="relative mx-auto flex h-[350px] w-[350px] items-center justify-center md:h-[450px] md:w-[450px]">
            <div className="absolute h-[300px] w-[300px] animate-spin rounded-full border border-purple-500/30 [animation-duration:20s] md:h-[390px] md:w-[390px]" />

            <div className="absolute h-[240px] w-[240px] animate-spin rounded-full border-2 border-dashed border-purple-400/40 [animation-duration:15s] [animation-direction:reverse] md:h-[320px] md:w-[320px]" />

            <div className="absolute h-[180px] w-[180px] rounded-full bg-purple-600/20 shadow-[0_0_100px_rgba(168,85,247,0.5)] blur-xl md:h-[230px] md:w-[230px]" />

            <div className="relative z-10 h-36 w-36 overflow-hidden rounded-full border border-purple-300/60 bg-[#160c2b] shadow-[0_0_45px_rgba(168,85,247,0.6)] md:h-48 md:w-48">
              <img

  src={heroImage}
                alt="Developer workstation"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute right-0 top-12 rounded-lg border border-purple-500/30 bg-[#160c2b]/90 px-4 py-2 text-sm text-purple-200">
              DataAnalytics
            </div>

            <div className="absolute bottom-12 left-0 rounded-lg border border-purple-500/30 bg-[#160c2b]/90 px-4 py-2 text-sm text-purple-200">
              MERN STACK
            </div>
          </div>
        </div>

        <Link
          to="/about"
          className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-purple-400"
          aria-label="Go to About page"
        >
          ↓
        </Link>
      </section>
    </>
  );
}
