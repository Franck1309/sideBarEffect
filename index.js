

const contentBody = document.querySelector(".content")
const sideBar = document.getElementById("side-bar");

btn.addEventListener("click", () => {
    sideBar.classList.toggle("active")
})

contentBody.addEventListener("click", () => {
        sideBar.classList.remove("active")
})

