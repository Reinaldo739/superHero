function buscarHerois(){

    const request = new XMLHttpRequest()
    request.open("GET", "https://akabab.github.io/superhero-api/api/all.json", false)
    request.send()

    console.log(request.responseText)
    
    let listadeherois = JSON.parse(request.responseText)

    for(let index = 0 ; index < listadeherois.length; index ++){
        const heroi = listadeherois[index]
        const id = index + 1
        AdicionarCardHerois(heroi)
    }

}


function AdicionarCardHerois(heroi){

    const divElemento = document.getElementById("lista-herois")

    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", heroi.images.lg)
    imagemElemento.style.width="50%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = heroi.name
   

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)

}