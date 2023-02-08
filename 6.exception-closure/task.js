//Задача №1. Форматтер чисел
function parseCount(args) {
  let number = parseInt(args);
  if(Number.isNaN(number)) {
    throw new Error("Невалидное значение");
  }
  return number;
}

function validateCount(args) {
  try{
   let rezult = parseCount(args);
   return rezult;
  }catch(error){
    return error;
  }
}

//Задача №2. Треугольник

class Triangle {
    constructor(ab, bc, ca){
        this.said1 = ab;
        this.said2 = bc;
        this.said3 = ca;

        if(this.said1 + this.said2 < this.said3 || 
            this.said1 + this.said3 < this.said2 || this.said2 + this.said3 < this.said1){
                throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.said1 + this.said2 + this.said3;
    }

    getArea() {
        let p = 0.5 * (this.said1 + this.said2 + this.said3);
        return parseFloat((Math.sqrt(p * (p - this.said1) * (p - this.said2) * (p - this.said3))).toFixed(3));
    }
}

function getTriangle(ab, bc, ca) {
    try{
      return new Triangle(ab, bc, ca);
    }catch(error){
      return new Triangle2();
    }
}

class Triangle2 {
    constructor(){}

    getPerimeter() {
        return "Ошибка! Треугольник не существует";
    }

    getArea() {
        return "Ошибка! Треугольник не существует";
    }
}