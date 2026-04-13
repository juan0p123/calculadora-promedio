const calcularPromedio = (n1, n2, n3, n4) => {
    return (n1 * 0.1) + (n2 * 0.2) + (n3 * 0.3) + (n4 * 0.4);
};

test('Calcula correctamente el promedio ponderado', () => {
    expect(calcularPromedio(50, 60, 70, 80)).toBe(70);
});

test('Devuelve 0 si todas las notas son 0', () => {
    expect(calcularPromedio(0, 0, 0, 0)).toBe(0);
});

test('Devuelve aprobado si el promedio es mayor o igual a 51', () => {
    const promedio = calcularPromedio(51, 51, 51, 51);
    expect(promedio).toBeGreaterThanOrEqual(51);
});

test('Devuelve reprobado si el promedio es menor a 51', () => {
    const promedio = calcularPromedio(40, 40, 40, 40);
    expect(promedio).toBeLessThan(51);
});