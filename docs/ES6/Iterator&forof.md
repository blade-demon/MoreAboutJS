# Iterator（遍历器）的概念

JavaScript原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object）,ES6有添加了Map和Set。这样就有了四种数据集合，用户还可以组合使用他们，定义自己的数据结构。比如数组的成员是Map, Map的成员是对象。这样就需要一种统一的接口机制，来处理不同的数据结构。

Iterator遍历器就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构的成员只要部署Iterator接口，就可以完成遍历操作（即依次处理数据结构的所有成员）。

##  Iterator的作用有三个：

  - 为各种数据结构提供同意的，简单的访问接口；
  - 使得数据结构的成员能够按照某种次序排列；
  - 三是ES6创造了一种新的遍历命令for...of,Iterator接口主要供for...of消费；

## Iterator的遍历过程是这样的。

  - 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象的本质就是一个指针对象。
  - 第一次调用指针对象的next方法，可以将指针就指向数据结构的第一个成员。
  - 第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
  - 不断调用指针对象的next方法，直到他指向数据结构的结束位置。