// Define o conteúdo da seção 'Resume'
const resumeData = {
  education: [
    {
      title: "Universidade Federal do Ceará - Campus Quixadá",
      duration: "2019 — present",
      description: "Bachelor's Degree in Information Systems",
    },
    {
      title: "EEEP Maria Cavalcante Costa",
      duration: "2015 — 2017",
      description: "Integrated Technical Course in Information Technology.",
    },
  ],
  experience: [
    {
      title:
        "Fullstack Developer -- 'NPI - Universidade Federal do Ceará (UFC)'",
      duration: "2023.3 — 2023.7",
      description: `
        - I participated in the development of a medical internship management system (SIGI) using technologies such as Spring Framework, PostgreSQL, VueJS 3, Vuetify 3, and Docker.<br>
        - For version control and the application of the agile Kanban methodology, I used GitLab.<br>
        - I worked with agile methodologies such as Scrum and Kanban.<br>
        - I was involved in the conception and implementation of essential features.<br>
        - I created several REST endpoints for various functionalities.<br>
        - I tested endpoints using Postman.<br>
        - I developed intuitive and user-friendly interfaces using the VueJS 3 framework.<br>
        - I participated in planning and review meetings, sharing ideas and updating task progress.<br>
        - I identified and resolved bugs and operational issues.`,
    },
  ],
};

// Função para preencher a seção de educação
function populateEducation() {
  const educationList = document.querySelector(".timeline-list");
  resumeData.education.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("timeline-item");

    listItem.innerHTML = `
        <h4 class="h4 timeline-item-title">${item.title}</h4>
        <span>${item.duration}</span>
        <p class="timeline-text">${item.description}</p>
      `;

    educationList.appendChild(listItem);
  });
}

// Função para preencher a seção de experiência
function populateExperience() {
  const experienceList = document
    .querySelectorAll(".timeline")[1]
    .querySelector(".timeline-list");
  resumeData.experience.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("timeline-item");

    listItem.innerHTML = `
        <h4 class="h4 timeline-item-title">${item.title}</h4>
        <span>${item.duration}</span>
        <p class="timeline-text">${item.description}</p>
      `;

    experienceList.appendChild(listItem);
  });
}

// Executa as funções quando o documento está pronto
document.addEventListener("DOMContentLoaded", () => {
  populateEducation();
  populateExperience();
});
