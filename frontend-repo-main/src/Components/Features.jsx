import { motion } from "framer-motion";
import React from "react";

const members = [
  {
    name: "Neha Gupta",
    role: "Backend Developer",
    location: "Lucknow, Uttar Pradesh",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    offer: ["Java (9)", "Spring Boot (9)", "Microservices (6)", "RESTful APIs (8)"],
    seeking: ["Cloud Computing", "AWS", "Azure DevOps"],
  },
  {
    name: "Aarav Gupta",
    role: "Software Developer",
    location: "Mumbai, Maharashtra",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    offer: ["Python (8.5)", "Django (8)", "JavaScript (7)"],
    seeking: ["Machine Learning Ops", "Data Science"],
  },
  {
    name: "Priya Singh",
    role: "Recent Graduate",
    location: "Indore, Madhya Pradesh",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    offer: ["Communication (6)"],
    seeking: ["AutoCAD", "Java"],
  },
  {
    name: "Aisha Khan",
    role: "Recent Graduate",
    location: "Jaipur, Rajasthan",
    photo: "https://randomuser.me/api/portraits/women/43.jpg",
    offer: ["Team Leadership (7)", "Communication (7)", "JavaScript (3)"],
    seeking: ["HTML", "CSS", "Ruby"],
  },
  {
    name: "Aryan Sharma",
    role: "Recent Engineering Graduate",
    location: "Chandigarh, Punjab",
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    offer: ["Team Leadership (7)", "HTML (6)", "CSS (6)"],
    seeking: ["Python", "Django"],
  },
  {
    name: "Varun Mehta",
    role: "DevOps Engineer",
    location: "Noida, Uttar Pradesh",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    offer: ["Terraform (8)", "Docker (10)", "Ansible (9)"],
    seeking: ["Kubernetes"],
  },
];

const Features = () => {
  return (
    <div className="w-full py-20 bg-zinc-900">
      {/* Section Title */}
      <div className="w-full px-16 text-white text-5xl border-b-2 border-zinc-700 pb-10">
        <h1 className="font-['Neue_Montreal'] tracking-tighter">SkillSwap Members</h1>
      </div>

      {/* Members Grid */}
      <div className="px-10 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member, i) => (
            <div
              key={i}
              className="rounded-xl bg-white shadow-lg flex flex-col items-center p-8 min-h-[350px] hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-zinc-200 shadow"
              />
              <h2 className="text-xl font-bold text-zinc-900 mb-1">{member.name}</h2>
              <div className="text-zinc-600 text-sm mb-1">{member.role}</div>
              <div className="text-zinc-500 text-xs mb-3">{member.location}</div>
              <div className="w-full mb-2">
                <div className="font-semibold text-zinc-700 text-sm">Skills to Offer:</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {member.offer.map((skill, idx) => (
                    <span key={idx} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="font-semibold text-zinc-700 text-sm">Skills Seeking:</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {member.seeking.map((skill, idx) => (
                    <span key={idx} className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
