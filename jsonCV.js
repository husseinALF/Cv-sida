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