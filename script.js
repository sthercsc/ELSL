function calcularTeor() {
  const gasolina = parseFloat(document.getElementById('gasolina').value);
  const resultadoTexto = document.getElementById('resultado-texto');
  const resultadoDiv = document.getElementById('resultado');

  // Verificar se o valor informado é válido
  if (isNaN(gasolina) || gasolina <= 0) {
    resultadoTexto.textContent = "Por favor, insira uma quantidade válida de gasolina.";
    resultadoDiv.style.display = "block";
    return;
  }

  // Lógica simples de cálculo (você pode ajustar conforme as informações que você tem sobre a gasolina e o álcool)
  const teorDeAlcool = gasolina * 0.27;  // Exemplo: 27% do total da gasolina pode ser álcool

  // Exibir o resultado
  resultadoTexto.textContent = `O teor de álcool na gasolina é aproximadamente ${teorDeAlcool.toFixed(2)} litros.`;
  resultadoDiv.style.display = "block";
}
