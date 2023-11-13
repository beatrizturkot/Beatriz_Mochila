const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")

form.addEventListener("submit", (evento) => {
    evento.preventDeFault()

    criaElemento(evento.target.elements['nome'].value, evento.target.elementS['quantidade'].value)
})

function criaElemento(nome, quantidade) { 
   const novoItem document.createElement('li')
   novoItem.classList.add("item")

   const numeroItem = document.createElement('strong')
   numeroItem.innerHTML = quantidade

   novoItem.appendChild(numeroItem)
   novoItem.innerHTML += nome

   const lista = document.getElementById('lista')

 
   console.log(novoItem)
}