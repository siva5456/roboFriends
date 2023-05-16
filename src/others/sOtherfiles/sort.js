// let colors=[
//     {uniqueColor: 'rgb(118,116,222)', id: 2},
//     {uniqueColor: 'rgb(67,50,64)', id: 3},
//     {uniqueColor: 'rgb(44,104,192)', id: 1},
//     {uniqueColor: 'rgb(107,163,221)', id: 6},
// {uniqueColor: 'rgb(172,92,15)', id: 4},
// {uniqueColor: 'rgb(253,106,3)', id: 7},
// {uniqueColor: 'rgb(83,173,52)', id: 11},
// {uniqueColor: 'rgb(211,41,66)', id: 9},
// {uniqueColor: 'rgb(109,28,225)', id:10},
// {uniqueColor: 'rgb(69,109,200)', id: 13},
// {uniqueColor: 'rgb(55,209,171)', id: 5},
// {uniqueColor: 'rgb(132,3,101)', id: 12},
// {uniqueColor: 'rgb(173,16,46)', id: 8},
// {uniqueColor: 'rgb(62,13,233)', id: 14}
// ];

// data= colors.sort((a,b)=>{
//     return a.id-b.id
// });

// // console.log(data);

// let tree=[]

// data.filter((d ,i)=>{
//     return (i<6 ? tree.push({
//         color:d.uniqueColor,
//         Id:d.id
//     }):[]
//     )
// });

// console.log(tree);




// const array1 = [1, 30, 4, 21, 100000];
// data= array1.sort((a,b)=>{
//     return b-a
// });

// let tree=[]
// data.forEach(element => {

//     tree.push({
//         Numbers:element
//     })

// });
// console.log(tree);

// let a=[1,2,3,4,5]

// let b=a.slice(1,3)
// console.log(b);
// console.log(a);

// let c=a.splice(1,3)
// // console.log(c);
// console.log(a);



// var ab=10, cd=20, ef=30;
// console.log(ab);
// console.log(cd);
// console.log(ef);
// cd=15;

// console.log(cd);


// let ab=10, cd=20, ef=30;
// console.log(ab);
// console.log(cd);
// console.log(ef);
// cd=15;

// console.log(cd);

// const ab=10, cd=20, ef=30;
// console.log(ab);
// console.log(cd);
// console.log(ef);
// cd=15;

// console.log(ab);


// var a = 10; // declaratio  and intialization
// console.log(a);

// // var a = 20; // redeclaratio  
// a = 40 // reintialization
// console.log(a);


// let b = 10; // declaratio  and intialization
// // let b = 20; // redeclaration  
// b = 40 // reintialization
// console.log(a);
// const c=10;
// // c=20;
// console.log(c);

// function f() {
    
// if(true)
// {
//     var a=20
// }

// console.log(a);
// }f()

// var a=10;
// var b=a;
// a=20;
// console.log(a);
// console.log(b);


// let obj={i:10};  //obj address created

// let d=obj; // obj address capied to d
// obj.i=20;  // 

// console.log(obj);
// console.log(d);

// let a =(para)=>10+para

// console.log(a());

// // primitive // stirng,number,boolean,undefined,symbol,bigInt
// let i='teja'; 
// let b=1234;
// let c=false;
// let d;
// let y = 9999999999999999n;
// let x = BigInt(1234567890123456789012345)
// console.log(typeof i+ " "+i)
// console.log(typeof b+" "+b)
// console.log(typeof c+" "+c)
// console.log(typeof d+" "+d)
// console.log(typeof y+" "+y)
// console.log(typeof x+" "+x)



// let arr=[0,2]
// let obj={a:0}

// function func(params) {
    
// }

// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof func);

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");

// // console.log(typeof sym1);
// console.log(sym2);

// let sym= Symbol("foo") === Symbol("foo");
// console.log(sym);

const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"

console.log(typeof sym);
console.log(typeof symObj);

