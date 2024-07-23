let puntuacion: number = 0;
const numeroParaAcertar: number = 7.5;

interface Carta {
  src: string;
  alt: string;
  title: string;
  valorNominal: number;
  valorJuego: number;
}

const barajaSieteMediaCopas: Carta[] = [
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
    alt: "As de copas",
    title: "As de copas",
    valorNominal: 1,
    valorJuego: 1,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
    alt: "Dos de copas",
    title: "Dos de copas",
    valorNominal: 2,
    valorJuego: 2,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
    alt: "Tres de copas",
    title: "Tres de copas",
    valorNominal: 3,
    valorJuego: 3,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
    alt: "Cuatro de copas",
    title: "Cuatro de copas",
    valorNominal: 4,
    valorJuego: 4,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
    alt: "Cinco de copas",
    title: "Cinco de copas",
    valorNominal: 5,
    valorJuego: 5,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
    alt: "Seis de copas",
    title: "Seis de copas",
    valorNominal: 6,
    valorJuego: 6,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
    alt: "Siete de copas",
    title: "Siete de copas",
    valorNominal: 7,
    valorJuego: 7,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
    alt: "Sota de copas",
    title: "Sota de copas",
    valorNominal: 10,
    valorJuego: 0.5,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
    alt: "Caballo de copas",
    title: "Caballo de copas",
    valorNominal: 11,
    valorJuego: 0.5,
  },
  {
    src: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg",
    alt: "Rey de copas",
    title: "Rey de copas",
    valorNominal: 12,
    valorJuego: 0.5,
  },
];

let arrayValorNominal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function barajar(arrayValorNominal: number[]) {
  for (let i = arrayValorNominal.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayValorNominal[i], arrayValorNominal[j]] = [
      arrayValorNominal[j],
      arrayValorNominal[i],
    ];
  }
  return arrayValorNominal;
}
function perfect(arrayValorNominal: number[]) {
  let [n, i] = [0, 0];
  n = barajaSieteMediaCopas[arrayValorNominal[i] - 1].valorJuego;
  i++;
  while (n <= 7.5) {
    n = n + barajaSieteMediaCopas[arrayValorNominal[i] - 1].valorJuego;
    i++;
  }
  let p = i - 1;
  [n, i] = [0, 0];
  while (i < p) {
    n = n + barajaSieteMediaCopas[arrayValorNominal[i] - 1].valorJuego;
    i++;
  }
  return [n, p];
}

const muestraPuntuacion = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `${puntuacion}`;
  } else {
    console.error(
      "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
    );
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const cartaBA01: HTMLImageElement | null = document.getElementById(
  "cartaBA01"
) as HTMLImageElement;
const cartaBA02: HTMLImageElement | null = document.getElementById(
  "cartaBA02"
) as HTMLImageElement;
const cartaBA03: HTMLImageElement | null = document.getElementById(
  "cartaBA03"
) as HTMLImageElement;
const cartaBA04: HTMLImageElement | null = document.getElementById(
  "cartaBA04"
) as HTMLImageElement;
const cartaBA05: HTMLImageElement | null = document.getElementById(
  "cartaBA05"
) as HTMLImageElement;
const cartaBA06: HTMLImageElement | null = document.getElementById(
  "cartaBA06"
) as HTMLImageElement;
const cartaBA07: HTMLImageElement | null = document.getElementById(
  "cartaBA07"
) as HTMLImageElement;
const cartaBA08: HTMLImageElement | null = document.getElementById(
  "cartaBA08"
) as HTMLImageElement;
const cartaBA09: HTMLImageElement | null = document.getElementById(
  "cartaBA09"
) as HTMLImageElement;

const cartaInicio: HTMLImageElement | null = document.getElementById(
  "cartaInicio"
) as HTMLImageElement;

const cartaJuego01: HTMLImageElement | null = document.getElementById(
  "cartaJuego01"
) as HTMLImageElement;
const cartaJuego02: HTMLImageElement | null = document.getElementById(
  "cartaJuego02"
) as HTMLImageElement;
const cartaJuego03: HTMLImageElement | null = document.getElementById(
  "cartaJuego03"
) as HTMLImageElement;
const cartaJuego04: HTMLImageElement | null = document.getElementById(
  "cartaJuego04"
) as HTMLImageElement;
const cartaJuego05: HTMLImageElement | null = document.getElementById(
  "cartaJuego05"
) as HTMLImageElement;
const cartaJuego06: HTMLImageElement | null = document.getElementById(
  "cartaJuego06"
) as HTMLImageElement;
const cartaJuego07: HTMLImageElement | null = document.getElementById(
  "cartaJuego07"
) as HTMLImageElement;
const cartaJuego08: HTMLImageElement | null = document.getElementById(
  "cartaJuego08"
) as HTMLImageElement;
const cartaJuego09: HTMLImageElement | null = document.getElementById(
  "cartaJuego09"
) as HTMLImageElement;

const botonInicio: HTMLButtonElement | null = document.getElementById(
  "inicioJuego"
) as HTMLButtonElement;
const botonCarta: HTMLButtonElement | null = document.getElementById(
  "pedirCarta"
) as HTMLButtonElement;
const botonPlantarse: HTMLButtonElement | null = document.getElementById(
  "plantarse"
) as HTMLButtonElement;
const botonComprobar: HTMLButtonElement | null = document.getElementById(
  "comprobar"
) as HTMLButtonElement;
const botonReset: HTMLButtonElement | null = document.getElementById(
  "reset"
) as HTMLButtonElement;

const handleClickInicio = () => {
  if (cartaInicio !== null) {
    botonCarta.disabled = false;
    botonPlantarse.disabled = false;
    botonReset.disabled = false;
    barajar(arrayValorNominal);
    perfect(arrayValorNominal);
    cartaInicio.src = barajaSieteMediaCopas[arrayValorNominal[0] - 1].src;
    puntuacion =
      puntuacion + barajaSieteMediaCopas[arrayValorNominal[0] - 1].valorJuego;
    muestraPuntuacion();
    botonInicio.disabled = true;
  }
};
let cartasEnJuego: number = 0;
let cartasEnBaraja: number = 9;

const muestraCarta = (cartasEnJuego: number, cartasEnBaraja: number): void => {
  let nombreCarta = "cartaJuego";
  nombreCarta = nombreCarta + cartasEnJuego.toString().padStart(2, "0");
  let cartaJuego: HTMLImageElement | null = document.getElementById(
    nombreCarta
  ) as HTMLImageElement;
  if (cartaJuego !== null) {
    cartaJuego.src =
      barajaSieteMediaCopas[arrayValorNominal[cartasEnJuego] - 1].src;
    puntuacion =
      puntuacion +
      barajaSieteMediaCopas[arrayValorNominal[cartasEnJuego] - 1].valorJuego;
  }
  let nombreCartaBA = "cartaBA";
  nombreCartaBA =
    nombreCartaBA + (cartasEnBaraja + 1).toString().padStart(2, "0");
  let cartaBA: HTMLImageElement | null = document.getElementById(
    nombreCartaBA
  ) as HTMLImageElement;
  if (cartaBA !== null) {
    cartaBA.src = "";
  }
};

const dameCarta = () => {
  cartasEnJuego++;
  cartasEnBaraja--;
  muestraCarta(cartasEnJuego, cartasEnBaraja);
  muestraPuntuacion();
  comprobarPuntuacion(puntuacion);
  if (puntuacion >= 7.5) {
    const estado: Estado = comprobarPuntuacion(puntuacion);
    muestraMensajeComprobacion(estado);
    botonPlantarse.disabled = true;
    botonCarta.disabled = true;
  }
};

const handleClickReset = () => {
  cartasEnJuego = 0;
  cartasEnBaraja = 9;
  cartaInicio.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA01.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA02.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA03.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA04.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA05.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA06.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA07.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA08.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaBA09.src =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  cartaJuego01.src = "";
  cartaJuego02.src = "";
  cartaJuego03.src = "";
  cartaJuego04.src = "";
  cartaJuego05.src = "";
  cartaJuego06.src = "";
  cartaJuego07.src = "";
  cartaJuego08.src = "";
  cartaJuego09.src = "";
  puntuacion = 0;
  muestraPuntuacion();
  botonInicio.disabled = false;
  botonCarta.disabled = true;
  botonPlantarse.disabled = true;
  botonReset.disabled = true;
  const estado: Estado = comprobarPuntuacion(puntuacion);
  muestraMensajeComprobacion(estado);
};

type Estado =
  | "MENOR_4"
  | "4_A_6"
  | "6_A_7"
  | "6_A_7.Ok"
  | "7.5"
  | "GAME_OVER"
  | "OK"
  | "NO_OK"
  | "";

const comprobarPuntuacion = (puntuacion: number): Estado => {
  if (puntuacion > 0 && puntuacion < 4) {
    return "MENOR_4";
  }
  if (puntuacion >= 4 && puntuacion <= 6) {
    return "4_A_6";
  }
  if (puntuacion > 6 && puntuacion <= 7) {
    return "6_A_7";
  }
  if (puntuacion == 7.5) {
    return "7.5";
  }
  if (puntuacion > 7.5) {
    return "GAME_OVER";
  }
  return "";
};
const comprobarResultado = (): Estado => {
  if (cartasEnJuego + 1 === perfect(arrayValorNominal)[1]) {
    return "OK";
  }
  return "NO_OK";
};

const muestraMensajeComprobacion = (estado: Estado) => {
  let mensaje: string = "";
  switch (estado) {
    case "MENOR_4":
      mensaje = "Has sido demasiado conservador.";
      break;
    case "4_A_6":
      mensaje = "Te ha entrado el canguelo eh?";
      break;
    case "6_A_7":
      mensaje = "Casi casi...";
      break;
    case "7.5":
      mensaje = "¡Lo has clavado! ¡Enhorabuena!";
      break;
    case "GAME_OVER":
      mensaje = "Has perdido.";
      break;
    case "OK":
      mensaje = "La mejor opción era plantarse.";
      break;
    case "NO_OK":
      mensaje = `La mejor opción era pedir ${
        perfect(arrayValorNominal)[1] - cartasEnJuego - 1
      } carta${
        perfect(arrayValorNominal)[1] - cartasEnJuego - 1 > 1 ? "s" : ""
      } más`;
      break;
    case "":
      mensaje = "";
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }
  const elementoMensaje = document.getElementById("mensaje");
  if (elementoMensaje) {
    elementoMensaje.innerHTML = mensaje;
  } else {
    console.error(
      "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
    );
  }
};

const handleClickPlantarse = () => {
  const estado: Estado = comprobarPuntuacion(puntuacion);
  muestraMensajeComprobacion(estado);
  botonPlantarse.disabled = true;
  botonCarta.disabled = true;
  if (puntuacion > 0 && puntuacion < 7.5) {
    botonComprobar.disabled = false;
  }
};

const handleClickComprobar = () => {
  const estado: Estado = comprobarResultado();
  muestraMensajeComprobacion(estado);
  if (estado === "NO_OK" && puntuacion < 7.5) {
    botonCarta.disabled = false;
  }
  botonComprobar.disabled = true;
};

botonInicio?.addEventListener("click", handleClickInicio);
botonCarta?.addEventListener("click", dameCarta);
botonPlantarse?.addEventListener("click", handleClickPlantarse);
botonComprobar?.addEventListener("click", handleClickComprobar);
botonReset?.addEventListener("click", handleClickReset);
