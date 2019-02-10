// Arrays
const arr = ['Hello, ', 'World', '!'];
console.log(arr[0]+arr[1]+arr[2]);
//Prints Hello, World!
let string = arr[0]+arr[1]+arr[2];
console.log(string);
//Prints Hello, World!

let strings=['Hello, ', 'World', '!'];
strings[0]='Buy';
console.log(strings);
//Prints Buy, World!

/*Asociation Array
*/
const obj={'Kolya':'1000','Vasya':'2000','Petya':'3000'};
console.log(obj['Kolya']);
//Prints 1000
console.log(obj['Petya']);
//Prints 3000

//creating array a first way
const array1=[1,2,3,4,5];
console.log(array1);
//Prints [ 1, 2, 3, 4, 5 ]
//creating array a second way
const array2=[];
array2[0]=1;
array2[1]=2;
array2[2]=3;
array2[3]=4;
array2[4]=5;
console.log(array2);
//Prints [ 1, 2, 3, 4, 5 ]

// Многомерные массивы
const array3={
	'ru':['blue','red','green'],
	'en':['red','green','blue']
  };
console.log(array3['ru'][0]);
//Prints blue
console.log(array3['en'][2]);
//Prints blue

const arrayNum = ['a','b','c'];
console.log(arrayNum);
//Prints  [ 'a', 'b', 'c' ]
console.log(arrayNum[0]);
//Prints a
console.log(arrayNum[1]);
//Prints b
console.log(arrayNum[2]);
//Prints c 
const arrayString=['a','b','c','d'];
console.log(arrayString[0]+ '+' +arrayString[1]+ ','+ arrayString[2]+'+'+arrayString[3]);
//Prints a+b,c+d

const arrayPlus=[2,5,3,9];
let result = arrayPlus[0] * arrayPlus[1] + arrayPlus[2] * arrayPlus[3];
console.log(result);
//Prints 37

const obj = {'a':'1', 'b':'2','c':'3'};
console.log(obj['c']);
//Prints 3
console.log(obj.c);// second way
//Prints 3
const salary ={'Sveta':'30000', 'Zhenya':'20000', 'Dima':'50000'};
console.log(salary.Sveta);
//Prints 30000
console.log(salary['Dima']);
//Prints 50000
const objWeek={
  'first':'Monday',
  'second':'Tuesday',
  'third':'Wednesday',
  'fourth':'Thursday',
  'fifth':'Friday',
  'sixth':'Saturday',
  'seventh':'Sunday'
};
console.log(objWeek['third']);
//Prints Wednesday
console.log(objWeek.third);// second way
//Prints Wednesday
let day=objWeek['sixth'];
console.log(day);
//Prints Saturday
let days='sixth';
console.log(objWeek[days]);
//Prints Saturday

const numbersDays=[[1,2,3],[4,5,6],[7,8,9]];
console.log(numbersDays[1][0]);
//Prints 4

const objWords={
	js:['jQuery','Fngular'],
	php:'hello',
	css:'world'};
console.log(objWords.js[0]);
//Prints jQuery

const objWeekDays={
  'ru':['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
	'en':['Mn','Tu','Wd','Th','Fr','St','Sn']
};
console.log(objWeekDays['ru'][0]);
//Prints Monday
console.log(objWeekDays.en[0]);
//Prints Mn
let language='ru';
let daysWeeks = '4';
console.log(objWeekDays[language][daysWeeks]);
//Prints Friday
