import React from 'react';
import { FaUserEdit, FaStar, FaExchangeAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
  const navigate = useNavigate();
  
  // Sample user data
  const user = {
    name: "Aarav Gupta",
    role: "Software Developer",
    location: "Mumbai, Maharashtra",
    bio: "Passionate about teaching and learning new technologies. Specialized in backend development with Python and Django.",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4.8,
    exchangesCompleted: 12,
    skillsOffered: [
      { name: "Python", level: 8, rating: 4.7 },
      { name: "Django", level: 8, rating: 4.5 },
      { name: "JavaScript", level: 7, rating: 4.3 }
    ],
    skillsSeeking: [
      { name: "Machine Learning", level: "Beginner" },
      { name: "Data Science", level: "Intermediate" },
      { name: "React Native", level: "Beginner" }
    ],
    recentExchanges: [
      { 
        partner: "Neha Gupta", 
        date: "2023-05-15", 
        skills: ["Python", "AWS"], 
        rating: 5,
        partnerPhoto: "https://randomuser.me/api/portraits/women/68.jpg"
      },
      { 
        partner: "Varun Mehta", 
        date: "2023-04-28", 
        skills: ["Django", "Docker"], 
        rating: 4,
        partnerPhoto: "https://randomuser.me/api/portraits/men/46.jpg"
      }
    ],
    contactInfo: {
      email: "aarav.gupta@example.com",
      phone: "+91 98765 43210",
      social: "@aarav_gupta"
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with back button */}
        <div className="flex justify-between items-center mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition"
          >
            ← Back
          </button>
          <button className="px-4 py-2 bg-[#8D77AB] rounded-lg hover:bg-[#6e4e8e] transition flex items-center gap-2">
            <FaUserEdit /> Edit Profile
          </button>
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Profile Picture */}
          <div className="w-full md:w-1/4 flex flex-col items-center">
            <img 
              src={user.photo} 
              alt={user.name} 
              className="w-48 h-48 rounded-full object-cover border-4 border-[#8D77AB] mb-4"
            />
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-zinc-400 mb-2">{user.role}</p>
            <div className="flex items-center gap-2 mb-4">
              <FaStar className="text-yellow-400" />
              <span>{user.rating}</span>
              <span className="text-zinc-400">({user.exchangesCompleted} exchanges)</span>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-[#8D77AB] rounded-lg hover:bg-[#6e4e8e] transition">
                Message
              </button>
              <button className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
                Request Exchange
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="w-full md:w-3/4 bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-zinc-300 mb-6">{user.bio}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaMapMarkerAlt /> Location
                </h3>
                <p className="text-zinc-300">{user.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <FaEnvelope /> Contact
                </h3>
                <p className="text-zinc-300">{user.contactInfo.email}</p>
                <p className="text-zinc-300 flex items-center gap-2 mt-1">
                  <FaPhone /> {user.contactInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Skills Offered */}
          <div className="bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Skills I Offer</h2>
            <div className="space-y-4">
              {user.skillsOffered.map((skill, index) => (
                <div key={index} className="bg-zinc-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{skill.rating}</span>
                    </div>
                  </div>
                  <div className="w-full bg-zinc-600 rounded-full h-2.5">
                    <div 
                      className="bg-[#8D77AB] h-2.5 rounded-full" 
                      style={{ width: `${skill.level * 10}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-zinc-300 mt-1">
                    Level {skill.level}/10
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Seeking */}
          <div className="bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Skills I Want to Learn</h2>
            <div className="space-y-4">
              {user.skillsSeeking.map((skill, index) => (
                <div key={index} className="bg-zinc-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{skill.name}</h3>
                    <span className="text-sm bg-[#8D77AB] px-2 py-1 rounded-full">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Looking for someone to teach me {skill.name} at {skill.level.toLowerCase()} level
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Exchanges */}
        <div className="bg-zinc-800 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <FaExchangeAlt /> Recent Exchanges
          </h2>
          <div className="space-y-6">
            {user.recentExchanges.map((exchange, index) => (
              <div key={index} className="flex items-start gap-4 pb-6 border-b border-zinc-700 last:border-0">
                <img 
                  src={exchange.partnerPhoto} 
                  alt={exchange.partner} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{exchange.partner}</h3>
                      <p className="text-zinc-400 text-sm">{exchange.date}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{exchange.rating}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm">Exchanged: </span>
                    {exchange.skills.map((skill, i) => (
                      <span key={i} className="text-sm bg-zinc-700 px-2 py-1 rounded-full mr-2">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-3 bg-[#8D77AB] rounded-full text-lg font-semibold hover:bg-[#6e4e8e] transition">
            Request Skill Exchange with {user.name.split(' ')[0]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;