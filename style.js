var nomes = ["Asafe", "Flamez", "Asafinho", "AsafeJapa"];
var indiceNome = 0;

function alterarNome() {
  var nomeElemento = document.getElementById("nome");
  nomeElemento.textContent = nomes[indiceNome];
  indiceNome = (indiceNome + 1) % nomes.length;
}

setInterval(alterarNome, 2000);

document.addEventListener("DOMContentLoaded", function () {
  const botaoTema = document.getElementById("botao-tema");

  botaoTema.addEventListener("change", function () {
    document.body.classList.toggle("dark-theme");
  });

  // Verifique o estado inicial do botão ao carregar a página
  if (localStorage.getItem("theme") === "dark") {
    botaoTema.checked = true;
    document.body.classList.add("dark-theme");
  }
});
