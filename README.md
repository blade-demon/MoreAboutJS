# JavaScript 进阶知识

学习了 JavaScript 这么久一直没有时间来梳理知识点，好多知识点都没有形成系统，甚至还有一些知识点都没了解过。所以我会花一段时间详细整理这些知识点，这样既可以提高自己巩固自己的知识，当然也可以帮助广大 JS 程序员日常的工（zhuang）作（bi）效率。

虽说进阶大牛需要了解高深的的知识点，但是了解细节还是很重要的，特别是基础知识一定要透彻了解，这样才能一步一个台阶达到大牛阶级。所以知识点主要分为两块：**ES6 的语法**，**JavaScript 常见设计模式**

## 单例模式

**单例模式的两个条件：** 只有一个实例，全局访问

**常见使用场景：** 网页的对话框，数据的缓存

## 观察者模式

当观察的数据对象发生变化的时候，自动调用相应的函数。

**常见使用场景：** vue 双向数据绑定

## 发布-订阅模式

事件发布/订阅模式 (PubSub) 在异步编程中帮助我们完成更松的解耦，甚至在 MVC、MVVC 的架构中以及设计模式中也少不了发布-订阅模式的参与。

**常见使用场景：** jquery 事件触发
**优点：** 在异步编程中实现更深的解耦
**缺点：** 过多使用发布订阅模式会增加维护难度

TODO:

- 理解递归和深度优先，广度优先搜索

## 运行查看

```shell
  yarn install
  yarn run serve
```
