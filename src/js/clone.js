// 基本数据类型： number, string, boolean, null, undefined, symbol
// 引用数据类型： object

// javascript 变量的存储方式：
// 栈：自动分配内存空间，系统自动释放，里面存放的基本类型的值和引用类型的地址。
// 堆：动态分配，大小不定，也不会自动释放，里面存放引用类型的值。

// 1. 测试值传递
var a = 100;
var b = a;
b++;
console.log(a);
console.log(b);

// 2. 测试引用类型地址传递
console.log("测试引用类型地址传递");
const obj1 = {
  name: "blade",
  location: "shanghai",
  skills: ["react", "vue"]
};
const obj2 = obj1;
obj1.name = "ziwei";
obj1.skills = []; // 修改obj1的name,skills属性
console.log(obj1); //{ name: 'ziwei', location: 'shanghai', skills: [] }
console.log(obj2); //{ name: 'ziwei', location: 'shanghai', skills: [] }

// 3. 测试浅拷贝.
console.log("测试浅拷贝");
function shallowCopy(obj1, obj2) {
  for (var p in obj1) {
    if (obj1.hasOwnProperty(p)) {
      obj2[p] = obj1[p];
    }
  }
}

var o1 = {
  name: "blade",
  location: "shanghai",
  skills: ["react", "vue"]
};
var o2 = {};
shallowCopy(o1, o2);
// 修改应用类型属性
o2.skills[0] = "angular";
// 修改值类型的属性
o2.name = "ziwei";
console.log(o1);
console.log(o2);
// 结果证明，无法进行深层次的拷贝，这个时候我们可以使用深拷贝来完成，所谓深拷贝，就是能够实现真正意义上的数组和对象的拷贝，我们通过递归调用浅拷贝的方式实现。

// 4. 测试深拷贝
console.log("测试深拷贝");
function deepCopy(obj) {
  var objArray = Array.isArray(obj) ? [] : {};
  Object.keys(obj).map(key => {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        objArray[key] = deepCopy(obj[key]);
      } else {
        objArray[key] = obj[key];
      }
    }
  });
  return objArray;
}

var object1 = {
  name: "blade1",
  location: "shanghai1",
  skills: ["react1", "vue1"],
  scores: {
    english: 80,
    math: 100
  }
};

var object2 = deepCopy(object1);
// 修改引用类型属性
object2.skills[0] = "angular";
// 修改引用类型属性
object2.scores.english = 100;
// 修改值类型的属性
object2.name = "ziwei";

console.log(object1);
console.log(object2);
