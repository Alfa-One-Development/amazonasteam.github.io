const imagens = document.querySelectorAll("")
let imagemAtual = 0

function mostrarImagem(index) {
    imagens.forEach((img) => (img.style.display = "none"))
    imagens[index].style.display = "block"
}

function proximaImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length
    mostrarImagem(imagemAtual)
}

function imagemAnterior(){
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length
    mostrarImagem(imagemAtual)
}

mostrarImagem(imagemAtual)

const botaoProximo = document.getElementById("NextPic")
const botaoAnterior = document.getElementById("PrevPic")

botaoProximo.addEventListener("click", () => {
    proximaImagem()
});

botaoAnterior.addEventListener("click", () => {
    imagemAnterior()
});