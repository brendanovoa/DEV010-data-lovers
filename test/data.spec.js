import { eliminarRepetidos, ordenar, filtroPais, obtenerPaisesUnicosFiltrados, conteoMedallas, conteoMujeres, ordenarPaisesMujeres } from '../src/data.js';


describe('eliminarRepetidos', () => {
  it('is a function', () => {
    expect(typeof eliminarRepetidos).toBe('function');
  });

  it('debería eliminar nombres repetidos', () => {
    const athletes = [{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },];
    expect(eliminarRepetidos(athletes)).toEqual([{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    }]);
  });
});


describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('debería ordenar los nombres alfabeticamente', () => {
    const athletes = [{
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },];
    expect(ordenar(athletes)).toEqual([{
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },]);
  });
});


describe('filtroPais', () => {
  it('is a function', () => {
    expect(typeof filtroPais).toBe('function');
  });

  it('debería filtrar atletas por país', () => {
    const input = "Azerbaijan"
    const athletes = [ {
      "name": "Giovanni Abagnale",
      "gender": "M",
      "height": "198",
      "weight": "90",
      "sport": "Rowing",
      "team": "Italy",
      "noc": "ITA",
      "age": 21,
      "event": "Rowing Men's Coxless Pairs",
      "medal": "Bronze"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },]
    expect(filtroPais(input, athletes)).toEqual([{
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Azerbaijan",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    }]);
  });
});


describe('obtenerPaisesUnicosFiltrados', () => {
  it('is a function', () => {
    expect(typeof obtenerPaisesUnicosFiltrados).toBe('function');
  });

  it('debería obtener nombres de paises sin repetir y ordenados alfabeticamente', () => {
    const paisSeleccionado = "France"
    const athletes = [{
      "name": "Luc Abalo",
      "gender": "M",
      "height": "182",
      "weight": "86",
      "sport": "Handball",
      "team": "France",
      "noc": "FRA",
      "age": 31,
      "event": "Handball Men's Handball",
      "medal": "Silver"
    },
    {
      "name": "Saeid Morad Abdevali",
      "gender": "M",
      "height": "170",
      "weight": "80",
      "sport": "Wrestling",
      "team": "Iran",
      "noc": "IRI",
      "age": 26,
      "event": "Wrestling Men's Middleweight, Greco-Roman",
      "medal": "Bronze"
    },]
    expect(obtenerPaisesUnicosFiltrados(paisSeleccionado, athletes)).toEqual([
      "Luc Abalo"
    ]);
  });
});

describe('conteoMedallas', () => {
  it('is a function', () => {
    expect(typeof conteoMedallas).toBe('function');
  });

  it('debería contar las medallas por tipo y por pais', () => {
    const athletes = [{
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Team All-Around",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Horse Vault",
      "medal": "Silver"
    },
    {
      "name": "Denis Mikhaylovich Ablyazin",
      "gender": "M",
      "height": "161",
      "weight": "62",
      "sport": "Gymnastics",
      "team": "Russia",
      "noc": "RUS",
      "age": 24,
      "event": "Gymnastics Men's Rings",
      "medal": "Bronze"
    },
    {
      "name": "Artur Kamilevich Akhmatkhuzin",
      "gender": "M",
      "height": "187",
      "weight": "79",
      "sport": "Fencing",
      "team": "Russia",
      "noc": "RUS",
      "age": 28,
      "event": "Fencing Men's Foil, Team",
      "medal": "Gold"
    },];
    const medallasPorPais = conteoMedallas(athletes);
    expect(medallasPorPais).toEqual({
      Russia: { Gold: 1, Silver: 2, Bronze: 1 },
    });
  });
});

describe('conteoMujeres', () => {
  it('is a function', () => {
    expect(typeof conteoMujeres).toBe('function');
  });

  it('debería contar las mujeres por pais', () => {
    const athletes = [{
      "name": "Chantal Achterberg",
      "gender": "F",
      "height": "172",
      "weight": "72",
      "sport": "Rowing",
      "team": "Netherlands",
      "noc": "NED",
      "age": 31,
      "event": "Rowing Women's Quadruple Sculls",
      "medal": "Silver"
    },
    {
      "name": "Nicola Virginia Adams",
      "gender": "F",
      "height": "164",
      "weight": "51",
      "sport": "Boxing",
      "team": "Spain",
      "noc": "GBR",
      "age": 33,
      "event": "Boxing Women's Flyweight",
      "medal": "Gold"
    },{
      "name": "Artur Kamilevich Akhmatkhuzin",
      "gender": "M",
      "height": "187",
      "weight": "79",
      "sport": "Fencing",
      "team": "Spain",
      "noc": "RUS",
      "age": 28,
      "event": "Fencing Men's Foil, Team",
      "medal": "Gold"
    },];
    const mujeresPorPais = conteoMujeres(athletes);
    expect(mujeresPorPais).toEqual({
      Netherlands: {F: 1, M: 0},
      Spain: {F: 1, M: 1},
    });
  });
});

describe('ordenarPaisesMujeres', () => {
  it('is a function', () => {
    expect(typeof ordenarPaisesMujeres).toBe('function');
  });

  it('debería ordenar los paises por el número de mujeres', () => {
    const athletes = [{
      "name": "Chantal Achterberg",
      "gender": "F",
      "height": "172",
      "weight": "72",
      "sport": "Rowing",
      "team": "Netherlands",
      "noc": "NED",
      "age": 31,
      "event": "Rowing Women's Quadruple Sculls",
      "medal": "Silver"
    },
    {
      "name": "Nicola Virginia Adams",
      "gender": "F",
      "height": "164",
      "weight": "51",
      "sport": "Boxing",
      "team": "Spain",
      "noc": "GBR",
      "age": 33,
      "event": "Boxing Women's Flyweight",
      "medal": "Gold"
    },
    {
      "name": "Patimat Abakarova",
      "gender": "F",
      "height": "165",
      "weight": "49",
      "sport": "Taekwondo",
      "team": "Spain",
      "noc": "AZE",
      "age": 21,
      "event": "Taekwondo Women's Flyweight",
      "medal": "Bronze"
    },];
    expect(ordenarPaisesMujeres(athletes)).toEqual(
      ["0", "1", "2"]
    );
  });
});