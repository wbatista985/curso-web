//-Botão 01 -Atualizar a pagina e desfazer mudanças do DOM
function mudaTamanhoFonte () {
    document.getElementById("manipula").style.fontSize = "20pt"
}

//Botão 02 -Mudar tamanho da fonte
function mudarCor() {
    document.getElementById("manipula").style.color = "black"
}

//Botão 03 mudar cor da fonte
function backgroundDiv() {
    document.getElementById("manipula").style.backgroundColor = "white"
}

//Botão 04 mudar cor backgroundDiv
function backgroundDiv() {
    document.getElementById("manipula").style.backgroundColor = "white"
}

//Botão 05 - italico
function mudarItalico() {
    document.getElementById("manipula").style.fontStyle = "italic"
}

//Botão 06 - Mudar para Negrito
function botaoNegrito() {
    document.getElementById("manipula").style.fontWeight = "bold"
}

//Botão 07 - colocar borda
function incluirBorda() {
    document.getElementById("manipula").style.border = "1px solid  #000000"
}

//Botão 08 - remover borda
function removerBorda() {
    document.getElementById("manipula").style.border = "none"
}

//Botão 09 - remover div
function removerDiv() {
    document.getElementById("manipula").style.display = "none"
}

//Botão 10 - Aparecer div
function aparecerDiv() {
    document.getElementById("manipula").style.display = "block"
}
//Botão 11 - Alterar texto na tag h2
function nao() {
    document.getElementsByClassName("chamada")[0].innerHTML = "Mudei !!!!"
}

//Botão 12 mudar cor background
function backgroundp() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "red"
    /*document.getElementsById("manipula").
    document.getElementsByClassName("paragrafo")[0].style.color = "blue"*/
}

//Botão 13 mudar cor botao
function mudarBotao() {
    document.getElementsByTagName("input")[12].style.backgroundColor = "red"
}

//Botão 14 mudar cor todos botao
function mudarTodosBotoes() {
    var x = document.getElementById("botoes").getElementsByTagName("input")
    for ( let y in x ) {
        x[y].style.backgroundColor = "red"
    }  
}

//Botão 15 mudar contar todos botao
function contarTodosBotoes() {
    let contar = document.getElementById("botoes").getElementsByTagName("input")
    document.getElementById("manipula").innerHTML = contar.length
  }  

//Botão 16 censura - função
function censura() {
    document.querySelector("p.paragrafo").innerHTML = "****"
  }  

//Botão 17 mudar fundo para outra cor
function fundo() {
    document.querySelector("body").style.backgroundColor = "lightblue"
  }  

//Botão 18 mudar imagem
function imagem() {
    var  img = document.querySelector("#image")
    img.setAttribute("src", "./imagens/alien.jpg")
  }  




/*Botão 13 mudar cor do segundo paragrafo
function mudarCor2() {
    document.getElementsByClassName("paragrafo")[0].style.color = "blue"
} */   

