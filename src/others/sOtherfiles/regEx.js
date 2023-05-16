/* 
Regular expressions are patterns used to match character combinations in strings.
 In JavaScript, regular expressions are also objects. 
 These patterns are used with the exec() and test() methods of RegExp , 
 and with the match() , matchAll() , replace() , replaceAll() , search() , 
 and split() methods of String .

note: visit ---> regexr.com to know and practice regular expressions 

*/


//(1)
// const regex=/very/i  // pattern will replqace globally all words

// // const text="shiva is a very very nice awesome nice very boy"
// // console.log(text.replace("very","VERY"));

// const text1="shiva is a very very nice awesome nice very boy"
// console.log(text.replace(regex,"VERY"));



//(2)

// const regex=/.arry/g  // the dot will include letter before it  and replace words. you can chek it bt removing dot
// // but it won't include the next line means it work for text line characters
// const text=`harry is very nice larry marry was not parry 
//  carry ` 
// console.log(text.replace(regex,"VERY"));

/*
const regex=/..arry/g  // . will include two charcters before it


const text=`aharry is very nice alarry marry was not parry 
 carry ` 
console.log(text.replace(regex,"VERY"));
 */


// (3)
// const regex = /\d[ae]arry/g   /* the \d let you match digit b/w 0-9 to match even in the next line
// and letters in square if a/e is there it will match the pattern
// */
// const text = `1earry is very nice 2arry marry was not 
// earry 
//  5aarry ,
//  9aearry `
// console.log(text.replace(regex, "VERY"));

// (4)
// const regex = /\d[a-e]arry/g   /* the \d let you match digit b/w 0-9 to match even in the next line
// and letters in square  is the range b/w a-e any letter is there it will match the pattern
// */
// const text = `1aarry is very nice 2barry marry was not 
// earry 
//  5carry ,
//  9darry 
//  a8earry`
// console.log(text.replace(regex, "VERY"));


// (5)
// const regex = /^va/g  // starting first word will match. rest of the words are ignored

// const text = `vasi is not siva , vamsi is vasi,
//  shiva is siva vamsi`
// console.log(text.replace(regex, "VERY"));

// const regex = /va$/g // enidng  word will match. rest of the words are ignored

// const text = `vasi is not siva , vamsi is vasi,
//  shiva is siva`
// console.log(text.replace(regex, "VERY"));

// const regex = /^va$/g // it wont work for starting or end

// const text = `vasi is not siva , vamsi is vasi,
//  shiva is siva`
// console.log(text.replace(regex, "VERY"));


// // (6)

// const regex = /(va)/g  // () is a capture group it will work end,start and anywhere it will match

// const text = `vasi is not siva , vamsi is vasi,
//  shiva is siva`
// console.log(text.replace(regex, "VERY"));

// (6)

// const regex =/(abc)*/g  /* i have not understand how this * is working

// */
// const text = `abc my name is shiva shankar abc abcabc`
// console.log(text.replace(regex, "VERY"));

// (7)

// (6)

// const regex =/(abc){2}/g  /*  it will work consecutive 2 times of capture group

// */
// const text = `abc abc my name is shiva shankar abc abcabcabcabc abcabcabc`
// console.log(text.match(regex));

// const regex =/(abc){2,4}/g  /*  it will work 2-4 range

// */
// const text = `abcabc  abc my name is shiva shankar abc abcabcabcabc abcabcabc`
// console.log(text.replace(regex, "VERY"));

/*   


asdfg ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf lkjhgh asdfgf ;lkjhj
asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj 
asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj
qwertr poiuyu qwertrt poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiyu qwertr poiuyu
qwertr poiuyu qwertr poiuyi qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr  poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu
qwertr poiuyu qwertr poiuyu qwertr poiuyu qertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuyu qwertr poiuiyu

abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz 
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz 
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz 
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz
abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz

zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn
zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mmbn zxcvc .,mnbn zxcvc .,mnbn zxcvc .,mnbn
.,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbb .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn .,mnbn
zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcv zxcvc zxcvc
zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc zxcvc 

asdfgf ';lkjk asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj asdfgf ;lkjhj










*/







// let a=[
//     {value:"a"},
//     {value:"b"},
//     {value:"c"},
//     {value:"d"},
//     {value:"e"},
//     {value:"f"},
// ]
// function check(val) {

//     let b=a.find(a=>a.value==val)

//     if(b)
//     {
//        console.log(`The value ${b.value} is present`);


//     }else{
//         console.log(` The value ${val} is not present `);
//     }
// }
// check('c')
// check('z')

// function palindome(val) {

//     let newval='';
//     for (let i = val.length-1; i >= 0; i--) {

//         newval +=val[i]

//     }
//     if (val===newval) {
//         console.log(` ${val} is plaindrome`);
//     }else{
//         console.log(` ${val} is not plaindrome`);

//     }

// }
// palindome('madam')
// palindome('mdam')



// // alphabetical order

// function alphaOrder(val) {
//     let myValue = val + " ";
//     let word = '';
//     let arr = [];
//     let printVal = '';

//     for (let j = 0; j < myValue.length; j++) {

//         if (myValue[j] != " ") {

//             word += myValue[j]

//         } else {
//             arr.push(word)
//             word = ""
//         }

//     }

//     let newval = arr.sort()
//     for (let i = 0; i < newval.length; i++) {

//         printVal += newval[i] + " "

//     }
//     console.log(printVal);

// }
// alphaOrder('ball apple dog cat')
// alphaOrder('siva sankar shiva shankar divyanshu mallikarjun saurabh')

// reverse each word in a string

// function reverseString(val) {

//     let string = val + " "
//     let word = "";
//     let revString='';
//     let rev=''

//     for (let i = 0; i < string.length; i++) {

//         if (string[i] != " ") {
//             word += string[i]
//         }
//         else {
//             // console.log(word);
//             for (let j = word.length-1;j>=0 ; j--) {
//                 rev +=word[j]
//             }
//             // console.log(rev);
//             revString +=rev +" "
//             word = ""
//         }
//         rev=""
//     }
//     console.log(revString);

// }
// reverseString('ball apple dog cat')
// reverseString('siva sankar shiva shankar divyanshu mallikarjun saurabh krish parvathi')

// find highest common factor
// function hcf(a, b=a, c=a) {
//     let HCF;

//     for (let i = 0; i <= a && i <= b && i <= c; i++) {
//         if (a % i == 0 && b % i == 0 && c % i == 0) {
//             HCF = i
//         }

//     }
//     console.log(HCF)
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)

// }
// hcf(8,67)

// find lcm

// let lcm = (n1, n2) => {
//     //Find the smallest and biggest number from both the numbers
//     let lar = Math.max(n1, n2);
//     let small = Math.min(n1, n2);
    
//     //Loop till you find a number by adding the largest number which is divisble by the smallest number
//     let i = lar;
//     while(i % small !== 0){
//       i += lar;
//     }
    
//     //return the number
//     return i;
//   }
  
//   console.log(lcm(20, 15));
//   console.log(lcm(5, 7));

// to find out lcm

