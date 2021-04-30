enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}
interface IGeometia {
  lados: number;
  pintar(): void
}

interface ITriangulo extends IGeometia {
  base: number;
  altura: number;
}

interface ICuadrado extends IGeometia{
  lado: number;
}

function procesar(g: IGeometia){
  if(g.lados === 4){
    let cuadrado = g as ICuadrado
    cuadrado.lado
  }
  if(g.lados === 3) {
    let triangulo = g as ITriangulo
    triangulo.altura
  }
}

interface Respuesta<T>{
  type: string,
  success: boolean,
  message: T,
}

let payLoad: Respuesta<string> = {
  type: 'post',
  success: false,
  message: 'abcde'
}

let payload: Respuesta<boolean> = {
  type:'error',
  success: false,
  message: true
}