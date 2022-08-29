const themeToggle = document.querySelector(".js-theme-toggle");
const themeIcons = Array.from(themeToggle.children);

function toggleTheme(){
    document.body.classList.toggle("dark-theme");
    themeIcons.forEach(icon => icon.classList.toggle("theme-toggle__show-icon"));
}

function loadTheme(){
    const theme = localStorage.getItem("dark-theme");
    if(theme){
        toggleTheme();
    }
}

themeToggle.addEventListener("click", () => {
    toggleTheme();
    localStorage.removeItem("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("dark-theme", true);
    }
});

window.addEventListener("load", () => {
    loadTheme();
});