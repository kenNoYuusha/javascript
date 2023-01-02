enum Color {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}
interface Rectangulo {
  ancho: number;
  alto: number;
  color: Color;
}

let rectangulo: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Azul
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rectangulo);


rectangulo.toString = function ():string {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rectangulo.toString())
console.log(rectangulo)