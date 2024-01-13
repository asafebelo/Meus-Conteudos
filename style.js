var nomes = ["Asafe", "Flamez", "Asafinho", "AsafeJapa"];
var indiceNome = 0;

function alterarNome() {
  var nomeElemento = document.getElementById("nome");
  nomeElemento.textContent = nomes[indiceNome];
  indiceNome = (indiceNome + 1) % nomes.length;
}

setInterval(alterarNome, 2000);
