import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import { backend } from "../assets";

const photos = [
  { src: backend, width: 800, height: 600 },
  { src: backend, width: 800, height: 600 },
  { src: backend, width: 800, height: 600 },
  { src: backend, width: 800, height: 600 },
  { src: backend, width: 800, height: 600 },
];

const Gallery = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in tortor vestibulum, nec varius leo volutpat.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://via.placeholder.com/800x600",
    },
    {
      id: 3,
      name: "Project 3",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "https://via.placeholder.com/800x600",
    },
  ];

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Chandan Kumar",
      date: "August 22, 2050",
    },
    {
      id: 2,
      title: "Blog Post 2",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        author: "Chandan Kumar",
      date: "August 22, 2050",
    },
    {
      id: 3,
      title: "Blog Post 3",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        author: "Chandan Kumar",
        date: "August 22, 2050",
    },
    {
      id: 4,
      title: "Blog Post 4",
      content:
        "Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra.",
        author: "Chandan Kumar",
        date: "August 22, 2050",
    },
    {
      id: 5,
      title: "Blog Post 5",
      content:
        "Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim.",
        author: "Chandan Kumar",
        date: "August 22, 2050",
    },
    {
      id: 6,
      title: "Blog Post 6",
      content:
        "Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum.",
        author: "Chandan Kumar",
        date: "August 22, 2050",
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
              <p style={{ fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "10px" }}>{blog.content} <a href="http://www.google.com" style={{ color: "#4CAF50", textDecoration: "underline" }}>Read More</a></p>
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
