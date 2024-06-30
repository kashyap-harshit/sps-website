import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { backend } from "../assets";
import { gallery1 } from "../assets";
import { gallery2 } from "../assets";
import { gallery3 } from "../assets";
import { gallery4 } from "../assets";
import { gallery5 } from "../assets";
import { project1, project2, project3 } from "../assets";

const photos = [
  { src: gallery1, width: 800, height: 600 },
  { src: gallery2, width: 800, height: 600 },
  { src: gallery3, width: 800, height: 600 },
  { src: gallery4, width: 800, height: 600 },
  { src: gallery5, width: 800, height: 600 },
];

const Gallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Wireless Communication Protocol using ESP32 ",
      description:
        "This project explores wireless communication protocols using ESP32 microcontrollers. It aims to implement efficient data transfer and connectivity solutions for IoT applications, leveraging ESP32's capabilities.",
      image: project1,
    },
    {
      id: 2,
      name: "Automated home cleaner",
      description:
        "This project pioneers an automated home cleaner employing robotics and AI technologies. Its mission is to optimize convenience through autonomous navigation and cleaning of indoor environments. By integrating advanced smart sensors, the system ensures efficient and effective operation, promising a smarter, cleaner living environment for users.",
      image: project2,
    },
    {
      id: 3,
      name: "VCheff : Mess Menu FInder",
      description:
        "It caters specifically to VIT, Vellore, offering a streamlined way to access and monitor mess menus. It delivers real-time updates and notifications, empowering students and staff to plan meals effectively within campus. ",
      image: project3,
    },
  ];

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "3D PROCESSORS: A NEW ERA IN WIRELESS COMMUNICATIONS",
      content:
        "For an extended duration, we have used wires as a mode of communication like in telephone lines or television connections, etc. It provided us with ease of communication and stayed with us for a long time.",
      author: "Akshita",
      date: "June 20, 2024",
      link: "https://medium.com/@vitieeesps/3d-processors-a-new-era-in-wireless-communications-c7b5172c63d1", 
    },
    {
      id: 2,
      title: "Signal Processing: The Secret Weapon in the Fight Against Disease (with Digital Histology).",
      content:
        "The methodology that plays a significant role in the detection of abnormalities in cells of the human body is “histology” (the study of tissues and cells under a microscope).",
      author: "Ovia Stalin",
      date: "June 30, 2024",
      link: "https://medium.com/@vitieeesps/signal-processing-the-secret-weapon-in-the-fight-against-disease-with-digital-histology-7b3b7b7b7b7b", 
    },
    {
      id: 3,
      title: "Blog Post 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Chandan Kumar",
      date: "August 22, 2050",
      link: "http://www.google.com", 
    },
    {
      id: 4,
      title: "Blog Post 4",
      content:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra.",
      author: "Chandan Kumar",
      date: "August 22, 2050",
      link: "http://www.google.com", 
    },
    {
      id: 5,
      title: "Blog Post 5",
      content:
        "Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim.",
      author: "Chandan Kumar",
      date: "August 22, 2050",
      link: "http://www.google.com", 
    },
    {
      id: 6,
      title: "Blog Post 6",
      content:
        "Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.",
      author: "Chandan Kumar",
      date: "August 22, 2050",
      link: "http://www.example.org", // Add link for the sixth blog post
    },
  ];

  const handlePrev = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px", fontSize: "3rem", fontWeight: "bold" }}>
        Gallery
      </h1>
      <PhotoAlbum layout="rows" photos={photos} />

      {/* Project Section */}
      <section
        style={{
          backgroundColor: "#0d0d26",
          color: "white",
          padding: "50px 20px",
          marginTop: "40px",
          textAlign: "center",
          borderRadius: "10px", // Rounded corners added here
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            Our Projects
          </h2>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginTop: "20px" }}>
            <div style={{ flex: "1", marginRight: "40px" }}>
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].name}
                style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
              />
            </div>
            <div style={{ flex: "1" }}>
              <h3 style={{ fontSize: "2rem", marginBottom: "10px", fontWeight: "bold" }}>{projects[activeProject].name}</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6", textAlign: "left" }}>{projects[activeProject].description}</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={handlePrev}
              style={{
                marginRight: "10px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#21215f",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "bold",
                backgroundColor: "#21215f",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section
        style={{
          backgroundColor: "#0d0d26",
          color: "white",
          padding: "50px 20px",
          marginTop: "40px",
          textAlign: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxHeight: "500px",
          overflowY: "auto", // Adding scrollbar for overflow
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "20px",
              fontWeight: "bold",
              textAlign: "left",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            Blogs
          </h2>

          {/* Sample Blog Template */}
          {blogs.map((blog) => (
            <div key={blog.id} style={{ marginBottom: "40px", maxWidth: "800px", textAlign: "left" }}>
              <h3 style={{ fontSize: "2rem", marginBottom: "10px", fontWeight: "bold" }}>{blog.title}</h3>
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "10px" }}>{blog.content} <a href={blog.link} target="_blank" rel="noopener noreferrer" style={{ color: "#4CAF50", textDecoration: "underline" }}>Read More</a></p>
              <p style={{ fontSize: "1rem", color: "#999", marginBottom: "10px" }}>
                <strong>{blog.author}</strong> | {blog.date}
              </p>
              <hr style={{ borderColor: "#444" }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
