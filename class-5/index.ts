let number: number = 10;
let Name: string = "asad";
let isAdmin: boolean = true;
let bigdata: bigint = 12255675672345672355678n;

let und: undefined;
let nothing: null = null;
const sym:symbol = Symbol("asad")
const arr:number[] = [1,2,3]
const obj:{name:string} = {name:"asad"}

enum Role{
    admin,
    teacher,
    student
}

let role:Role = Role.admin

let asad:any
let epti:unknown
let gender:"male"|"female" = "male"

function sum(num1:number,num2:number):number{
    return num1+num2;
}
function print():void{
    console.log("asad");
}
function error():never{
    throw new Error
}

type User = {
    name:string,
    roll?:number
    subject?:string
}
const student:User = {
    name:"asad",
    roll:84
}
const teacher:User = {
    name:"asad",
    subject:"math"
}

