import { eliminarRepetidos, ordenar, filtroPais, obtenerPaisesUnicosFiltrados, conteoMedallas } from '../src/data.js';


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