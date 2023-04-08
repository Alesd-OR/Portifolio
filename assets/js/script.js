let inputQtd = document.querySelector("#qtde")
let checkbox = document.querySelector("#js");
let layout = document.querySelector("#layout_sim")
let prazo = document.querySelector("#prazo")

inputQtd.addEventListener("input", attOrcamento)

checkbox.addEventListener("change", attOrcamento)

layout.addEventListener("change", attOrcamento)

prazo.addEventListener("change", attOrcamento)

function attOrcamento() {
    let qtd = inputQtd.value
    let preco = qtd * 100;

    let js = document.querySelector("#js").checked
    if (js) preco *= 1.1

    let layout = document.querySelector("#layout_sim").checked
    if (layout) preco *= 1 + (qtd * .1)

    let prazo = document.querySelector("#prazo").value
    if (prazo > 2) preco += (preco * 1.15)
    else if (prazo > 4) preco += (preco * 1.3)
    else if (prazo > 8) preco += (preco * 1.8)

    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `${prazo} semana(s) de exibição`



    let output = document.querySelector("#Secaodeorcamentos form output")
    output.innerHTML = "R$" + preco.toFixed(2);
}
