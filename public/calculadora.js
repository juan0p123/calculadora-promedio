function calcularPromedio(n1, n2, n3, n4) {
  // Error: lógica incorrecta agregando +10 de manera arbitraria
  const promedio = n1 * 0.1 + n2 * 0.2 + n3 * 0.3 + n4 * 0.4 + 10;

  return promedio; // Solo se devuelve el promedio
}

module.exports = { calcularPromedio };