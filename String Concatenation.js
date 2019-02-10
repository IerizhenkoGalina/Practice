


/*Создайте переменную str и присвойте ей значение 'Hello World!'. Выведите значение этой переменной на экран.*/
const str = 'Hello World!';
console.log(str);
//Prints: Hello World!

/*Создайте переменные strOne='Hello, ' и strTwo='World!'. 
С помощью этих переменных и операции сложения строк выведите на экран фразу 'Hello, World!'.*/
const strOne='Hello, ';
const strTwo="World!";
console.log(strOne +  strTwo);
//Prints: Hello, World!

/*Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, Имя!'*/
const name = "Galina";
console.log(`Hello, ${name}!`);
//second way
console.log('Hello, '+ name+'!');
//Prints: Hello, Galina!

/*Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'I am age years!'*/
const age = 33;
console.log(`I am ${age} years!`);
console.log('I am '+ age +' years!');
//Prints: I am 33 years!

/*Inside a console.log() concatenate the two or three strings*/

console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
//Prints: One, two, three!

console.log("Hello" + " "+ "World"); 
//Prints: Hello World

console.log("Hello my dear Friend" + " "+ "World"); 
//Prints: Hello my dear Friend World
//second way
console.log("Hello my dear Friend " + "World");
//Prints: Hello my dear Friend World

console.log('hi' + 'ya');
// Prints 'hiya'

console.log('wo' + 'ah'); 
// Prints 'woah'

console.log('I love to ' + 'code.');
// Prints 'I love to code.'

console.log('front ' + 'space'); 
// Prints 'front space'

console.log('back' + ' space'); 
// Prints 'back space'

console.log('no' + 'space'); 
// Prints 'nospace'

console.log('middle' + ' ' + 'space'); 
// Prints 'middle space'

/*Properties
Every string instance has a property called length that stores the number of characters in that string.
You can retrieve property information by appending the string with a period and the property name:
The . is another operator! We call it the dot operator.
*/
console.log('Hello'.length);
// Prints 5

/*Use the .length property to log the number of 
characters in the following string to the 
console: 'Teaching the world how to code'
*/

console.log('Teaching the world how to code'.length);
//Prints: 30

/*Methods
(.toUpperCase(); .startsWith(); .endsWith(); .trim()
*/
/*Use the methods to log the string 'I usually like to learn English every day' 
to the console .
*/

console.log('I usually like to learn English every day'.toUpperCase());
//all capital letters
//Prints: I USUALLY LIKE TO LEARN ENGLISH EVERY DAY

console.log('I usually like to learn English every day'.startsWith('I'));
//the method returns the boolean true because the first letter is 'I' in the string
//Prints: true

console.log('I usually like to learn English every day'.startsWith('B'));
//the method returns the boolean false because the first letter is 'I' in the string
//Prints: false

console.log('I usually like to learn English every day'.endsWith('y'));
//the method returns the boolean true because the end letter  is 'y' in the string
//Prints: true

console.log('I usually like to learn English every day'.endsWith('a'));
//the method returns the boolean false because the end letter  is 'y' in the string
//Prints: false

console.log('        I usually like to learn English every day'.trim());
//trims whitespace from the beginning and end of the string.
//Prints: I usually like to learn English every day

//Обращение к символам строки
const str3 = 'abcde';
console.log(str3[0]);
//Prints a
console.log(str3[2]);
//Prints c
console.log(str3[4]);
//Prints e
