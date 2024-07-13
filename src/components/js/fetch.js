/**
 * Aqui crearemos las peticiones fetch
 * para solicitar los animales por tipo
 * y solicitar la info de cada animal
 */

// Get animales por tipo
export const getAnimalTipo = async () => {
  const url = `https://huachitos.cl/api/animales/tipo/perro`;
  try {
    const response = await fetch(url, {
      headers: { "Content-type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(
        `msg_error: ${response.statusText}, code: ${response.status}`
      );
    }
    const data = response.json();
    localStorage.setItem("animals", JSON.stringify(data));
  } catch (error) {
    return error;
  }
};
