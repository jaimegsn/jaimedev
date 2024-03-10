import data from "../settings/profile-sidebar.json" assert { type: "json" };

const mesesJson = {
  "01": "Janeiro",
  "02": "Fevereiro",
  "03": "Março",
  "04": "Abril",
  "05": "Maio",
  "06": "Junho",
  "07": "Julho",
  "08": "Agosto",
  "09": "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

let socialHtmlList = "";
data.SocialURL.forEach((e) => {
  if (e[1] != "none") {
    socialHtmlList += `
        <li class="social-item">
            <a href="${e[1]}" class="social-link" target=”_blank”>
                <ion-icon name="logo-${e[0]}"></ion-icon>
            </a>
        </li>`;
  }
});

const elementHTML = document.getElementById("sidebar-profile-infos");
const contentHTML = `
<div class="sidebar-info">
    
            <figure class="avatar-box">
              <img src="./assets/images/my-avatar.png" alt="${
                data.YourName
              } User Profile" width="80">
            </figure>
    
            <div class="info-content">
              <h1 class="name" title="${data.YourName}">${data.YourName}</h1>
    
              <p class="title">${data.YourRole}</p>
            </div>
    
            <button class="info_more-btn" data-sidebar-btn>
              <span>Show Contacts</span>
    
              <ion-icon name="chevron-down"></ion-icon>
            </button>
    
          </div>
    
          <div class="sidebar-info_more">
    
            <div class="separator"></div>
    
            <ul class="contacts-list">
    
              <li class="contact-item">
    
                <div class="icon-box">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
    
                <div class="contact-info">
                  <p class="contact-title">Email</p>
    
                  <a href="mailto:${data.Email}" class="contact-link">${
  data.Email
}</a>
                </div>
    
              </li>
    
              <li class="contact-item">
    
                <div class="icon-box">
                  <ion-icon name="calendar-outline"></ion-icon>
                </div>
    
                <div class="contact-info">
                  <p class="contact-title">${data.Birthday[0]}</p>
    
                  <time datetime="${data.Birthday[1]}">
                    Dia ${data.Birthday[1].split("-")[2]} 
                    de ${mesesJson[data.Birthday[1].split("-")[1]]}
                  </time>
                </div>
    
              </li>
    
              <li class="contact-item">
    
                <div class="icon-box">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
    
                <div class="contact-info">
                  <p class="contact-title">${data.Location[0]}</p>
    
                  <address>${data.Location[1]}</address>
                </div>
    
              </li>
    
            </ul>
    
            <div class="separator"></div>
    
            <ul class="social-list">
    
            ${socialHtmlList}
    
            </ul>
    
          </div>
`;
elementHTML.innerHTML += contentHTML;
