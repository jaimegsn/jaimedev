// Dados do portfólio
const portfolioItems = [
  {
    title: "Task Management",
    category: "Web development",
    image: "./assets/images/project-images/task-management-project.png",
    description: `Task management is a microservice-based application designed to provide the following services:<br>
    - Eureka Server: provides service discovery and registration, ensuring that all microservices can find and communicate with each other efficiently<br>
    - Gateway Service: acts as a single entry point for all clients requests, routing them to the appropriate microservice and handling load balancer.<br>
    - Task Service: manages tasks, including creating, updating, reading...<br>
    - Task Submission Service: manages task submissions, including creating, validating, deleting, and updating the status of submissions<br>
    - User Service: manages user accounts, JWT authentication and authorization<br>`,

    github: "https://github.com/jaimegsn/gerenciamento-tasks",
    video: "",
    article: "",
  },
];

//-------------------------------------------

// Função para obter categorias únicas
function getUniqueCategories(items) {
  const categories = items.map((item) => item.category);
  return [...new Set(categories)];
}

// Função para preencher a seção de portfólio
function populatePortfolio(items) {
  const projectList = document.querySelector(".project-list");

  // Limpa a lista de projetos existentes
  projectList.innerHTML = "";

  items.forEach((item, index) => {
    // Cria um novo elemento de item de projeto
    const projectItem = document.createElement("li");
    projectItem.className = `project-item active`;
    projectItem.setAttribute("data-filter-item", "");
    projectItem.setAttribute("data-category", item.category);
    projectItem.setAttribute("data-index", index);

    projectItem.innerHTML = `
        <a href="#" data-modal-trigger>
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${item.title}</h3>
          <p class="project-category">${item.category}</p>
        </a>
      `;

    // Adiciona o novo item à lista de projetos
    projectList.appendChild(projectItem);
  });

  // Adiciona eventos de clique para abrir o modal
  document.querySelectorAll("[data-modal-trigger]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      const projectItem = event.target.closest(".project-item");
      const index = projectItem.getAttribute("data-index");
      openModal(index);
    });
  });
}
// Função para abrir o modal
function openModal(index) {
  const item = portfolioItems[index];
  const modal = document.querySelector(".modal");
  const modalContent = modal.querySelector(".modal-content");

  const videoLink = item.video
    ? `<a href="${item.video}" target="_blank">Video explanation link</a>`
    : "";

  // Verifica se o link do artigo está presente
  const articleLink = item.article
    ? `<a href="${item.article}" target="_blank">Article explanation link</a>`
    : "";

  modalContent.innerHTML = `
        <button class="close">&times;</button>
        <h3>${item.title} <a href="${item.github}" target="_blank">GitHub Link</a><br></h3>
        <p>${item.description}</p>
        ${videoLink}
        ${articleLink}
      `;

  modal.style.display = "flex";

  // Adiciona evento de clique ao botão de fechamento
  modal.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Adiciona evento de clique ao fundo do modal para fechar
  modal.addEventListener("click", (event) => {
    // Verifica se o clique foi fora do conteúdo do modal
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Adiciona evento de clique ao botão de fechamento do modal
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal .close").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
  });
});

// Adiciona evento de clique ao botão de fechamento do modal
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".modal .close").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
  });
});

// Função para preencher os filtros
function populateFilters() {
  const filterList = document.querySelector(".filter-list");
  const selectList = document.querySelector(".select-list");

  // Limpa filtros existentes
  filterList.innerHTML = "";
  selectList.innerHTML = "";

  // Adiciona filtro "All"
  filterList.innerHTML =
    '<li class="filter-item"><button class="active" data-filter-btn>All</button></li>';
  selectList.innerHTML =
    '<li class="select-item"><button data-select-item>All</button></li>';

  // Adiciona filtros baseados nas categorias únicas
  const categories = getUniqueCategories(portfolioItems);
  categories.forEach((category) => {
    filterList.innerHTML += `
          <li class="filter-item">
            <button data-filter-btn>${category}</button>
          </li>
        `;
    selectList.innerHTML += `
          <li class="select-item">
            <button data-select-item>${category}</button>
          </li>
        `;
  });

  // Adiciona eventos de clique para os filtros
  const filterButtons = document.querySelectorAll("[data-filter-btn]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterCategory = button.textContent;
      applyFilter(filterCategory);
      // Atualiza a classe ativa nos botões de filtro
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  const selectButtons = document.querySelectorAll("[data-select-item]");
  selectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterCategory = button.textContent;
      applyFilter(filterCategory);
      // Atualiza a classe ativa nos botões de filtro
      selectButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      document.querySelector(".select-value").textContent = filterCategory;
    });
  });
}

// Função para aplicar o filtro
function applyFilter(category) {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    if (category === "All" || item.getAttribute("data-category") === category) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
}

// Chama as funções para preencher a seção de portfólio e filtros
populatePortfolio(portfolioItems);
populateFilters();
