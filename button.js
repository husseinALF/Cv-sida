const buttonclick = document.querySelector(".pic-click");
const stevepic = document.querySelector(".show")

buttonclick.addEventListener("click", () => {
    if (stevepic.style.display === "none") {
        stevepic.style.display = "block";
    } else {
        stevepic.style.display = "none";
    }
}
)
