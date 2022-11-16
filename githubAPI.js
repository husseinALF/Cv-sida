let h4 = document.querySelector(".project-github-h4");
let p = document.querySelector(".project-github-desc");
let loader = document.querySelector(".loading")

let url = "https://api.github.com/users/husseinALF/repos"

async function getapi() {
    const response = await fetch(url)
        .then((response) => response.json())
        .then((response) => (data = response));
    loader.innerText = "";
    data.forEach(element => {
        h4.innerHTML = element.name;
    });
    data.forEach(element => {
        p.innerHTML = element.description;
    });
}

getapi()