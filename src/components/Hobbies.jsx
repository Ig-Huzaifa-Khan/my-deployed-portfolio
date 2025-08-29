import React from 'react'

const Hobbies = () => {
  const hobbies = [
    {
      title: "Web Development",
      description: "Passionate about creating beautiful and functional web applications using modern technologies. Always exploring new frameworks and best practices.",
      icon: "💻",
      skills: ["React", "JavaScript", "CSS", "Node.js"]
    },
    {
      title: "Gaming",
      description: "Avid gamer who enjoys exploring virtual worlds, strategic gameplay, and the storytelling aspects of modern video games.",
      icon: "🎮",
      skills: ["Strategy Games", "RPGs", "FPS", "Indie Games"]
    },
    {
      title: "Content Creation",
      description: "Creating engaging content across various platforms, from technical tutorials to creative storytelling and digital media production.",
      icon: "🎬",
      skills: ["Video Editing", "Writing", "Social Media", "Photography"]
    },
    {
      title: "Reading",
      description: "Enthusiastic reader with interests spanning technology, science fiction, personal development, and contemporary literature.",
      icon: "📚",
      skills: ["Tech Books", "Sci-Fi", "Self-Help", "Fiction"]
    }
  ]

  return (
    <section className="section">
      <h2>Hobbies & Interests</h2>
      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-icon">{hobby.icon}</div>
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
            <div className="hobby-skills">
              {hobby.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="hobby-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hobbies
