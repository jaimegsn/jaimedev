const aboutContent = {
  headerTitle: "About me",
  aboutText: [
    "I'm from Quixadá, Ceará, Brazil, and work in web development with a focus on backend development, i transform complex problems into efficient, functional systems and services.",
    "My goal is to build robust and scalable backend solutions that ensure functionality and performance.",
  ],
  services: [
    {
      title: "Backend development",
      description:
        "Development of backend services using best practices and technologies: REST APIs, HATEOAS, ORM, Manual SQL, Migrations, Unit Tests, Authentication and Authorization",
      //"High-quality development of sites at the professional level.",
      iconSrc: "./assets/images/activities-logo-images/icon-dev.svg",
      iconAlt: "Web development icon",
    },
    {
      title: "Microservices Architecture",
      description:
        "Eureka, Open Feign (Sync Communication Services), RabbitMQ (Async Communication Services), Gateway",
      iconSrc: "./assets/images/activities-logo-images/icon-microservices.svg",
      iconAlt: "mobile app icon",
    },
    {
      title: "Frontend development",
      description: "ReactJS, VueJS, MaterialUI",
      iconSrc: "./assets/images/activities-logo-images/icon-frontend.svg",
      iconAlt: "mobile app icon",
    },
    {
      title: "Development Practices and Tools",
      description: "Github, Git, Gitlab, Kanban, Scrum, Clean Code",
      iconSrc: "./assets/images/activities-logo-images/icon-dev-tool.svg",
      iconAlt: "mobile app icon",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  // Atualizar o título do cabeçalho
  const headerTitle = document.querySelector(".article-title");
  headerTitle.textContent = aboutContent.headerTitle;

  // Atualizar o texto da seção about-text
  const aboutTextSection = document.querySelector(".about-text");
  aboutTextSection.innerHTML = aboutContent.aboutText
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  // Atualizar a lista de serviços
  const serviceList = document.querySelector(".service-list");
  serviceList.innerHTML = aboutContent.services
    .map(
      (service) => `
      <li class="service-item">
        <div class="service-icon-box">
          <img src="${service.iconSrc}" alt="${service.iconAlt}" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${service.title}</h4>
          <p class="service-item-text">${service.description}</p>
        </div>
      </li>
    `
    )
    .join("");
});
