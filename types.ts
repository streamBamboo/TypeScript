var age: number = 18;
var stature: number = 178.5;


console.log(age);
console.log(stature);
console.log('-----------------------');


var jspang: string = '技术胖 jspang.com';
console.log(jspang);

console.log('-----------------------');

var b: boolean = true;
var c: boolean = false;
console.log(b);
console.log(c);

console.log('-----------------------');

//enum 枚举类型

enum REN {nan = '男人', nv = '女人', yao = '妖'}

console.log(REN.yao);


console.log('-----------------------');
//any 任意类型;

var t: any = 10;

t = 'jspang';
t = true;

console.log(t);

//null 类型


///////////////////
console.log('-----------------------');
//引用类型
// 数组
/*let jspang = {
    name: '技术胖',
    website: 'jspang.com',
    age: 18,
    saySometing: () => {
        console.log('为了前端技术');
    }
};

console.log(jspang.name);
jspang.saySometing();*/

console.log('-----------------------');
//初始化数组的两种方法
//1：字面量赋值法
let arr1: number[] = [];
let arr2: number[] = [1, 2, 3, 4, 5];
let arr3: Array<string> = ['jspang', '技术胖', '金三胖'];
let arr4: Array<boolean> = [true, false, false];

console.log('-----------------------');
// 2：构造函数赋值法
let arr5: number[] = new Array();
let arr6: number[] = new Array(1, 2, 3, 4, 5);
let arr7: Array<string> = new Array('jspang', '技术胖', '金三胖');
let arr8: Array<boolean> = new Array(true, false, false);


//元祖
let x: [string, number];
x = ['hello', 10]
console.log('-----------------------');

// 字符串的两种类型
// 基本类型字符串：由单引号或者双引号括起来的一串字符串。
// 引用类型字符串：用new 实例化的 String类型。
let jspang1: string = '技术胖';
let jspang2: String = new String("jspang.com");

console.log(jspang1);
console.log(jspang2);
console.log('-----------------------');
//不传递任何参数
let d: Date = new Date();
console.log(d)
console.log('-----------------------');
//传递一个整数
let d1: Date = new Date(1000); //1970-01-01 00:00:00
let d2: Date = new Date(2000); //1970-01-01 00:00:00
console.log(d1)
console.log(d2)
console.log('-----------------------');
//传递一个字符串

let d3: Date = new Date('2019/07/16 14:17:00');
let d4: Date = new Date('2019-07-16 14:17:00');
let d5: Date = new Date('2019-07-16T14:17:00');
console.log(d3);
console.log(d4);
console.log(d5);


console.log('-----------------------');

//RegExp

//构造函数声明法
let reg1:RegExp = new RegExp('jspang');
console.log(reg1);
let reg2:RegExp = new RegExp('jspang', 'gi');
console.log(reg2);

//字面量声明


let reg3:RegExp = /jspang/;
let reg4:RegExp = /jspang/gi;
console.log(reg3);
console.log(reg4);



let reg5:RegExp = /jspang/i;
let website:string = 'jspang.com';

// let result1:boolean = reg5.test(website);
console.log(reg5.exec(website))


