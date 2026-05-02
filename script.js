const API = "https://lojas-de-scripts.onrender.com";

// carregar produtos
fetch(API + "/produtos")
  .then(res => res.json())
  .then(produtos => {
    const container = document.getElementById("lista-produtos");

    produtos.forEach(p => {
      container.innerHTML += `
        <div class="card">
          <h3>${p.nome}</h3>
          <p>R$ ${p.preco}</p>
          <button onclick="comprar('${p.nome}')">Comprar</button>
        </div>
      `;
    });
  });

// comprar
function comprar(produto) {
  fetch(API + "/comprar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      usuario: "Kauan",
      produto: produto
    })
  })
  .then(() => {
    alert("Compra feita!");
    carregarHistorico();
  });
}

// histórico
function carregarHistorico() {
  fetch(API + "/historico")
    .then(res => res.json())
    .then(dados => {
      const lista = document.getElementById("lista-historico");
      lista.innerHTML = "";

      dados.forEach(c => {
        lista.innerHTML += `<li>${c.produto}</li>`;
      });
    });
}

carregarHistorico();
