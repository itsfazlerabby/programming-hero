console.log(91);
console.log("Hello JavaScript")


// var num = "15.5";
// console.log(parseInt(num));     // 15   Eiti vangti ongsho print korbe na
// console.log(parseFloat(num));   // 15.5 Eiti vangti ongsho soho print korbe
// console.log(+(num) + 5);        // 15.5 Eiti parseFloat() er shortcut
// console.log(typeof ""+(5));     // "5"  Eiti number k string a rupantor korbe



// var total = 0.1 + 0.2;          // 0.3000000000000004
// total = total.toFixed(5);       // 0.30000
// console.log(total);




// =============================== Math ==================================
// var num = -5.59;
// console.log(Math.abs(num));                     // 5.59 Eiti Absolute kore dibe
// console.log(Math.round(num));                   // -6 Eiti number k round kore dibe
// console.log(Math.ceil(5.23));                   // 6 Eita ceiling/shompurno kore dibe
// console.log(Math.floor(5.999));                 // 5 Eita floor/kom korbe
// console.log(Math.random()*100);                 // Ulta palta number generate korbe
// console.log(Math.round(Math.random()*6));     // 0 theke 6 er moddhe number generate korbe

// console.log(new Date());



// ==================== if/else =========================

// var num = 32;
// if (num >= 80) {
//     console.log("You got A+");
// } else if(num >= 70){
//     console.log("You got A");
// } else if(num >= 60){
//     console.log("You got A-");
// } else if(num >= 50){
//     console.log("You got B");
// } else if(num >= 40){
//     console.log("You got C");
// } else if(num >= 33){
//     console.log("You got D");
// } else {
//     console.log("You are Failed.");
// }




// ==================== Array =========================
// var age = [15, 17, 14, 16];
// console.log(age[2])                 // 14 Eite 2 no index koto ta dekhabe
// console.log(age.indexOf(14));       // 2  Eita 14 er position nirnoy korbe

// age[2] = 5;
// console.log(age);              // [15, 17, 5, 16] Eita 2 no index k change korbe
// console.log(age.length);              // 4 Eita array length koto dekhabe

// age.push(21);
// console.log(age);              // [15, 17, 14, 16, 21] Array er seshe number add kore

// age.pop();
// console.log(age);              // [15, 17, 14]  Array er sesher ta bad dibe

// age.unshift(10);
// console.log(age);              // [15, 17, 14]  Array er sesher ta bad dibe

// age.splice(1,2);                // 1 no Array theke 2 no array remove kore dibe
// console.log(age);

// var newAge = age.slice(1,3);
// console.log(newAge);                // 1 no Array theke 3 no er ag porjonto dekhabe
 





// ==================== While Loop =========================
// var num = 10;
// while(num<15){
//     console.log(num);
//     num++;
// }



// ==================== For Loop =========================
// var num = [11, 22, 33, 44, 55, 66, 77, 88, 99];
// for (let i = 0; i < num.length; i++) {
//     newName = num[i];
//     console.log(newName);
// }



// ==================== Switch Loop =========================
// var num = 22;
// switch(num){
//     case 100:
//         console.log("You got 100.");
//         break;
//     default:
//         console.log("You are not allowed.");
//     case 80:
//         console.log("You got 80.");
//         break;
//     case 33:
//     case 22:
//         console.log("You got 33.");
//         break;
// }


// var num = 1;
// var output = "Output: ";
// switch(num){
//     case 0:
//         output += "Yes!";
//     case 1:                                     // Er por theke output dekhabe
//         output += "You've ";
//     case 2:
//         output += "done.";
//     case 3:
//         console.log(output);
//         break;                                  // Eikhane ses hobe
//     default:
//         console.log("There is no output.");
// }


// var num = 101;
// switch(true){
//     case num>=80 && num<=100:
//         console.log("You got A");
//         break;
//     case num>=70 && num<=79:
//         console.log("You got B");
//         break;
//     case num>=60 && num<=69:
//         console.log("You got C");
//         break;
//     case num>=50 && num<=59:
//         console.log("You got D");
//         break;
//     case num>=101:
//         console.log("Invalid");
//         break;
//     default:
//         console.log("You are faild!")
// }




// ==================== Functions =========================
// function doubleIt(num){
//     return num*2;
// }
// var fst = doubleIt(10);
// var scd = doubleIt(50);
// console.log(fst+scd);


// function sum(sum1, sum2){
//     return sum1+sum2;
// }
// var result = sum(10,20);
// console.log(result);




// ==================== Objects =========================
// var student1 = {id:11, name:"Abul", phone:123};
// var student2 = {id:12, name:"Babul", phone:456};

// var phone = student1.phone;              // 1st way phone no access to array
// // var phone = student1["phone"];           // 2nd way phone no access to array

// // var phone = "phone";
// // var phone = student1[phone];             // phone no access to array

// // Update phone no
// // student1.phone = 111;                    // Update phone no first way
// student1["phone"] = 222;                 // Update phone no second way

// // Add new properties 
// student1.cinema = "Hom Mat";


// console.log(student1);
// console.log(student1.phone);






// ====================== Function / Inch to feet ==================
// function inchToFeet(inch){
//     return inch/12;
// }
// var senior = [144, 240, 96];
// // console.log(inchToFeet(144));
// console.log(inchToFeet(senior[1]));




// ====================== Function / Leap year check ==================
// function leapYear(year){
//     if(year%4 == 0){
//         if(year%100 == 0){
//             if(year%400 == 0){
//                 console.log("Leap Year")
//             }else{
//                 console.log("Not Leap Year");
//             }
//         }else{
//             console.log("Leap Year");
//         }
//     }else{
//         console.log("Not Leap Year");
//     }
// }
// leapYear(1700);




// ====================== Function && For / fectorial ==================
// function fectorial(n){
//     var num = 1;
//     for(var i=n; i>=1; i--){
//         num = num * i;
//         console.log(i, num);
//     }
// }
// fectorial(5);



// ====================== Function && While / fectorial ==================
// function fectorial(n){
//     var i = 1;
//     var num = 1
//     while (i<=n) {
//         num = num*i;
//         console.log(i, num);
//         i++
//     }
// }
// fectorial(6);




// ====================== Recursive Function / fectorial ==================
// function fectorial(n){
//     if(n==0){
//         return 1;
//     }else{
//         return n*fectorial(n-1);            // n! = (n-1)!*n!   or   10*fectorial(10-1) 
//     }
// }
// console.log(fectorial(10));





// ====================== For / Fibonacci ==================
// var fibonacci = [0, 1];
// for(var i=2; i<=10; i++){
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
// }
// console.log(fibonacci);




// ====================== Recursive Function / Fibonacci ==================
// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }else if(n==1){
//         return 1;
//     }
//     else{
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }
// for(var i=0; i<=10; i++){
//     console.log(fibonacci(i));
// }



// ====================== Recursive - Xotil / Fibonacci ==================
// function fibonacci(n){
//     if(n==0){
//         return [0];
//     }else if(n==1){
//         return [0,1];
//     }else{
//         var fibo = fibonacci(n-1);
//         var nextElement = fibo[n-1] + fibo[n-2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }
// console.log(fibonacci(10));






// ====================== Prime / Function + For ==================
// function prime(n){
//     for(var i=2; i<n; i++){
//         if(n%i == 0){
//             return "It's not a prime number.";
//         }
//     }
//     return "It's a prime number.";
// }
// console.log(prime(103));










// ================= Swap (a=b b=a / p=q q=p / x=y y=x) =======================
// var b = 5;
// var b = 7;
// var temp = b;
// b = b;
// b = temp;
// console.log("After swap: a = "+b+", b = "+b);


// var p = 5;
// var q = 7;
// p = p+q;
// q = p-q;
// p = p-q;
// console.log("After swap: p = "+p+", q = "+q);


// var x = 5;
// var y = 7;
// [x, y] = [y, x];
// console.log("After swap: x = "+x+", y = "+y);



// ============================ Check max (Who is bigger) ===========================
// var business = 300;
// var minister = 200;
// var sochib = 100;
// if(business>minister && business>sochib){
//     console.log("Business");
// }else if(sochib>business && sochib>minister){
//     console.log("Sochib")
// }
// else{
//     console.log("minister");
// }


// ============================ Check max (Who is bigger) ===========================
// if(business>minister){
//     if(business>sochib){
//         console.log("Business");
//     }else{
//         console.log("Sochib");
//     }
// }else{
//     console.log("Minister");
// }


// ============================ Check max (Who is bigger) ===========================
// var max = Math.max(business, minister, sochib);
// if(max==business){
//     console.log("business");
// }else if(max==minister){
//     console.log("minister");
// }else{
//     console.log("sochib");
// }






// ============================ Max number check (Who is bigger in Array) ===========================
// var marks = [20, 30, 10, 50, 90, 60, 40, 70, 80];
// var max = marks[0];
// for(var i=0; i<marks.length; i++){
//     var element = marks[i];
//     if(element>max){
//         max = element;
//     }
// }
// console.log(max);




// ============================ Sum / For ===========================
// var numbers = [20, 30, 10, 50, 90, 60, 40, 70, 80];
// var sum = 0;
// for(var i=0; i<numbers.length; i++){
//     sum = sum + numbers[i];
// }
// console.log(sum);


// ============================ Sum / Function + For ===========================
// function arraySum(numbers){
//     var sum = 0;
//     for(var i=0; i<numbers.length; i++){
//         sum = sum + numbers[i];
//     }
//     return sum;
// }
// var result = arraySum([20, 30, 10, 50, 90, 60, 40, 70, 80]);
// console.log(result);





// ============================ Erese Duplicate numbers / for ===========================
// var numbers = [20, 30, 10, 20, 50, 90, 60, 40, 50, 10, 70, 80];
// var mainNubers = [];
// for(var i=0; i<numbers.length; i++){
//     var element = numbers[i];
//     var index = mainNubers.indexOf(element);
//     if(index == -1){
//         mainNubers.push(element);
//     }
// }
// console.log(mainNubers);



// ============================ Erese Duplicate numbers / Function + For ===========================
// function findIndex(numbers){
//     var mainNubers = [];
//     for(var i=0; i<numbers.length; i++){
        // var element = numbers[i];
//         var index = mainNubers.indexOf(element);
//         if(index == -1){
//             mainNubers.push(element);
//         }
//     }
//     console.log(mainNubers);
// }
// findIndex([20, 30, 10, 20, 50, 90, 60, 40, 50, 10, 70, 80]);





// ============================ Space/Word Count / For ===========================
// var sentence = "The quick brown fox jumps over the lazy dog";
// var spaceCount = 0;
// for(var i=0; i<sentence.length; i++){
//     if(sentence[i] == " " && sentence[i-1] != " "){
//         spaceCount++;
//     }
// }
// spaceCount++;
// console.log(spaceCount);



// ============================ Word Count / simple ===========================
// var wordCount = sentence.split(" ").length;
// console.log(wordCount);





// ============================ Reverse String / Function + For ===========================
// function reverse(str){
//     var reverseSrting = "";
//     for(var i=0; i<str.length; i++){
//         reverseSrting = str[i] + reverseSrting;
//     }
//     return reverseSrting;
// }
// var rs = reverse("The quick brown fox jumps over the lazy dog");
// console.log(rs);












// =============== Assignment / Inch to Feet =================
// function feetToMile(value){
//     if(value>=0){
//        var result = value/3280; 
//        console.log(result);
//     }else{
//         console.log("Distance can't be negative.");
//     }
// }
// feetToMile(-6560);



// =============== Assignment / Wood Calculator =================
// function woodCalculator(chair, table, bed){
//     if(chair>=0 && table>=0 && bed>=0){
//         chair *=1;
//         table *=3;
//         bed *=5;
//         var result = chair+table+bed;
//         console.log("Total: "+result+ " Cubik Feet");
//     }else{
//         console.log("Please make sure that, your input is valueable.");
//     }
// }
// woodCalculator(10, 5, 4);




// =============== Assignment / Brick Calculator =================
// function brickCalculator(floor){
//     if(floor>=0){
//        if(floor<=10){
//             console.log(floor*15*1000);
//         }else if(floor<=20){
//             console.log(10*15*1000 + (floor-10)*12*1000);
//         }else{
//             console.log(10*15*1000 + 10*12*1000 + (floor-20)*10*1000);
//         }
//     }else{
//         console.log("Wrong Input.");
//     }
// }
// brickCalculator(30);


// =============== Assignment / Tiny Friend age =================
// function tinyFriend(num){
//     var small = num[0];
//     for(var i=0; i<num.length; i++){
//         var element = num[i];
//         if(element >= 0){
//             if(element < small){
//                 small = element;
//             }
//         }else if(element == undefined){
//             console.log("Age can't be Empty. Plese input a valueable data.")
//         }
//         else{
//             console.log("Age can't be negative. Plese change your negative value.");
//         }
//     }
//     console.log(small);
// }
// var result = tinyFriend([20, 40, 10, 20, 50, 90, 60, 40, 50, 10,  , 70, -7]);



