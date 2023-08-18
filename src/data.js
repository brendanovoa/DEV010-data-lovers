//import athletes from "./data/athletes/athletes.js";
// FUNCION PARA ELIMINAR NOMBRES REPETIDOS
export function eliminarRepetidos(athletes) { 
  const atletasUnicos = [];
  const nombresVistos = [];
  athletes.forEach(athlete => {
    if (nombresVistos.includes(athlete.name)) {
      // No hacer nada si el nombre ya está en nombresVistos
    } else {
      nombresVistos.push(athlete.name);
      atletasUnicos.push(athlete);
    }
  });
  return atletasUnicos;
}

// FUNCION PARA ORDENAR AFABETICAMENTE
export function ordenar (athletes) {
  return athletes.sort((a,b) => a.name.localeCompare(b.name));
  // agregar comparador de ordenación - función de comparación
  /* La función de comparación debe retornar un valor negativo si el primer elemento 
  debe estar antes que el segundo, cero si ambos elementos son equivalentes 
  y un valor positivo si el primer elemento debe estar después que el segundo.*/
}

// FUNCION FILTRO POR PAIS
export function filtroPais(input, athletes) {
  return athletes.filter(item => item.team === input);
}

//Función para eliminar países repetidos y ordenarlos
export function obtenerPaisesUnicosFiltrados (paisSeleccionado, athletes){
  const paisesFiltrados = filtroPais(paisSeleccionado, athletes);
  const paisesUnicosOrdenados = [...new Set(paisesFiltrados.map(athlete => athlete.name))].sort();
  return paisesUnicosOrdenados;
}


/*const container = document.querySelector('.seccionAtletas');
const paginacion = document.querySelector('.btnPaginacion');

// FUNCION FILTRO POR PAIS
// Filtrar y ordenar los nombres eliminando repetidos
export function filtroPais(paisSeleccionado, athletes) {
  const paisesFiltrados = athletes.filter(item => item.team === paisSeleccionado);
  const paisesUnicosOrdenados = [...new Set(paisesFiltrados.map(athlete => athlete.name))].sort();
  return paisesUnicosOrdenados;
}

function renderizarPorPaises(paisesUnicosOrdenados, container) {
  container.innerHTML = '';
  paginacion.innerHTML = '';
  paisesUnicosOrdenados.forEach(team => {
    const option = document.createElement('option');
    option.value = team;
    option.textContent = team;
    menuPaises.appendChild(option)});
  paisesUnicosOrdenados.forEach(nombre => {
    const nombreInfo = document.createElement("div");
    nombreInfo.classList.add("cardAtleta");
    nombreInfo.textContent = nombre;
    container.appendChild(nombreInfo);
  });
}

menuPaises.addEventListener('change', function() {
  const paisSeleccionado = menuPaises.value;
  if (paisSeleccionado) {
    const paisesFiltrados = filtroPais(paisSeleccionado, athletes.athletes);

    
    container.innerHTML = '';
    paginacion.innerHTML = '';

    nombresUnicosOrdenados.forEach(nombre => {
      const nombreInfo = document.createElement("div");
      nombreInfo.classList.add("cardAtleta");

      nombreInfo.textContent = nombre;
      container.appendChild(nombreInfo);
    });
  } else {
    container.innerHTML = '';
    alert("Seleccione un país para filtrar");
  }
});




// Menu desplegable
// function renderizarMenu(paisesUnicosOrdenados, container) {
//   container.innerHTML = '';
//   paisesUnicosOrdenados.forEach(team => {
//   const option = document.createElement('option');
//   option.value = team;
//   option.textContent = team;
//   menuPaises.appendChild(option);
// });

/*menuPaises.addEventListener('change', function() {
  const paisSeleccionado = menuPaises.value;
  if (paisSeleccionado) {
    const nombresUnicosFiltrados = filtroPais(paisSeleccionado, athletes.athletes);
    renderizarPorPaises(nombresUnicosFiltrados, container);
  } else {
    container.innerHTML = '';
    alert("Seleccione un país para filtrar");
  }
});*/



// Despliega nombres por pais
// menuPaises.addEventListener('change', function() {
//   const paisSeleccionado = menuPaises.value;
//   if (paisSeleccionado) {
//     const paisesFiltrados = filtroPais(paisSeleccionado, athletes.athletes);

// Obtener nombres únicos y ordenar alfabéticamente
// const container = [...new Set(paisesFiltrados.map(athlete => athlete.name))].sort();
    
// container.innerHTML = '';
// paginacion.innerHTML = '';

// paisesUnicosOrdenados.forEach(nombre => {
//   const nombreInfo = document.createElement("div");
//   nombreInfo.classList.add("cardAtleta");
//   nombreInfo.textContent = nombre;
//   container.appendChild(nombreInfo);
// });
//   } else {
//     container.innerHTML = '';
//     alert("Seleccione un país para filtrar");
//   }
// });

// Obtener valores únicos de la propiedad 'team' y agregarlos a la lista desplegable
//const paisesUnicosSet = new Set(athletes.athletes.map(athlete => athlete.team));
//const paisesUnicos = Array.from(paisesUnicosSet);

//paisesUnicos.sort(); // Ordenar alfabéticamente

// obtenerNombresUnicosFiltrados
// export function filtroPais(input, athletes) {
//   return athletes.filter(item => item.team === input);
// }





// FUNCION AGNÓSTICA PARA EIMINAR DUPLICADOS Y ORDENAR
// export function eliminarDuplicadosYOrdenar(datos, propiedadEliminar, propiedadOrdenar) {
//   const datosUnicos = [...new Set(datos.map(item => item[propiedadEliminar]))].sort();
//   return datosUnicos.map(dato => {
//     return datos.find(item => item[propiedadEliminar] === dato);
//   }).sort((a, b) => a[propiedadOrdenar].localeCompare(b[propiedadOrdenar]));
// }