const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Para o argumento count deve retornar o número inteiro 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Para o argumento names deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Para o argumento averageAge deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('Para o argumento location deve retornar a string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('Para o argumento popularity deve retornar um número igual ou maior a 5', () => {
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  it('Para o argumento availability deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(expect.not.arrayContaining(['Monday']));
  });

  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Não passando uma string a função deve retornar "Parâmetro inválido, é necessário uma string"', () => {
    const invalidParameter = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants([])).toBe(invalidParameter);
    expect(handlerElephants({})).toBe(invalidParameter);
    expect(handlerElephants(0)).toBe(invalidParameter);
  });

  it('Passando uma string inválida como parâmetro deve retornar null', () => {
    expect(handlerElephants('invalidParameter')).toBeNull();
  });
});
