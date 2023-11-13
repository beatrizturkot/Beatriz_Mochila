const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDeFault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elementS['quantidade'].value)
})

function criaElemento(nome, quantidade) { 
    console.log(nome)
    console.log(quantidade)

    
   const novoItem document.createElement('li')
   novoItem.classList.add("item")

   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = quantidade

   console.log(numeroItem)
}