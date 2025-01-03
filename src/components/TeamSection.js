import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function TeamSection() {
  const teamlead = [
    {
      name: "Anuroj Baskota",
      role: "Event Lead",
      image: "/assets/team/anuroj.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/anuroj.baskota/",
        linkedin: "https://www.linkedin.com/in/anuroj-baskota-57bb661b1/",
        twitter: "#",
      },
    },
    {
      name: "Nabin Paudel",
      role: "Event Lead",
      image: "/assets/team/nabin.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/nabin_paudel24/",
        linkedin: "https://np.linkedin.com/in/nabin-paudel-133902293",
        twitter: "#",
      },
    },
    {
      name: "Rishav Chapagain",
      role: "Program Manager",
      image: "/assets/team/rishav.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/rishavosaurus/",
        linkedin: "https://www.linkedin.com/in/rishav-chapagain/",
        twitter: "#",
      },
    },
  ];

  const sectionTwoMembers = [
    {
      name: "Aman Sheikh",
      role: "Tech Lead",
      image: "/assets/team/aman.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sheikh_a_man/",
        linkedin: "https://www.linkedin.com/in/aman-sheikh-044b6a155/",
        twitter: "#",
      },
    },
    {
      name: "Sujal Bikram Thapa",
      role: "Design Lead",
      image: "/assets/team/sujal.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sujalbthapa/",
        linkedin: "https://www.linkedin.com/in/sujalbthapa/",
        twitter: "#",
      },
    },
    {
      name: "Anish Kumar Neupane",
      role: "Operations Lead",
      image: "/assets/team/anish.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sree_za_nah/",
        linkedin: "https://www.linkedin.com/in/anishkn04/",
        twitter: "#",
      },
    },
    {
      name: "Prashubha Pathak",
      role: "Public Relations Lead",
      image: "/assets/team/prashubha.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/prashubha_pathak?igsh=eGpubTdoMTA0bWVh",
        linkedin:
          "https://www.linkedin.com/in/prashubha-pathak-1077a32b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
      },
    },
    {
      name: "Aaditya Binod Yadav",
      role: "Logistics Lead",
      image: "/assets/team/aditya.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/aadityarayyadav?igsh=d2w0aHhwejF5MHJ0",
        linkedin: "https://www.linkedin.com/in/aaditya-binod-yadav-52505a256/",
        twitter: "#",
      },
    },
   
  ];

  const sectionThreeMembers = [
    {
      name: "Aryan Jha",
      role: "Tech Team",
      image: "/assets/team/aryan.jpg",
      socials: {
        facebook: "#",
        instagram: "http://www.instagram.com/aryyyyyn/",
        linkedin: "http://www.linkedin.com/in/aryn0012/",
        twitter: "#",
      },
    },
    {
      name: "Sunil Nath",
      role: "Tech Team",
      image: "/assets/team/sunil.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sunilnathyogi_/",
        linkedin: "http://linkedin.com/in/sunil-nath-162019263",
        twitter: "#",
      },
    },
    {
      name: "Sanjib Shah",
      role: "Tech Team",
      image: "/assets/team/sanjib.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sanjib_jung_shah_thakuri/",
        linkedin: "https://www.linkedin.com/in/sanjib-shah-3361041aa",
        twitter: "#",
      },
    },
    {
      name: "Dipesh Thapa",
      role: "Design Team",
      image: "/assets/team/dipesh.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/dipesh.thapa.02/",
        linkedin: "https://www.linkedin.com/in/dipesh-thapa-811307342/",
        twitter: "#",
      },
    },
    {
      name: "Ujashna Dangol",
      role: "Design Team",
      image: "/assets/team/ujasna.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/uj_2004_?igsh=MWc5Y2RlMHNvN2tqcw==",
        linkedin: "https://www.linkedin.com/in/ujashna-dangol-165533311/",
        twitter: "#",
      },
    },
    {
      name: "Sushmita khatri",
      role: "Public Relations Team",
      image: "/assets/team/susmita.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/_sushmita_xo/profilecard/?igsh=MW4ydzU3ZzJkNHE2",
        linkedin:
          "https://www.linkedin.com/in/sushmita-khatri-7ab226329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
      },
    },
    {
      name: "Madan Belbase",
      role: "Support Squad",
      image: "/assets/team/madan.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/madan_belbase/",
        linkedin: "https://www.linkedin.com/in/madan-belbase/",
        twitter: "#",
      },
    },
    {
      name: "Siddhant Pokharel",
      role: "Support Squad",
      image: "/assets/team/siddhant.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/sidd_pokhrel/profilecard/?igsh=aHF5aGN1Z2V0cGVj",
        linkedin:
          "https://www.linkedin.com/in/siddhant-pokhrel-805b97266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
      },
    },
    {
      name: "Anshu Thapa",
      role: "Support Squad",
      image: "/assets/team/anshu.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/thapaanshu1980?igsh=azhyenpsYzFlbWt6",
        linkedin: "https://www.linkedin.com/in/anshu-thapa-62a260342",
        twitter: "#",
      },
    },
    {
      name: "Srijana Lohani",
      role: "Support Squad",
      image: "/assets/team/shrijana.jpg",
      socials: {
        facebook: "#",
        instagram: "https://www.instagram.com/sree_za_nah/",
        linkedin: "https://www.linkedin.com/in/srijana-lohani-172006sl/",
        twitter: "#",
      },
    },
    {
      name: "Ankit Paneru",
      role: "Support Squad",
      image: "/assets/team/ankit.jpg",
      socials: {
        facebook: "#",
        instagram:
          "https://www.instagram.com/ankitpaneru5/profilecard/?igsh=emU2M2N4MXN2dmYy",
        linkedin:
          "https://www.linkedin.com/in/ankit-paneru-ab1364343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="py-10 px-4">
      {/* Section 1: Lead */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {teamlead.map((member, index) => (
          <div
            key={index}
            className="bg-nosk-black rounded-lg shadow-lg p-6 flex items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all"
          >
            <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden mr-12 transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <h3 className="text-lg font-semibold text-nosk-white">
                {member.name}
              </h3>
              <p className="text-sm text-nosk-white">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {Object.entries(member.socials).map(([platform, link], i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000"
                  >
                    <FontAwesomeIcon
                      icon={
                        platform === "facebook"
                          ? faFacebookF
                          : platform === "instagram"
                          ? faInstagram
                          : platform === "linkedin"
                          ? faLinkedinIn
                          : faTwitter
                      }
                      size="lg"
                      className={`${
                        platform === "facebook"
                          ? "text-blue-600"
                          : platform === "instagram"
                          ? "text-pink-500"
                          : platform === "linkedin"
                          ? "text-blue-700"
                          : "text-blue-400"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section 2 */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sectionTwoMembers.map((member, index) => (
          <div
            key={index}
            className="bg-nosk-black rounded-lg shadow-lg p-6 flex items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all"
          >
            <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden mr-12 transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <h3 className="text-lg font-semibold text-nosk-white">
                {member.name}
              </h3>
              <p className="text-sm text-nosk-white">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {Object.entries(member.socials).map(([platform, link], i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000"
                  >
                    <FontAwesomeIcon
                      icon={
                        platform === "facebook"
                          ? faFacebookF
                          : platform === "instagram"
                          ? faInstagram
                          : platform === "linkedin"
                          ? faLinkedinIn
                          : faTwitter
                      }
                      size="lg"
                      className={`${
                        platform === "facebook"
                          ? "text-blue-600"
                          : platform === "instagram"
                          ? "text-pink-500"
                          : platform === "linkedin"
                          ? "text-blue-700"
                          : "text-blue-400"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3 */}
      <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sectionThreeMembers.slice(0, 10).map((member, index) => (
          <div
            key={index}
            className="bg-nosk-black rounded-lg shadow-lg p-6 flex flex-col items-center border-4 border-transparent hover:shadow-xl hover:border-nosk-green group transition-all"
          >
            <div className="relative w-24 h-24 rounded-full border-4 border-green-500 overflow-hidden transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-center transform group-hover:translate-y-[-5px] transition-transform duration-1000">
              <h3 className="text-lg font-semibold text-nosk-white mt-4">
                {member.name}
              </h3>
              <p className="text-sm text-nosk-white">{member.role}</p>
              <div className="flex space-x-4 mt-4">
                {Object.entries(member.socials).map(([platform, link], i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-nosk-white transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000"
                  >
                    <FontAwesomeIcon
                      icon={
                        platform === "facebook"
                          ? faFacebookF
                          : platform === "instagram"
                          ? faInstagram
                          : platform === "linkedin"
                          ? faLinkedinIn
                          : faTwitter
                      }
                      size="lg"
                      className={`${
                        platform === "facebook"
                          ? "text-blue-600"
                          : platform === "instagram"
                          ? "text-pink-500"
                          : platform === "linkedin"
                          ? "text-blue-700"
                          : "text-blue-400"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
