/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");
const { calcularPromedio } = require("../public/calculadora");

// Cargamos el archivo HTML como texto
const html = fs.readFileSync(path.resolve(__dirname, "../public/index.html"), "utf8");

describe("Pruebas de la calculadora de promedio", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html; // Insertamos el contenido HTML en el DOM simulado

    // Simulamos el script del botón
    document.getElementById("calcular").addEventListener("click", () => {
      const n1 = parseFloat(document.getElementById("nota1").value) || 0;
      const n2 = parseFloat(document.getElementById("nota2").value) || 0;
      const n3 = parseFloat(document.getElementById("nota3").value) || 0;
      const n4 = parseFloat(document.getElementById("nota4").value) || 0;

      const promedio = calcularPromedio(n1, n2, n3, n4);
      const estado = promedio >= 51 ? "Aprobado" : "Reprobado";

      document.getElementById("resultado").textContent = `${promedio.toFixed(2)} (${estado})`;
    });
  });

  test("Correcto cálculo del promedio ponderado con valores válidos", () => {
    document.getElementById("nota1").value = 50;
    document.getElementById("nota2").value = 60;
    document.getElementById("nota3").value = 70;
    document.getElementById("nota4").value = 80;

    const button = document.getElementById("calcular");
    button.click();

    const resultado = document.getElementById("resultado").textContent;
    expect(resultado).toBe("70.00 (Aprobado)");
  });

  test("Muestra 0 cuando no se llenan los campos", () => {
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
    document.getElementById("nota4").value = "";

    const button = document.getElementById("calcular");
    button.click();

    const resultado = document.getElementById("resultado").textContent;
    expect(resultado).toBe("0.00 (Reprobado)");
  });

  test("Valida la lógica de calcularPromedio directamente", () => {
    expect(calcularPromedio(50, 60, 70, 80)).toBe(70);
    expect(calcularPromedio(0, 0, 0, 0)).toBe(0);
  });
});