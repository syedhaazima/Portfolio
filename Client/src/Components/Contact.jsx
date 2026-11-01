
import { Helmet } from "react-helmet-async";

const contactDetails = [
  {
    title: "Email",
    value: "syedhaazima263@gmail.com",
    description: "Let's connect through email",
    link: "mailto:syedhaazima263@gmail.com",
    icon: "✉️",
    action: "Send Email",
  },
  {
    title: "Phone",
    value: "+91 9489743086",
    description: "Feel free to reach out",
    link: "tel:+919489743086",
    icon: "📞",
    action: "Call Me",
  },
  {
    title: "LinkedIn",
    value: "Syed Haazima A",
    description: "Connect with me professionally",
    link: "https://linkedin.com/in/syed-haazima-a-3197032bb",
    icon: "💼",
    action: "View Profile",
  },
  {
    title: "GitHub",
    value: "syedhaazima",
    description: "Explore my projects and code",
    link: "https://github.com/syedhaazima",
    icon: "💻",
    action: "View GitHub",
  },
];

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Syed Haazima A | Let's Connect</title>
        <meta
          name="description"
          content="Contact Syed Haazima A for software development opportunities, AI projects, collaborations and professional networking."
        />
        <meta
          name="keywords"
          content="Contact Syed Haazima, Hire MERN Stack Developer, AI Developer, Software Developer Contact"
        />
        <meta
          property="og:title"
          content="Contact Syed Haazima A"
        />
        <meta
          property="og:description"
          content="Connect with me for development opportunities, collaborations and innovative projects."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="min-h-screen bg-[#090612] px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-400">
              Get In Touch
            </p>

            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Let's <span className="text-purple-400">Connect</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
              Have a project idea, opportunity or just want to connect?
              I'd love to hear from you. Feel free to reach out through
              any of the platforms below.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-purple-500" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {contactDetails.map((contact) => (
              <article
                key={contact.title}
                className="group rounded-2xl border border-purple-500/20 bg-[#160f25] p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/20"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-3xl transition group-hover:bg-purple-500/20">
                  {contact.icon}
                </div>

                <h2 className="text-xl font-bold text-white">
                  {contact.title}
                </h2>

                <p className="mt-2 break-all font-medium text-purple-300">
                  {contact.value}
                </p>

                <p className="mt-3 text-sm text-gray-400">
                  {contact.description}
                </p>

                <a
                  href={contact.link}
                  target={
                    contact.title === "LinkedIn" || contact.title === "GitHub"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    contact.title === "LinkedIn" || contact.title === "GitHub"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex items-center gap-2 rounded-lg border border-purple-400/40 px-5 py-3 text-sm font-semibold text-purple-300 transition hover:bg-purple-500/15 hover:text-white"
                >
                  {contact.action} ↗
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg font-medium text-gray-300">
              Thank you for visiting my portfolio!
            </p>

            <p className="mt-2 text-sm text-purple-400">
              Let's build something meaningful together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
