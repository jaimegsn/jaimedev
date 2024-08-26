document.addEventListener("DOMContentLoaded", function () {
  // Dados para inserir
  const userInfo = {
    name: "Jaime Neto",
    title: "Web Developer",
    avatar: "./assets/images/profile-image/my-avatar.jpeg",
    email: "jaime.jgsn2@gmail.com",
    phone: "+55 (88) 99674-8066",
    birthday: "2000-03-17",
    location: "Quixadá, Ceará, Brazil",
    social: {
      instagram: "https://www.instagram.com/jaimegsn/",
      github: "https://github.com/jaimegsn",
      linkedin: "https://www.linkedin.com/in/jaimegsn/",
    },
  };

  const fieldsName = {
    english: {
      email: "email",
      phone: "phone",
      birthday: "birthday",
      location: "location",
    },
    portuguese: {
      email: "email",
      phone: "telefone",
      birthday: "nascimento",
      location: "localização",
    },
  };

  // Selecionandoo nome dos campos
  const emailTitleElement = document.getElementById("email-title");
  const phoneTitleElement = document.getElementById("phone-title");

  // Selecionando elementos de dados Pessoais
  const nameElement = document.querySelector(".info-content .name");
  const titleElement = document.querySelector(".info-content .title");
  const avatarElement = document.querySelector(".avatar-box img");
  const emailElement = document.querySelector(
    ".contacts-list a[href^='mailto:']"
  );
  const phoneElement = document.querySelector(".contacts-list a[href^='tel:']");
  const birthdayElement = document.querySelector(".contacts-list time");
  const locationElement = document.querySelector(".contacts-list address");
  const socialLinks = document.querySelectorAll(".social-list .social-link");

  // Inserindo os dados
  nameElement.textContent = userInfo.name;
  titleElement.textContent = userInfo.title;
  avatarElement.src = userInfo.avatar;

  emailElement.textContent = userInfo.email;
  emailElement.href = `mailto:${userInfo.email}`;
  //emailTitleElement.textContent = fieldsName.portuguese.email;

  phoneElement.textContent = userInfo.phone;
  phoneElement.href = `tel:${userInfo.phone}`;

  // Ajustando a data de aniversário
  const [year, month, day] = userInfo.birthday.split("-");
  const birthday = new Date(year, month - 1, day);

  // Formatando a data corretamente
  const options = { month: "long", day: "numeric", year: "numeric" };
  birthdayElement.textContent = birthday.toLocaleDateString("en-US", options);
  birthdayElement.setAttribute("datetime", userInfo.birthday);
  locationElement.textContent = userInfo.location;

  // Inserindo os links sociais
  socialLinks[0].href = userInfo.social.instagram;
  socialLinks[1].href = userInfo.social.github;
  socialLinks[2].href = userInfo.social.linkedin;
});
