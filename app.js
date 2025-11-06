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

window.addEventListener("hashchange", () =>
carregarPagina(location.hash.replace("#", ""))
);

window.addEventListener("DOMContentLoaded", () =>
carregarPagina(location.hash.replace("#", ""))
);
}

