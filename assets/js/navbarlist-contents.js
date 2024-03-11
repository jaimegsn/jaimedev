import data from "../settings/navbarlist-and-content.json" assert { type: "json" };

let navbarsContentElementHTML = "";
let activities = "";

data.navbarlist[0][2].Activities.forEach((e, index) => {
  if (index != 0) {
    activities += `
    <li class="service-item">
    
      <div class="service-icon-box">
        <img src="${e.LogoIMG}" alt="${e.ALTDesc}" width="40">
      </div>

      <div class="service-content-box">
        <h4 class="h4 service-item-title">${e.Activity}</h4>

        <p class="service-item-text">
          ${e.Description}
        </p>
      </div>

    </li>`;
  }
});

function setResumeExperiences() {
  let resumeExperiences = "";
  data.navbarlist[1][2].Education.forEach((e, index) => {
    if (index != 0) {
      resumeExperiences += `
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">${e.FieldOfStudy}, ${e.School}</h4>
          <span>${e.StartYear} — ${e.EndYear}</span>

          <p class="timeline-text">
          ${e.Description}
          </p>
        </li>
    `;
    }
  });
  return resumeExperiences;
}

data.navbarlist.forEach((e) => {
  if (e[1] == "about") {
    navbarsContentElementHTML += `
    <article class="about  active" data-page="${e[0].toLowerCase}">
            <header>
              <h2 class="h2 article-title">${e[0]}</h2>
            </header>
    
            <section class="about-text">
              <p>
              ${e[2].AboutMe}
              </p>
            </section>

            <section class="service">
    
              <h3 class="h3 service-title">${e[2].Activities[0]}</h3>
    
              <ul class="service-list">
              ${activities}
              </ul>
    
            </section>
          </article>`;
  } else if (e[1] == "resume") {
    navbarsContentElementHTML += `
    <article class="resume" data-page="${e[0].toLowerCase}">

        <header>
          <h2 class="h2 article-title">${e[0]}</h2>
        </header>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">${e[2].Education[0]}</h3>
          </div>

          <ol class="timeline-list">

          ${setResumeExperiences()}

          </ol>

        </section>

        <section class="timeline">

          <div class="title-wrapper">
            <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 class="h3">Experience</h3>
          </div>

          <ol class="timeline-list">

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Creative director</h4>

              <span>2015 — Present</span>

              <p class="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas
                molestias
                exceptur.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Art director</h4>

              <span>2013 — 2015</span>

              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

            <li class="timeline-item">

              <h4 class="h4 timeline-item-title">Web designer</h4>

              <span>2010 — 2013</span>

              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et
                quas molestias
                exceptur.
              </p>

            </li>

          </ol>

        </section>

        <section class="skill">

          <h3 class="h3 skills-title">My skills</h3>

          <ul class="skills-list content-card">

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Web design</h5>
                <data value="80">80%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 80%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 70%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">Branding</h5>
                <data value="90">90%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 90%;"></div>
              </div>

            </li>

            <li class="skills-item">

              <div class="title-wrapper">
                <h5 class="h5">WordPress</h5>
                <data value="50">50%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style="width: 50%;"></div>
              </div>

            </li>

          </ul>

        </section>

      </article>
    `;
  }
});

const elementHTML = document.getElementById("div-main-content");
const contentHTML = `
${navbarsContentElementHTML}
`;
elementHTML.innerHTML += contentHTML;

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
console.log(navigationLinks);
console.log("----");
console.log(pages);
console.log("-------------------------------");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      console.log(this.innerHTML.toLowerCase());
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

/**
 * 
 * 

 * 
 */
