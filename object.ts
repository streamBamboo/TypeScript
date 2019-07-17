//类是对象具体事物的一个抽象。对象是类的具体表现
//面向对象编程 - 类的声明和使用
class XiaoJieJie {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log('笑呵呵')
    }
}

let jiejie: XiaoJieJie = new XiaoJieJie('范冰冰', 18);
console.log(jiejie);

jiejie.say();

//面向对象编程 - 修饰符

// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
//readonly: 只读修饰符，只读属性必须在生命时或者构造函数里被初始化（注意）。

class Xiaojiejie {
    public sex: string;
    protected name: string;
    private age: number;

    public constructor(sex: string, name: string, age: number) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }

    public sayHello() {
        console.log('小哥哥好')
    }

    protected sayLove() {
        console.log('我爱你')
    }
}

let jiejie2: Xiaojiejie = new Xiaojiejie('女', '迪丽热巴', 22);

console.log(jiejie2.sex);
// console.log(jiejie2.name); // 受保护的修饰符  输出报错
// console.log(jiejie2.age); //私有修饰符   输出报错
jiejie2.sayHello();

// jiejie2.sayLove(); // 受保护的修饰符  调用报错


class Man {
    public readonly sex: string = '男';
}

var man: Man = new Man();
// man.sex = '女' // 只读修饰符  更改报错


//面向对象编程 - 继承和重写
class Jspang {
    public name: string;
    public age: number;
    public skill: string;

    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    public interest() {
        console.log('赵小姐姐')
    }
}

let jspangObj: Jspang = new Jspang('技术胖', 18, 'coding');

jspangObj.interest();
// extends  继承 关键字就是继承的重点
//
class JsShuai extends Jspang {
    public xingxiang: string = '帅气';

    public interest() {
        super.interest(); //通过super调用父类并继承父类
        console.log('建立电商平台') //然后再增加技能
    }

    public zhuanQian() {
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai('技术帅', 5, '演讲');

shuai.interest();
shuai.zhuanQian();


//面向对象编程 - 接口

interface Husband {
    sex: string,
    interest: string,
    maiBaoBao?: Boolean,
}

let myHusband: Husband = {sex: '男', interest: '风趣幽默，看书，做家务', maiBaoBao: false};
console.log(myHusband)

interface SearchMan {
    (source: string, subString: string): boolean
}

let mySearch:SearchMan;
/**
 *  我是否满足美女的需求
 * @param source  美女找另一半的需求
 * @param subString  我的状况
 */
mySearch = function (source: string, subString: string):boolean {
    let flag = source.search(subString)
    return (flag != -1)
};

console.log(mySearch('高、富、帅、德', '高'));


//面向对象编程 - 命名空间

namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华';
        talk(){
            console.log('我是刘德华')
        }
    }
}

namespace Bajie{
    export class Dehua{
        public name:string = '马德华';
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}


let dehua1:shuaiGe.Dehua = new shuaiGe.Dehua();
let dehua2:Bajie.Dehua = new Bajie.Dehua();
dehua1.talk();
dehua2.talk();
