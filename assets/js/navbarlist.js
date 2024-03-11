import data from "../settings/navbarlist-and-content.json" assert { type: "json" };

let socialHtmlList = "";
data.navbarlist.forEach((e) => {
  if (e[1] == "home") {
    socialHtmlList += `
    <li class="navbar-item">
        <button class="navbar-link  active" data-nav-link>${e[0]}</button>
    </li>`;
  } else {
    socialHtmlList += `
    <li class="navbar-item">
        <button class="navbar-link" data-nav-link>${e[0]}</button>
    </li>`;
  }
});

const elementHTML = document.getElementById("navbar-list");
const contentHTML = `
${socialHtmlList}
`;
elementHTML.innerHTML += contentHTML;
