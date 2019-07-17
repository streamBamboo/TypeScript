function searchXiaoJieJie1(age: number): string {
    return '找到了' + age + '岁的小姐姐'
}

var age: number = 18;

var result: string = searchXiaoJieJie1(age);

// console.log(result)

//有可选参数的函数    带?是可选参数（意思就是可填可不填）
function searchXiaoJieJie2(age: number, stature?: string): string {
    let yy: string = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature
    }

    return yy + '的小姐姐'
}

var result: string = searchXiaoJieJie2(22, '大长腿');

// console.log(result);


//有默认参数的函数
function searchXiaoJieJie3(age: number = 18, stature: string = '小蛮腰'): string {
    let yy: string = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature
    }

    return yy + '的小姐姐'
}

var result: string = searchXiaoJieJie3(22, '大木瓜');

// console.log(result);


//有剩余参数的函数
function searchXiaoJieJie4(...xuqiu: string[]): string {
    let yy: string = '找到了';
    xuqiu.map((item, index) => {
        yy += item;
        if (index < xuqiu.length - 1) {
            yy += '、'
        }
    });

    return yy + '的小姐姐'
}

var result: string = searchXiaoJieJie4('22岁', '大木瓜', '大长腿', '御姐型');

// console.log(result);


//函数声明法
function add1(n1: number, n2: number): number {
    return n1 + n2
}

// console.log(add1(1, 2))

//函数表达式法
var add2 = function (n1: number, n2: number): number {
    return n1 + n2
};

// console.log(add2(1, 2))

//箭头函数   TypeScript 支持ES6语法

var add3 = (n1: number, n2: number): number => {
    return n1 + n2
};
console.log(add3(1, 3))
