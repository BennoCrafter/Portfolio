async function loadProjects() {
  try {
    const response = await fetch("/data/projects.json");
    const data = await response.json();
    const projectsGrid = document.querySelector(".projects-grid");

    // Clear existing content
    projectsGrid.innerHTML = "";

    // Add each project to the grid
    data.projects.forEach((project) => {
      const projectCard = createProjectCard(project);
      projectsGrid.appendChild(projectCard);
    });
  } catch (error) {
    console.error("Error loading projects:", error);
  }
}

function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card";

  card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}">
            <div class="project-overlay">
                <div class="project-links">
                    <a href="${project.links.live}" class="project-link" target="_blank" rel="noopener noreferrer">
                        View Project
                        <svg class="external-link-icon" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v2H5v14h14v-6h2zm3-8h-6V3h6v2z"/>
                        </svg>
                    </a>
                    <a href="${project.links.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                        <svg class="external-link-icon" viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M21 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7v2H5v14h14v-6h2zm3-8h-6V3h6v2z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="project-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
            </div>
        </div>
    `;

  return card;
}

// Load projects when the page loads
document.addEventListener("DOMContentLoaded", loadProjects);
