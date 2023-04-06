let inputQtd = document.querySelector("#qtde")

inputQtd.addEventListener("change" , attOrcamento)

function attOrcamento() {
    let qtd = inputQtd.value
    let preco = qtd * 100;
    
    let js = document.querySelector("#js").checked
    if(js) preco *= 1.1

    let layout = document.querySelector("#layout_sim").checked
    if(layout) preco *= 1 + (qtd * .1)

    let prazo = document.querySelector("#prazo").value
    let labelPrazo = document.querySelector("label[for=prazo]")
    labelPrazo.innerHTML = `Prazo (${prazo} semanas)`

    //fazer a formula para taxa de adiantamento(?)

    let output = document.querySelector("#Secaodeorcamentos form output")
    output.innerHTML = "R$" + preco.toFixed(2);
}