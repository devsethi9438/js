// console.log("Hello","World!");
// let a=10;
// let b=5;

// // arthimatic
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// // unary
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// // assignment
// a=b;
// console.log(a);
// a+=b;
// console.log(a);
// a-=b;
// console.log(a);
// a%=b;
// console.log(a);
// a*=b;
// console.log(a);
// a/=b;
// console.log(a);

// //
// let x=5;
// let y=6;
// console.log(`the sum of x & y : ${x+y}`);

// que

// let size = "xl";
// if (size === "xl") {
//     console.log("250");
// } else if (size === "l") {
//     console.log("200");
// } else if (size === "m") {
//     console.log("100");
// } else {
//     console.log("50");
// }

// //

// let str = "apple";
// if ((str[0] === "a") && (str.length > 3)) {
//     console.log("this is a good string");
// } else {
//     console.log("this is not a good string")
// }

// // switch

// let num = "1";

// switch (num) {
//     case ("1") :
//         console.log("Monday");
//         break;
//     case ("2") :
//         console.log("Tuesday");
//         break;
//     case ("3") :
//         console.log("Wednesday");
//         break;
//     case ("4") :
//         console.log("Thursday");
//         break;
//     case ("5") :
//         console.log("Friday");
//         break;
//     case ("6") :
//         console.log("Saturday");
//         break;
//     case ("7") :
//         console.log("Sunday");
//         break;  
//     default:
//         console.log("Wrong day!")
// }

// // que

// let number = 20;
// if (number%10 == 0) {
//     console.log("good number");
// } else {
//     console.log("bad number");
// }
// //
// let name = prompt ("type your name");
// let age = prompt ("type your age");

// alert (`${name} is ${age} years old.`);
// //
// let a = 2;
// let b = 9;
// let c = 7;

// if (a>b) {
//     if (a>c){
//         console.log(a, "is larger!");
//     } else {
//         console.log(c, "is larger!");
//     }
// }   else {
//         if (b>c){
//             console.log(b, "is larger!");
//         } else {
//             console.log(c, "is larger!");
//         }
// }

// let msg = "help!";
// msg = msg.trim();
// console.log(msg.toUpperCase(msg));

// let name = "SwitchSwift";
// console.log(name);

// //
// let months = ['jan','july','march','aug'];
// console.log(months);
// months.splice(0,1);
// months.splice(1,0,'june');
// console.log(months);

// //
// let progm = ['c','c++', 'html', 'javascript', 'python', 'java','c#','sql'];
// console.log(progm);
// progm = progm.reverse();
// console.log(progm.indexOf('javascript'));

// //
// let arr=[7,9,0,-2];
// let n=3;
// let ans=arr.slice(0,n);
// console.log(ans);

// let an = arr.slice(arr.length-n);
// console.log(an);

// //
// let str = prompt("please enter a string");
// if (str.length == 0) {
//     console.log("string is empty");
// } else {
//     console.log("string is not empty");
// }

// //
// let st = "ApNaCoLlEgE";
// let idx = 3;
// if (st[idx] == st[idx].toLowerCase()) {
//     console.log("character  is lowercase");
// } else {
//     console.log("character is not lowercase");
// }

// //
// let s = prompt("please enter a string");
// console.log(`original string=${s}`);
// console.log(`string without spaces=${s.trim()}`);

// //
// let a = ["hello",'a',23,64,99,-6];
// let item = 64;
// if(a.indexOf(item)!=-1) {
//     console.log("element exists in array");
// } else {
//     console.log("element doesn't exist in array");
// }


    //JavaScript (Part-4)


//for loop

for (let ab=1; ab<=5; ab++) {
    console.log(ab);
}


for (let b=5; b>=1; b--) {
    console.log(b);
}

for (let c=1; c<=10; c=c+2) {  //odd
    console.log(c);
}

for (let c=2; c<=10; c=c+2) {  //even
    console.log(c);
}