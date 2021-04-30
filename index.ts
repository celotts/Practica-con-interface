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
  metodo2(): number;
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
    return "Año de nacmiento";
  }
}

class MiClase implements IMiInterface1, IMiInterface2{
  metodo1() {
    return "Es una prueba 1"
  }
  metodo2() {
    return  1972
  }
}

interface IRobot {
  nombre: string;
  apellido: string;
  edad?: number;
}

let yo: ISaludar = new SaludarEspaniol();
let yo2: ISaludar = new SaludarIngles();

let nom: IMiInterface1 = new MiClase();
let edad: IMiInterface2 = new MiClase();


console.log(yo.decirHola());
console.log(yo2.decirHola());

console.log(nom.metodo1());
console.log(edad.metodo2());

function diHola(informacion: IRobot){
  return "Hola "+informacion.nombre+' '+informacion.apellido+" Tú edad es: "+informacion.edad;

}

let robot: IRobot = {nombre: "Carlos", apellido:" L.",edad:48}

console.log(diHola(robot))
