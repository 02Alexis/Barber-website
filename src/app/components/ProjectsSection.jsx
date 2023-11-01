"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "esample 1",
    description: "text another",
    image: "/images/barber-image.jpg",
    tag: ["All", "Barba"],
    previewUrl: "/",
  },
  {
    id: 2,
    title: "esample 2",
    description: "text another",
    image: "/images/corte-image.jpg",
    tag: ["All", "Haircut"],
    previewUrl: "/",
  },
  {
    id: 3,
    title: "esample 3",
    description: "text another",
    image: "/images/cortar.jpg",
    tag: ["All", "Barba"],
    previewUrl: "/",
  },
  {
    id: 4,
    title: "esample 4",
    description: "text another",
    image: "/images/men-image.jpg",
    tag: ["All", "Haircut"],
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2
        className="
            text-center
            text-4xl
            font-bold
            text-white
            mt-4
            mb-8 
            md:mb-12
        "
      >
        Samples
      </h2>
      <div
        className="
            text-white
            flex
            flex-row
            justify-center
            items-center
            gap-2
            py-6
        "
      >
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Haircut"
          isSelected={tag === "Haircut"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Barba"
          isSelected={tag === "Barba"}
        />
      </div>
      <ul
        ref={ref}
        className="
            grid
            md:grid-cols-3
            gap-8
            md:gap-12
        "
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
