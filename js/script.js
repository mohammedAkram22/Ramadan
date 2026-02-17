// mood btn
const nav = document.querySelector("nav");
const moodBtn = document.querySelector("#mood-btn")

moodBtn.onclick = () => {
    const mood = localStorage.getItem("mood")
    if (mood) {
        if (localStorage.getItem("mood") == "dark") {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("mood", "light");
            moodBtn.querySelector("i").classList.replace("fa-sun", "fa-moon")
        } else {
            localStorage.setItem("mood", "dark");
            moodBtn.querySelector("i").classList.replace("fa-moon", "fa-sun")
            document.documentElement.classList.add("dark")
        }
    } else {
        localStorage.setItem("mood", "dark");
        moodBtn.querySelector("i").classList.replace("fa-moon", "fa-sun")
        document.documentElement.classList.add("dark")
    }
}

window.onload = () => {
    // website mood
    const mood = localStorage.getItem("mood")
    if (mood) {
        if (localStorage.getItem("mood") == "dark") {
            moodBtn.querySelector("i").classList.replace("fa-moon", "fa-sun")
            document.documentElement.classList.add("dark")
        } else {
            moodBtn.querySelector("i").classList.replace("fa-sun", "fa-moon")
            document.documentElement.classList.remove("dark")
        }
    } else {
        localStorage.setItem("mood", "light")
        moodBtn.querySelector("i").classList.replace("fa-sun", "fa-moon")
        document.documentElement.classList.remove("dark")
    }
}
// dropdown in header
const togglerBtn = document.querySelector("#toggler-btn")
const togglerIcon = togglerBtn.querySelector("i.fas")
const navbarList = document.querySelector("#navbar-default")
togglerBtn.onclick = () => {
    navbarList.classList.toggle("hidden");
    togglerIcon.classList.contains("fa-bars") ? togglerIcon.classList.replace("fa-bars", "fa-close") : togglerIcon.classList.replace("fa-close", "fa-bars");
}

const topBtn = document.querySelector(".top-btn")
// scrolled header
window.onscroll = () => {
    document.documentElement.scrollTop > document.querySelector(".hero").clientHeight ? topBtn.classList.replace("-bottom-12.5", "bottom-10") : topBtn.classList.replace("bottom-10", "-bottom-12.5")
    scrollY > 120 ? navbar.classList.add("scrolled") : navbar.classList.remove("scrolled")
}

// top btn
const navbar = document.querySelector("nav")
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })

