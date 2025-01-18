import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { SiGooglecloud } from "react-icons/si";
import { FaGoogle } from "react-icons/fa6";
import AppFooterCopyright from "./AppFooterCopyright";

const socialLinks = [
  {
    id: 1,
    icon: <SiGooglecloud />,
    url: "https://www.cloudskillsboost.google/public_profiles/c05ccf07-66ab-4eb8-abce-2cc38a173704",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/XenchinRyu7",
  },
  {
    id: 3,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/saefulr_24/",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/saeful-rohman-24fnr/",
  },
  {
    id: 5,
    icon: <FaGoogle />,
    url: "https://g.dev/SaefulR",
  },
];

const AppFooter = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <AppFooterCopyright />
      </div>
    </div>
  );
};

export default AppFooter;
