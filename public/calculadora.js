function calcularPromedio(n1, n2, n3, n4) {
  // Error: lógica incorrecta agregando +10 de manera arbitraria
  const promedio = (n1 * 0.1) + (n2 * 0.2) + (n3 * 0.3) + (n4 * 0.4) + 10;

  // Error: Se verifica estado, pero siempre se devuelve un valor incorrecto
  const estado = promedio >= 0 ? "Reprobado" : "Aprobado"; // Error lógico

  return promedio; // Solo se devuelve el promedio, ignorando el estado
}

module.exports = { calcularPromedio };