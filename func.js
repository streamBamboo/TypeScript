"use strict";
function searchXiaoJieJie1(age) {
    return '找到了' + age + '岁的小姐姐';
}
var age = 18;
var result = searchXiaoJieJie1(age);
// console.log(result)
//有可选参数的函数    带?是可选参数（意思就是可填可不填）
function searchXiaoJieJie2(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature;
    }
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie2(22, '大长腿');
// console.log(result);
//有默认参数的函数
function searchXiaoJieJie3(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '小蛮腰'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature;
    }
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie3(22, '大木瓜');
// console.log(result);
//有剩余参数的函数
function searchXiaoJieJie4() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '找到了';
    xuqiu.map(function (item, index) {
        yy += item;
        if (index < xuqiu.length - 1) {
            yy += '、';
        }
    });
    return yy + '的小姐姐';
}
var result = searchXiaoJieJie4('22岁', '大木瓜', '大长腿', '御姐型');
// console.log(result);
//函数声明法
function add1(n1, n2) {
    return n1 + n2;
}
// console.log(add1(1, 2))
//函数表达式法
var add2 = function (n1, n2) {
    return n1 + n2;
};
// console.log(add2(1, 2))
//箭头函数   TypeScript 支持ES6语法
var add3 = function (n1, n2) {
    return n1 + n2;
};
console.log(add3(1, 3));
//# sourceMappingURL=func.js.map