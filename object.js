"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类是对象具体事物的一个抽象。对象是类的具体表现
//面向对象编程 - 类的声明和使用
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('笑呵呵');
    };
    return XiaoJieJie;
}());
var jiejie = new XiaoJieJie('范冰冰', 18);
console.log(jiejie);
jiejie.say();
//面向对象编程 - 修饰符
// public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
// protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
// private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
//readonly: 只读修饰符，只读属性必须在生命时或者构造函数里被初始化（注意）。
var Xiaojiejie = /** @class */ (function () {
    function Xiaojiejie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    Xiaojiejie.prototype.sayHello = function () {
        console.log('小哥哥好');
    };
    Xiaojiejie.prototype.sayLove = function () {
        console.log('我爱你');
    };
    return Xiaojiejie;
}());
var jiejie2 = new Xiaojiejie('女', '迪丽热巴', 22);
console.log(jiejie2.sex);
// console.log(jiejie2.name); // 受保护的修饰符  输出报错
// console.log(jiejie2.age); //私有修饰符   输出报错
jiejie2.sayHello();
// jiejie2.sayLove(); // 受保护的修饰符  调用报错
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
// man.sex = '女' // 只读修饰符  更改报错
//面向对象编程 - 继承和重写
var Jspang = /** @class */ (function () {
    function Jspang(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Jspang.prototype.interest = function () {
        console.log('赵小姐姐');
    };
    return Jspang;
}());
var jspangObj = new Jspang('技术胖', 18, 'coding');
jspangObj.interest();
// extends  继承 关键字就是继承的重点
//
var JsShuai = /** @class */ (function (_super) {
    __extends(JsShuai, _super);
    function JsShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingxiang = '帅气';
        return _this;
    }
    JsShuai.prototype.interest = function () {
        _super.prototype.interest.call(this); //通过super调用父类并继承父类
        console.log('建立电商平台'); //然后再增加技能
    };
    JsShuai.prototype.zhuanQian = function () {
        console.log('一天赚了一个亿');
    };
    return JsShuai;
}(Jspang));
var shuai = new JsShuai('技术帅', 5, '演讲');
shuai.interest();
shuai.zhuanQian();
var myHusband = { sex: '男', interest: '风趣幽默，看书，做家务', maiBaoBao: false };
console.log(myHusband);
var mySearch;
/**
 *  我是否满足美女的需求
 * @param source  美女找另一半的需求
 * @param subString  我的状况
 */
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德', '高'));
//面向对象编程 - 命名空间
var shuaiGe;
(function (shuaiGe) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '刘德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是刘德华');
        };
        return Dehua;
    }());
    shuaiGe.Dehua = Dehua;
})(shuaiGe || (shuaiGe = {}));
var Bajie;
(function (Bajie) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = '马德华';
        }
        Dehua.prototype.talk = function () {
            console.log('我是二师兄马德华');
        };
        return Dehua;
    }());
    Bajie.Dehua = Dehua;
})(Bajie || (Bajie = {}));
var dehua1 = new shuaiGe.Dehua();
var dehua2 = new Bajie.Dehua();
dehua1.talk();
dehua2.talk();
//# sourceMappingURL=object.js.map