let h4 = document.querySelector(".project-github-h4");
let p = document.querySelector(".project-github-desc");
let ul = document.querySelector(".project-ul");
let loader = document.querySelector(".loading");
let loader2 = document.querySelector(".loading2");
let url = "https://api.github.com/users/husseinALF/repos"

async function getapi() {
    const response = await fetch(url)
        .then((response) => response.json())
        .then((response) => (data = response));
    loader.innerText = "";
    loader2.innerText = null;
    data.forEach(element => {
        h4.innerHTML = element.name;
    });
    data.forEach(element => {
        p.innerHTML = element.description;
    });
    data.forEach(element => {
        let li = document.createElement("li");
        ul.appendChild(li)
        li.innerHTML = element.name;
    });
}

getapi()