//tasks if-else
const num = 11;
if(num==10){
  console.log(true);
} else{
  console.log(false);
};
//
const min=55;
if(min>=0 && min<=14) {
  console.log('First part');
} if(min>=15 && min<=30) {
  console.log('Second part');
} if(min>=31 && min<=45) {
  console.log('Third part');
} if(min>=46 && min<=59) {
  console.log('Fourth part');
};*/

/*var lang='en';
if(lang=='ru'){
  var arr =['Mn','Ts','Wd','Th','Fr','St','Sn'];
} if (lang =='en'){
   arr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
}
console.log(arr);*/

/*let lang = 'en';
switch (lang) {
	case 'ru':
		var arr = ['Mn','Ts','Wd','Th','Fr','St','Sn'];
	break;
	case 'en':
		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
	break;
}
console.log(arr);*/

/*const lang = 'ru';
const arr = {
	'ru':['Mn','Ts','Wd','Th','Fr','St','Sn'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arr[lang]);

let a='test';
if(a==-1){
  console.log(true);
}else{
  console.log(false);
};
let test=true;
if(test!=false){
  console.log(true);
} else{
  console.log(false);
};  *//*
 let g = 3;
if(g>0 && g<5){
  console.log(true);
} else {
  console.log(false);
};
let v=2;
if(v==0 || v==2) {
  v+7;
} else{
  v/=10;
}
console.log(v);

let r=3;
let b=5;
if(r<=1 && b>=3){
  console.log(r+b);
} else{
  console.log(r-b);
};
let ra=10;
let ba=-5;
if(ra>2 && ra  <11 || ba>=6 && ba<14){
  console.log(true);
} else{
  console.log(false);
};
let num = '4';
switch(num){
  case '1':
    result = 'Winter';
    break;
      case '2':
     result = 'Spring';
    break;
      case '3':
     result = 'Summer';
    break;
      case '4':
     result = 'Autumn';
    break;
}
console.log(result);
// decade of the month
let day = 20;
if(day>=1 && day<=10){
  console.log('The first decade of the month');
} if(day>=11 && day<=20){
  console.log('The second decade of the month');
} if(day>=21 && day<=31){
  console.log('The third decade of the month');
};
//months of season
let month = 1;
if(month>=1 && month<=2 || month===12){
  console.log('This is month of Winter');
  } if(month>=3 && month<=5){
  console.log('This is month of Spring');
  } if(month>=6 && month<=8){
  console.log('This is month of Summer');
  } if(month>=9 && month<=11){
  console.log('This is month of Autumn');
  };

var months = 6;
if (months == 12 || months <= 2) {
	var result = 'w';
}
if (months >= 3 && months <= 5) {
	result = 'sp';
}
if (months >= 6 && months <= 8) {
	result = 'sum';
}
if (months >= 9 && months <= 11) {
	result = 'au';
}
(result);
//string with symbol
let stringSymbol='abcde';
if(stringSymbol[0]==='a'){console.log(true);
}else{console.log(false);
};
//
let stringNum='12345';
if(stringNum[0]==='1'||stringNum[0]==='2'||stringNum[0]==='3'){
  console.log(true);
  } else{
    console.log(false);
  };
//happiness ticket
let strNum = '121220';
let sums= Number(strNum[0])+Number(strNum[1])+Number(strNum[2]); 
let sums2= Number(strNum[3])+Number(strNum[4])+Number(strNum[5]);
if(sums===sums2){
 console.log("This is the happiness ticket");
}else{
  console.log('This is not happiness ticket');
};

//sum
let str = '147';
let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
console.log(sum);
// sum with six numbers
let strNumbs='123123';
let summa = Number(strNumbs[0]) + Number(strNumbs[1]) + Number(strNumbs[2]);
let summas = Number(strNumbs[3]) + Number(strNumbs[4]) + Number(strNumbs[5]);
if(summa===summas){
  console.log(true);
} else{
  console.log(false);
};
  

var str111 = '123312';
var str11 = Number(str111[0]) + Number(str111[1]) + Number(str111[2]);
var str12 = Number(str111[3]) + Number(str111[4]) + Number(str111[5]);
if (str11 == str12) {
	console.log(true);
} else {
	console.log(false);
}

//Loop of while
var i = 0; // 
while (i < 5) {
	/*
		   ++  i   
		   .
	*//*
	i++;
	console.log(i);
};
  for (var i = 0; i < 10; i++) {
	console.log(i); // 0, 1, 2... 9
}
var arr = [1, 2, 3, 4, 5];
for (var i = 0; i <= arr.length-1; i++) {
	console.log(arr[i]); // 1, 2, 3, 4, 5
}
// loop for in
let objs={k:10,v:20,g:30};
for(key in objs){
  console.log(objs[key]);
  
};*/
/*var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
			console.log(arr[i]);
	};*/
/*let j = 1;
while (j <= 10) {
  j++;
	console.log(j);
	};
  let k=1;
for(k=0;k<=10;k++){
  console.log(k);
};
  */
/*
let result=1;
let arrs = [2, 3, 4, 5];
for (let j = 0; j < arrs.length; j++) {
	result=result*arrs[j];		
  console.log(result);
};
let obj={
  'minsk':'belorus',
  'moscow':'russia',
  'kiiv':'ukraine'
};
for(key in obj){
  console.log(key+ ' is ' + obj[key] + '.');
};
//while
let i=0;
while(i<=99){
  i++;
  console.log(i);
};
// for
let j=1;
for(j=1; j<=100; j++){
  console.log(j);
};
//while
let k=11;
while(k<=33){
  k++;
  console.log(k);
};
//for
  let a=11;
for(a=11; a<=33; a++){
  console.log(a);
};
*/
  // while  
/*
let l=0;
while(l<=100){
  l+=2;
  console.log(l);
};
//for  
let r=0;
for(r=0; r<=100;r+=2){
  console.log(r);
};
*/
/*
// sum while    1  100
  let a=1;
let sum=0;
while(a<=100){
  sum +=a;
  a++;
} console.log(sum);

let sums=0;
for(let s=0; s<=100; s++){
  sums +=s;
  console.log(sums);
};
 */
/*
//for arrays
let arra = [1,2,3,4,5];
for(var a=0; a< arra.length; a++){
  console.log(arra[a]);
};
//sum elements's array
let arrs = [1,2,3,4,5];
let result = 0;
for(var i=0; i< arrs.length; i++){
  result+=arrs[i];
  console.log(result);
};
//for in object
let obj={
  green: 'cucumber',
  red: 'tomato',
  blue: 'sky'
};
for(key in obj){
  console.log(key);
   console.log(obj[key]);
  };
 //
let objs = {
  Kolya:200,
  Vasya:300,
  Petya:400
};
for(salary in objs){
  console.log(salary + ' has salary by ' +objs[salary] + ' dollars USA');
};
//array for and if
let array=[2,5,9,15,0,4];
for(let i=0; i<array.length;i++){
  if(array[i]>3 && array[i]<10)
 {
  console.log(array[i]);
}
};
*/
/*
//array sum
let sum=0;
let array1=[1,15,8,-5,-8,52,100,0];
for(let k=0; k<array1.length;k++){
  if(array1[k]>=0)
   { sum+=array1[k];
   }
}
console.log(sum);

let arrays2=[1,2,5,9,4,13,4,10];
for(let i=0; i< arrays2.length; i++){
  if(arrays2[i]===4){
    console.log (true);
    break;
  }
};
  let ar=['10','20','30','50','235','3000'];
for(let a=0; a<ar.length; a++){
  if(ar[a][0] === '1' || ar[a][0] === '2' || ar[a][0] === '5') {
    console.log(ar[a]);
  }
};
//string with helping of loop for
let arr=[1,2,3,4,5,6,7,8,9];
let str ='';
for(let i=0; i< arr.length; i++){
  str += '-' + arr[i];
}
  console.log(str+ '-');
//bold weekeds
let array=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
for(let i=0; i< array.length; i++){
  if(i===5|| i===6){
    console.log(array[i]);
    } else{
      console.log(array[i]);
    }
};
let arrays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let day=5;
for(let i=0; i< arrays.length; i++){
  if(i===day){
    console.log(arrays[i]);
    } 
   };
//number
let n=1000;
let num = 0;
while(n>50){
  num++;
  n/=2;
}
  console.log(n);
console.log(num);
//number for
for(let n=1000, num=0; n>50; n/=2, num++);
 console.log(n);
console.log(num);
var str4 = "Hello World!";
var result = str4.bold();
console.log(str4);
  */
//Math function
//%
let a=10;
let b=3;
console.log(a%b);
//
let c=10;
let d=3;
let rest=a%b;
if(rest!=0){
  console.log('Divided with the remainder:' + rest);
}else{
  console.log("Divided, result divide:" + (c/d));
};
//
let st=Math.pow(2,10);
console.log(st);
  //
console.log(Math.sqrt(245));
  //
let array=[4,2,5,19,13,0,10];
let sum=0;
for(let i=0;i<array.length; i++){
  sum+=Math.pow(array[i],3);
}
console.log(Math.sqrt(sum));
//
console.log(Math.round(Math.sqrt(379)));
console.log(Math.sqrt(379).toFixed(0));
console.log(Math.sqrt(379).toFixed(1));
console.log(Math.sqrt(379).toFixed(2));
console.log(Math.ceil(Math.sqrt(587)));
console.log(Math.floor(Math.sqrt(587)));
//object
let sq=Math.sqrt(587);
let obj={
  'ceil':Math.ceil(sq),
  'floor':Math.floor(sq)
}
console.log(obj);
// max and min
let number = [4,-2,5,19,-130,0,10];
console.log(Math.max.apply(null,number));
console.log(Math.min.apply(null,number));
//
console.log(Math.max(4,-2,5,19,-130,0,10));
console.log(Math.min(4,-2,5,19,-130,0,10));
//random
function getNum(min,max){
  return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(getNum(1,100));
//random with array
let arrays=[];
for(let i=0; i<10;i++){
  arrays[i]=Math.floor(Math.random()*(100-1+1))+1;
}
console.log(arrays);
//modul
let y=3;
let x=5;
let m = y-x;
console.log(Math.abs(m));
let yd=6;
let xd=1;
let md = yd-xd;
console.log(Math.abs(md));
//
let arr=[12,15,20,25,59,79];
let summ=0;
for(let i=0; i<arr.length; i++){
  summ+=arr[i]
}
let average=summ/arr.length;
console.log(average);
//
let fact=1;
let num=4;
for(let i=1;i<=num;i++){
  fact=fact*i;
}
console.log(fact);
