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

export function ordenar (atletas) {
  return atletas.sort((a,b) => a.name.localeCompare(b.name));
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

// Obtener valores únicos de la propiedad 'team' y agregarlos a la lista desplegable
const paisesUnicosSet = new Set(athletes.athletes.map(athlete => athlete.team));
const paisesUnicos = Array.from(paisesUnicosSet);

paisesUnicos.sort(); // Ordenar alfabéticamente

paisesUnicos.forEach(team => {
  const option = document.createElement('option');
  option.value = team;
  option.textContent = team;
  menuPaises.appendChild(option);
});

// Despliega nombres por pais
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
/*
export function extraerPais(list){
  return list.sort(function (a, b) {
    if (a.team > b.team) {
      return 1;
    }
    if (a.team < b.team) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}
*/
