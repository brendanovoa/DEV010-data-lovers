// Aquí va todo lo relacionado con el DOM

// EJEMPLO CARLOS
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

// FUNCION PARA LIMINAR NOMBRES REPETIDOS
function eliminarAtletasRepetidos(athletes) {
  const atletasUnicos = [];
  const nombresVistos = new Set();
  athletes.forEach(athlete => {
    if (!nombresVistos.has(athlete.name)) {
      nombresVistos.add(athlete.name);
      atletasUnicos.push(athlete);
    }
  });
  return atletasUnicos;
}
const atletasSinRepetidos = eliminarAtletasRepetidos(data.athletes);
const container = document.querySelector('.seccionAtletas');

// BUCLE FOR PARA MOSTRAR LOS NOMBRES EN LAS CARDS
for (let i=0; i < atletasSinRepetidos.length; i++){
  container.innerHTML += `
    <div class="cardAtleta">
        <p>${atletasSinRepetidos[i].name}</p>
    </div>`
}

// OTRA FORMA DE HACECR LA FUNCION SIN USAR SET NI ! PERO NO ME FUNCCIONÓ
// function eliminarRepetidos(athletes) {
//   const atletasUnicos = [];
//   const nombresVistos = [];
//   athletes.forEach(athlete => {
//     if (nombresVistos.includes(athlete.name)) {
//       // No hacer nada si el nombre ya está en nombresVistos
//     } else {
//       nombresVistos.push(athletes.name);
//       atletasUnicos.push(athlete);
//     }
//   });
//   return atletasUnicos;
// }
// const atletasSinRepetidos = eliminarRepetidos(data.athletes);
// console.log(atletasSinRepetidos);




/* CÓDIGO DE CARO PULIDO PARA PAGINACIÓN*/
// const items = 20;
// let totalPages;

// const navBarToggle = document.querySelector('.toggle');
// const navBarButtons = document.querySelector('.links');

// const pageSelector = document.querySelector('#page-selector');
// const backBut = document.querySelector('#back-button');
// const forwardBut = document.querySelector('#forward-button');

// function init() {
//   totalPages = Math.ceil(globalData.length/items);
//   document.querySelector('nav section h3').innerHTML = "Flags of Countries";
//   inputSearch.value = '';
//   switchBut.checked = false;
//   backBut.disabled = true;
//   createPaginator(totalPages, pageSelector);
//   createSelectorForFilterBy();
//   theData = globalData;
//   showCards(theData, cards, parseInt(pageSelector.value) + 1, items);
//   showTable(theData, table, parseInt(pageSelector.value) + 1, items);
//   (switchBut.checked === true) ? cards.style.display = 'none' : table.style.display = 'none';
//   createEventListeners();
// }

// forwardBut.addEventListener('click', (event) => {
//   moveBetweenPages(event);
// }); 
// backBut.addEventListener('click', (event) => {
//   moveBetweenPages(event);
// });

// function moveBetweenPages(event){
//   const actual = parseInt(pageSelector.value);
//   if(event.target.id.endsWith("button")){
//     (actual === 1) ? backBut.disabled = true : backBut.disabled = false;
//     (actual === Math.ceil(theData.length/items) - 2) ? forwardBut.disabled = true : forwardBut.disabled = false;
//   } else if (event.target.id.endsWith("selector")){
//     (actual === 0) ? backBut.disabled = true : backBut.disabled = false;
//     (actual === Math.ceil(theData.length/items) - 1) ? forwardBut.disabled = true : forwardBut.disabled = false;
//   }
//   if ( actual >= 0 && actual < Math.ceil(theData.length/items) ){
//     if(event.target.id === "back-button"){
//       forwardBut.disabled = false;
//       pageSelector.text = parseInt(actual);
//       pageSelector.value = parseInt(actual)-1;
//     } else if(event.target.id === "forward-button"){
//       backBut.disabled = false;
//       pageSelector.text = parseInt(actual)+2;
//       pageSelector.value = parseInt(actual)+1;
//     }
//   }
//   if (switchBut.checked){
//     showTable(theData, table, parseInt(pageSelector.value) + 1, items);
//   } else{
//     showCards(theData, cards, parseInt(pageSelector.value) + 1, items);
//   }
// }