import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Reglas básicas recomendadas
      "no-unused-vars": "error", // Detecta variables no usadas
      "no-undef": "error", // Detecta variables o constantes no definidas
      "no-extra-parens": "error", // Detecta paréntesis extra innecesarios
      "semi": ["error", "always"], // Requiere punto y coma al final de cada línea
      "quotes": ["error", "double"], // Requiere comillas dobles para cadenas de texto
      "eqeqeq": "error", // Obliga a usar comparación estricta (=== en lugar de ==)
      "indent": ["error", 2], // Obliga a una indentación con 2 espacios
    },
  },
]);