import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden" id="contact">
      {/* background grid */}
      <div className="absolute inset-x-0 -bottom-72 min-h-96 overflow-hidden">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-purple text-opacity-80">
              Get in touch
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
              Let&apos;s build something great together.
            </h2>
            <p className="max-w-xl text-sm text-white/70">
              If you&apos;re looking for backend development, API design, or database architecture, I&apos;m ready to help. Send me a message and let&apos;s discuss your project.
            </p>
            <a href="mailto:raffadnd@gmail.com">
              <MagicButton
                title="Let&apos;s get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Quick links
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="#home" className="hover:text-purple transition-colors">
                Home
              </a>
              <a href="#projects" className="hover:text-purple transition-colors">
                Project
              </a>
              <a href="#approach" className="hover:text-purple transition-colors">
                Approach
              </a>
              <a href="#contact" className="hover:text-purple transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Contact info
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <p className="text-white font-medium">Email</p>
                <a href="mailto:raffadnd@gmail.com" className="block hover:text-purple transition-colors">
                  raffadnd@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <a href="tel:+6287805627343" className="block hover:text-purple transition-colors">
                  +62 878 0562 7343
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/50">
            Copyright © 2026 Raffa Danendra Pramono. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-purple"
              >
                <img src={info.img} alt="social icon" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
