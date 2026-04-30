import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      setFormStatus("sending");
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setFormStatus("success");
      form.reset();
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <section id="contact" className="mx-auto max-w-[1450px] px-4 pb-16 sm:px-8">
        <div className="relative rounded-[2rem] border border-white/10 bg-[#050b1c]/85 p-8 text-center backdrop-blur-xl md:p-12">
          <p className="mb-3 text-sm font-black text-sky-300">Start your project</p>
          <h2 className="text-4xl font-black tracking-[-.035em] md:text-5xl">
            Ready to build your cloud system or online store?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Contact WHBrowns for cloud architecture, DevOps automation, IT support solutions or e-commerce store setup.
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-5xl text-left"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-3 md:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-[#020713]/85 px-5 py-4 outline-none transition focus:border-sky-400" name="name" placeholder="Your name" required />
              <input className="rounded-xl border border-white/10 bg-[#020713]/85 px-5 py-4 outline-none transition focus:border-sky-400" name="email" type="email" placeholder="Email address" required />
            </div>

            <input className="mt-3 w-full rounded-xl border border-white/10 bg-[#020713]/85 px-5 py-4 outline-none transition focus:border-sky-400" name="service" placeholder="Service needed: Cloud, DevOps, IT or E-commerce" />

            <textarea className="mt-3 min-h-28 w-full rounded-xl border border-white/10 bg-[#020713]/85 px-5 py-4 outline-none transition focus:border-sky-400" name="message" placeholder="Tell us about your project" required />

            <button
              disabled={formStatus === "sending"}
              className="group relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-black text-white shadow-[0_0_30px_rgba(59,130,246,.35)] disabled:opacity-60"
              type="submit"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={17} />
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </span>
            </button>

            {formStatus === "success" && <p className="mt-4 text-sm text-sky-200">Message sent successfully. We will contact you soon.</p>}
            {formStatus === "error" && <p className="mt-4 text-sm text-red-300">Message could not be sent. Please try again.</p>}
          </form>
        </div>
      </section>

      <motion.a
        href="#contact"
        whileHover={{ scale: 1.08 }}
        className="fixed bottom-8 right-8 z-50 hidden items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-4 font-black shadow-[0_0_20px_rgba(59,130,246,.25)] md:flex"
      >
        <Mail size={18} /> Chat
      </motion.a>
    </>
  );
}