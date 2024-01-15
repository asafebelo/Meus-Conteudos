// Mudar nomes na página inicial
var nomes = ["Asafe", "Flamez", "Asafinho", "AsafeJapa"];
var indiceNome = 0;

function alterarNome() {
  var nomeElemento = document.getElementById("nome");
  nomeElemento.textContent = nomes[indiceNome];
  indiceNome = (indiceNome + 1) % nomes.length;
}

setInterval(alterarNome, 2000);

// style.js

(function () {
  function setTheme() {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    document.body.classList.toggle("dark-theme", isDarkMode);
    botaoTema.checked = isDarkMode;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const botaoTema = document.getElementById("botao-tema");

    botaoTema.addEventListener("change", function () {
      const isDarkMode = botaoTema.checked;
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      setTheme();
    });

    // Verifique o estado inicial do botão ao carregar a página
    setTheme();
  });

  // Função para ler o tema do localStorage ao carregar outra página
  document.addEventListener("DOMContentLoaded", function () {
    // Chame a função ao carregar a página
    setTheme();
  });
})();
