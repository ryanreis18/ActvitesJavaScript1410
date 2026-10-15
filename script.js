const botaoTema = document.getElementById("btnTheme");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});