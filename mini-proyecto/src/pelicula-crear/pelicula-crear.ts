import { Movie } from "./pelicula-crear.model";
import { crearPelicula } from "./pelicula-crear.api";

const obtenerValorCampo = (campo: string): string => {
  const elementoCampo = document.querySelector(`#${campo}`);
  if (
    (elementoCampo && elementoCampo instanceof HTMLInputElement) ||
    elementoCampo instanceof HTMLTextAreaElement
  ) {
    return elementoCampo.value;
  } else {
    throw new Error(`No se ha encontrado el campo ${campo}`);
  }
};

const creaPelicula = async (evento: Event): Promise<void> => {
  evento.preventDefault();

  const pelicula: Movie = {
    title: obtenerValorCampo("title"),
    director: obtenerValorCampo("director"),
    year: Number(obtenerValorCampo("year")),
    description: obtenerValorCampo("description"),
    cover_url: obtenerValorCampo("cover_url"),
  };
  try {
    await crearPelicula(pelicula);
    window.location.href = "../pelicula-listado/index.html";
    alert("Pelicula creada satisfactoriamente");
  } catch (error) {
    alert(error);
  }
  window.location.href = "../pelicula-listado/index.html";
};

const iniciarFormulario = () => {
  const formulario = document.querySelector("#formulario");

  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", creaPelicula);
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
};

document.addEventListener("DOMContentLoaded", iniciarFormulario);
