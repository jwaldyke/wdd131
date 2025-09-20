// Get the current year

const currentYear = new Date().getFullYear();

document.querySelector("#year").textContent = currentYear;

//last modified date

const lastModified = new Date(document.lastModified);

document.querySelector("#lastModified").textContent = lastModified.toLocaleString();


