// import moment from "moment";

import moment from "moment";
import { v4 as uuid } from "uuid";

// class Student {
//   public name: string;
//   readonly lang: string;
//   public score: number;
//   // protected age: number;

//   constructor(name: string, score: number, lang: string = "TS") {
//     this.name = name;
//     this.score = score;
//     this.lang = lang;
//   }
// }

// let student = new Student("Samson", 50, "Java");
// console.log(student);

// console.log(student.score);
// moment();

class Attendance {
  public id: string;
  public name: string;
  public gender: string;
  private time: string;

  constructor(
    name: string,
    gender: string,
    id: string = uuid(),
    time: string = moment().add(1, "day").format("llll")
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.time = time;
  }

  set UpdateTime(x: string) {
    this.time = x;
  }

  getName(x: number = 0) {
    return `${this.name.charAt(x)}`;
  }

  getTime() {
    return `${this.time.split(",")[0]}`;
  }
}
const attendance = new Attendance("David", "Male");
// attendance.updateTime = "Wed, Sep 16, 2024 2:50PM";
console.log(attendance.getName(2));
console.log(attendance.getTime());
// console.clear();
console.log(attendance);
