// Altere apenas o código abaixo desta linha
class Thermostat {
  constructor(Fahrenheit) {
    this._temperature = Fahrenheit;
  }
  // getter
  get temperature() {
    return 5/9 * (this._temperature - 32);
  }
  // setter
  set temperature(celsius) {
    this._temperature = celsius * 9.0 / 5 + 32;
  }
}
// Altere apenas o código acima desta linha

const thermos = new Thermostat(76); // Definição na escala Fahrenheit
let temp = thermos.temperature; // 24,44 em Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 em Celsius