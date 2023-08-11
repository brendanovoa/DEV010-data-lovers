// todo lo relacio con el DOM

/*const root = document.getElementById('root')

const renderHtml=(todaslasPersonas)=>{
  let html = ''
  todaslasPersonas.forEach(unElemento=>{
    html=html+`
        <p> ${unElemento.nombre}<p>
        `
  })
  return html
}

const nombres=[
  {id:1, nombre:'Jazmin'},
  {id:2, nombre:'Brenda'},
  {id:3, nombre:'Carlos'},
  {id:4, nombre:'Gene'},
]

root.innerHTML= renderHtml(nombres)
root.innerHTML= '<marquee>Soy una serpiente que anda por el bosque</marquee>'*/

import data from './data/athletes/athletes.js'

const container = document.querySelector('.seccionAtletas');

for (let i=0; i < data.athletes.length; i++){
  container.innerHTML += `
<div class="cardAtleta">
  <p>${data.athletes[i].name} </p>
</div>`
}    
