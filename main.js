const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span')
const mobile_menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
        ? 'close'
        : 'menu';

    mobile_menu.classList.toggle('is-open');
})

let datalist = document.querySelector(".cv-data");
let joblist = document.querySelector(".cv-jobs")

let url = "./data.json";

async function getcv() {
    const response = await fetch(url)
        .then((response) => response.json())
        .then((response) => (data = response));
    data.educations.forEach(element => {
        let li = document.createElement("li");
        li.style.listStyle = "none";
        li.innerHTML = ` ${element.highschool} <br> ${element.focus} <br> ${element.year}`;
        datalist.appendChild(li)
    });

    data.work.forEach(element => {
        let li = document.createElement("li");
        li.style.listStyle = "none";
        li.innerHTML = `${element.job}  ${element.year}`
        joblist.appendChild(li)
    })



}
getcv()

