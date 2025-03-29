const socialConfig = [
  {
    name: "Discord",
    icon: "/assets/socials/discord.svg",
    link: "https://discord.com/users/bennowo",
  },
  {
    name: "GitHub",
    icon: "/assets/socials/github.svg",
    link: "https://github.com/BennoCrafter",
  },
];

// Create social buttons dynamically
const socialsContainer = document.getElementById("socials-container");

socialConfig.forEach((social) => {
  const button = document.createElement("button");
  button.classList.add("social-button");

  const img = document.createElement("img");
  img.src = social.icon;
  img.alt = `${social.name} Logo`;

  button.appendChild(img);

  button.addEventListener("click", () => {
    window.open(social.link, "_blank");
  });

  socialsContainer.appendChild(button);
});
