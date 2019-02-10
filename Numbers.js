//Numbers
const num1 = '12345';
console.log(num1[0]*num1[1]*num1[2]*num1[3]*num1[4]);
//Prints 120

//Вычисление количества секунд в часе, в сутках, в месяце(30 дн.) 
console.log(60*60);//seconds in a hour
//Prints 3600
console.log(60*60*24);// seconds in a day
//Prints 86400
console.log(60*60*24*30);// seconds in a month
//Prints 2592000

//Создайте три переменные, текущее время в формате- час:минута:секунда
const hours = '3';
const minutes = '06';
const seconds = '26';
console.log(hours + ':' + minutes + ':' + seconds);
//Prints 3:06:26
console.log(`${hours}:${minutes}:${seconds}`);
//Prints 3:06:26

//Работа с присваиванием и декрементами 
let nums = 47;
nums+=7;
console.log(nums);
//Prints 54

let numb = 47;
numb-=18;
console.log(numb);
//Prints 29

let numbe = 47;
numbe*=10;
console.log(numbe);
//Prints 470

let number = 47;
number/=15;
console.log(number);
//Prints 3.1333333333333333
