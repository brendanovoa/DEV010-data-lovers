
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
