function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

let student1 = new Student("Иван", "мужской", 20);
let student2 = new Student("Алена", "женский", 19);
let student3 = new Student("Петр", "мужской", 19);
let student4 = new Student("Наталья", "женский", 20);
let student5 = new Student("Татьяна", "женский", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [mark];
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(mark);
    }
}

Student.prototype.addMarks = function (...mark) {
  if(this.marks === undefined){ 
    // добавить первую оценку 
    this.marks = [...mark];
    } else {
      // добавить вторую и последующие оценки в массив
      this.marks.push(...mark);
    }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  for(let i of this.marks){
    sum += i;
  }

  return (parseFloat(sum) / this.marks.length);
} 

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}