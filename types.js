"use strict";
var age = 18;
var stature = 178.5;
console.log(age);
console.log(stature);
console.log('-----------------------');
var jspang = '技术胖 jspang.com';
console.log(jspang);
console.log('-----------------------');
var b = true;
var c = false;
console.log(b);
console.log(c);
console.log('-----------------------');
//enum 枚举类型
var REN;
(function (REN) {
    REN["nan"] = "\u7537\u4EBA";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.yao);
console.log('-----------------------');
//any 任意类型;
var t = 10;
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
var arr1 = [];
var arr2 = [1, 2, 3, 4, 5];
var arr3 = ['jspang', '技术胖', '金三胖'];
var arr4 = [true, false, false];
console.log('-----------------------');
// 2：构造函数赋值法
var arr5 = new Array();
var arr6 = new Array(1, 2, 3, 4, 5);
var arr7 = new Array('jspang', '技术胖', '金三胖');
var arr8 = new Array(true, false, false);
//元祖
var x;
x = ['hello', 10];
console.log('-----------------------');
// 字符串的两种类型
// 基本类型字符串：由单引号或者双引号括起来的一串字符串。
// 引用类型字符串：用new 实例化的 String类型。
var jspang1 = '技术胖';
var jspang2 = new String("jspang.com");
console.log(jspang1);
console.log(jspang2);
console.log('-----------------------');
//不传递任何参数
var d = new Date();
console.log(d);
console.log('-----------------------');
//传递一个整数
var d1 = new Date(1000); //1970-01-01 00:00:00
var d2 = new Date(2000); //1970-01-01 00:00:00
console.log(d1);
console.log(d2);
console.log('-----------------------');
//传递一个字符串
var d3 = new Date('2019/07/16 14:17:00');
var d4 = new Date('2019-07-16 14:17:00');
var d5 = new Date('2019-07-16T14:17:00');
console.log(d3);
console.log(d4);
console.log(d5);
console.log('-----------------------');
//RegExp
//构造函数声明法
var reg1 = new RegExp('jspang');
console.log(reg1);
var reg2 = new RegExp('jspang', 'gi');
console.log(reg2);
//字面量声明
var reg3 = /jspang/;
var reg4 = /jspang/gi;
console.log(reg3);
console.log(reg4);
var reg5 = /jspang/i;
var website = 'jspang.com';
// let result1:boolean = reg5.test(website);
console.log(reg5.exec(website));
//# sourceMappingURL=types.js.map