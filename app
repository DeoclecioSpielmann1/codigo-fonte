//Menu de Opções
//Crie um menu interativo com as seguintes opções de bebidas:

let opcao = 7;

switch (opcao) {
  case 1:
    console.log("Você escolheu Água");
    break;
  case 2:
    console.log("Você escolheu Suco");
    break;
  case 3:
    console.log("Você escolheu Refrigerante");
    break;
  case 4:
    console.log("Você escolheu Chá");
    break;
  case 5:
    console.log("Você escolheu Café");
    break;
  default:
    console.log("Opção inválida!");
}
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu Interativo</title>
  <style>
    /* Estilos para o menu */
  </style>
</head>
<body>

<div class="container">

  <header class="header">
    <p class="eyebrow">Menu Interativo</p>
    <h1>Escolha sua <span>Bebida</span></h1>
    <div class="divider"><div class="dot"></div></div>
  </header>

  <div class="menu" id="menu">
    <div class="menu-item" data-opcao="1" onclick="escolher(1)">
      <span class="item-number">1</span>
      <span class="item-icon">💧</span>
      <span class="item-label">Água</span>
      <span class="item-check">✔</span>
    </div>
    <div class="menu-item" data-opcao="2" onclick="escolher(2)">
      <span class="item-number">2</span>
      <span class="item-icon">🍊</span>
      <span class="item-label">Suco</span>
      <span class="item-check">✔</span>
    </div>
    <div class="menu-item" data-opcao="3" onclick="escolher(3)">
      <span class="item-number">3</span>
      <span class="item-icon">🥤</span>
      <span class="item-label">Refrigerante</span>
      <span class="item-check">✔</span>
    </div>
    <div class="menu-item" data-opcao="4" onclick="escolher(4)">
      <span class="item-number">4</span>
      <span class="item-icon">🍵</span>
      <span class="item-label">Chá</span>
      <span class="item-check">✔</span>
    </div>
    <div class="menu-item" data-opcao="5" onclick="escolher(5)">
      <span class="item-number">5</span>
      <span class="item-icon">☕</span>
      <span class="item-label">Café</span>
      <span class="item-check">✔</span>
    </div>
  </div>

  <div class="result" id="result">
    <span class="result-icon" id="result-icon">👆</span>
    <div class="result-text">
      <div class="result-label">Resultado</div>
      <div class="result-message" id="result-message">Selecione uma opção acima</div>
    </div>
  </div>

  <div class="code-badge" id="code-badge">
    <span class="cm">// JavaScript — switch executado:</span><br>
    <span class="kw">let</span> opcao = <span class="num" id="code-opcao">—</span>;<br><br>
    <span class="kw">switch</span> (opcao) {<br>
    &nbsp;&nbsp;<span class="kw">case</span> <span class="highlight" id="code-case">?</span>:<br>
    &nbsp;&nbsp;&nbsp;&nbsp;console.<span class="kw">log</span>(<span class="str" id="code-log">"..."</span>);<br>
    &nbsp;&nbsp;&nbsp;&nbsp;<span class="kw">break</span>;<br>
    }
  </div>

</div>

<script>
  const icones = { 1:'💧', 2:'🍊', 3:'🥤', 4:'🍵', 5:'☕' };

  function escolher(opcao) {
    document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));

    const item = document.querySelector(`[data-opcao="${opcao}"]`);
    if (item) item.classList.add('active');

    let mensagem;
    switch (opcao) {
      case 1: mensagem = "Você escolheu Água";         break;
      case 2: mensagem = "Você escolheu Suco";         break;
      case 3: mensagem = "Você escolheu Refrigerante"; break;
      case 4: mensagem = "Você escolheu Chá";          break;
      case 5: mensagem = "Você escolheu Café";         break;
      default: mensagem = "Opção inválida!";
    }

    document.getElementById('result-icon').textContent    = icones[opcao] || '❌';
    document.getElementById('result-message').textContent = mensagem;
    document.getElementById('code-opcao').textContent     = opcao;
    document.getElementById('code-case').textContent      = opcao;
    document.getElementById('code-log').textContent       = `"${mensagem}"`;

    console.log(mensagem);
  }
</script>

</body>
</html>