import React from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Neha Gupta",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "SkillSwap made it so easy to find someone who could teach me AWS while I helped them with Java. The platform is intuitive and the community is so supportive!",
    skillsExchanged: ["Java", "AWS"],
  },
  {
    name: "Aarav Gupta",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "I love how SkillSwap connects people with complementary skills. I improved my Django skills and helped someone get started with Python!",
    skillsExchanged: ["Python", "Django"],
  },
  {
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "The mutual rating system keeps everyone motivated to do their best. I learned so much about communication and even made new friends!",
    skillsExchanged: ["Communication", "AutoCAD"],
  },
  {
    name: "Aisha Khan",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    quote:
      "Scheduling sessions was a breeze. I taught JavaScript and picked up some great tips on HTML and CSS in return.",
    skillsExchanged: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Aryan Sharma",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    quote:
      "SkillSwap is a game changer for anyone who wants to learn and teach at the same time. The matching is spot on!",
    skillsExchanged: ["Team Leadership", "Python"],
  },
  {
    name: "Varun Mehta",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "I exchanged Docker knowledge for Kubernetes tips. The platform's focus on community-driven learning is fantastic!",
    skillsExchanged: ["Docker", "Kubernetes"],
  },
];

const Client = () => {
  return (
    <div className="w-full bg-black text-white py-20 px-6 sm:px-10">
      <h2 className="text-[5vw] font-bold border-b border-zinc-700 mb-10 font-['Neue_Montreal']">
        SkillSwap Member Reviews
      </h2>

      {/* All Reviews in Expanded View */}
      <div className="space-y-10">
        {clients.map((client, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 border-b border-zinc-700 pb-8 gap-4"
          >
            <div>
              <h3 className="underline text-lg font-medium mb-2 hover:text-[#CDEA68] transition duration-300">
                {client.skillsExchanged.join(" ↔ ")}
              </h3>
            </div>
            <div className="col-span-2 flex gap-4 text-sm">
              {client.image && (
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-16 h-16 object-cover rounded-xl mt-2"
                />
              )}
              <div>
                <h4 className="font-semibold mb-1 text-base">{client.name}</h4>
                <p className="text-zinc-400 leading-relaxed">{client.quote}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Client;
