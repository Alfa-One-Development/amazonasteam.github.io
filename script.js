<<<<<<< HEAD
const imagens = document.querySelectorAll("")
=======
const imagens = document.querySelectorAll("#slider")
>>>>>>> 4e78b1498b1ac2bce4179c584209642224156490
let imagemAtual = 0

function mostrarImagem(index) {
    imagens.forEach((img) => (img.style.display = "none"))
    imagens[index].style.display = "block"
}

function proximaImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mostrarImagem(imagemAtual);
}

function imagemAnterior(){
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(imagemAtual);
}

mostrarImagem(imagemAtual);

<<<<<<< HEAD
const botaoProximo = document.getElementById("NextPic")
const botaoAnterior = document.getElementById("PrevPic")
=======
const botaoProximo = document.getElementById("proximoBotao");
const botaoAnterior = document.getElementById("anterBotao");
>>>>>>> 4e78b1498b1ac2bce4179c584209642224156490

botaoProximo.addEventListener("click", () => {
    proximaImagem();
});

botaoAnterior.addEventListener("click", () => {
    imagemAnterior();
});

let intervalo = setInterval (proximaImagem, 5000);