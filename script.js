let saidaSaldo = document.getElementById("saldo");
let saidaExtrato = document.getElementById("extrato");
let valorHTML = document.getElementById("valor");
let linha = "<br>";

function dataCurta() {
  let data = new Date();
  let dd = data.getDay();
  let mm = data.getMonth();
  let aaaa = data.getFullYear();
  let h = data.getHours();
  let m = data.getMinutes();

  if (dd <= 9) {
    dd = "0" + dd;
  }
  if (mm <= 9) {
    mm = "0" + mm;
  }
  if (h <= 9) {
    h = "0" + h;
  }

  if (m <= 9) {
    m = "0" + m;
  }
  return dd + "/" + mm + "/" + aaaa + " - " + h + ":" + m;
}

let poupanca = {
  saldo: 0,
  movimentacao: [],

  depositar: function () {
    let valor = Number(valorHTML.value);
    this.saldo += valor;
    saidaSaldo.innerHTML = "Saldo: R$ " + this.saldo.toFixed(2);
    this.movimentacao.push(
      dataCurta() + " - " + "Depósito R$ :" + valor.toFixed(2)
    );
    valorHTML.value = "";
  },
  sacar: function () {
    let valor = Number(valorHTML.value);
    if (valor > this.saldo) {
      alert("Saldo Insuficiente");
    } else {
      this.saldo -= valor;
      this.movimentacao.push(
        dataCurta() + " - " + "Saque R$: " + valor.toFixed(2)
      );
    }
    saidaSaldo.innerHTML = "Saldo: R$ " + this.saldo.toFixed(2);
    valorHTML.value = "";
  },
  exibirExtrato: function () {
    saidaExtrato.innerHTML = "Extrato: ";
    for (i = 0; i <= this.movimentacao.length - 1; i++) {
      saidaExtrato.innerHTML += linha + this.movimentacao[i];
    }
  },
};
