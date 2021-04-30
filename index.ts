// Import stylesheets
import "./style.css";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
interface ICalificaciones {
  mostrarCalificaciones(): void;
}

interface ISaludar {
  decirHola(): string;
}

interface IMiInterface1 {
  metodo1(): string;
}

interface IMiInterface2 {
  metodo1(): string;
}

let nota: ICalificaciones = {
  mostrarCalificaciones: () => {
    console.log("65 Puntos");
  }
};

nota.mostrarCalificaciones();

class SaludarEspaniol implements ISaludar {
  decirHola() {
    return "Hola";
  }
}

class SaludarIngles implements ISaludar {
  decirHola() {
    return "Hello!!!";
  }
}

let yo: ISaludar = new SaludarEspaniol();
let yo2: ISaludar = new SaludarIngles();
console.log(yo.decirHola());
console.log(yo2.decirHola());
