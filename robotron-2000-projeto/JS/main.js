const controle = document.querySelector(".controle-ajuste")

controle.forEach( (elemento) => { 
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao) {
    const peca = controle.querySelector(".controle-contador")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}