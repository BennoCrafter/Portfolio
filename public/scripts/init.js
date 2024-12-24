async function fetchConfig() {
  return await fetch(
    "/assets/config.json",
    //"https://raw.githubusercontent.com/bennocrafter/portfolio/main/assets/config.json",
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error("Error loading config:", error);
      return null;
    });
}
