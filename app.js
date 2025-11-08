function carregarPagina(hash) {
    const app = document.getElementById("app");
    const id = `template-${hash || "inicio"}`;
    const template = document.getElementById(id);

//atualiza classe do body
document.body.className = "";
document.body.classList.add(`page-${hash || "inicio"}`);

//troca o conteúdo
if(template) {
    app.innerHTML = template.innerHTML;
} else {
    app.innerHTML = "<p>Página não encontrada.</p>";
}

//Fechar menu
fecharMenu();
}

//Fechar automáticamente
function fecharMenu(){
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) menuToggle.checked = false;
}

window.addEventListener("hashchange", () =>
carregarPagina(location.hash.replace("#", ""))
);

window.addEventListener("DOMContentLoaded", () =>
carregarPagina(location.hash.replace("#", ""))
);

//Validação de formulário
const form = document.getElementById("formCadastro");
if (form) {
    form.addEventListener("submit", (e) =>{
        e.preventDefault();
        const campos = form.querySelectorAll("input[required]");
        let valido = true;
        campos.forEach( campo => {
            if (!campo.ariaValueMax.trim()) {
                valido = false;
                campo.style.border = "2px solid red";
            } else {
                campo.style.border = "2px solid green";
            }
        });
        mostrarFeedback(valido ? "Cadastro enviado com sucesso!" : "Por favor, preencha todos os campos corretamente.");
    });
}

// Sistema de alerta feedback
function mostrarFeedback(msg) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-message").innerText = msg;
    modal.style.display = "flex";
}

// 🌙 Alternar tema claro/escuro
const toggleButton = document.getElementById("toggle-theme");

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    document.body.dataset.theme =
      document.body.dataset.theme === "dark" ? "light" : "dark";
  });
}