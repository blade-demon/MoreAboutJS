// // 利用代理模式实现：图片预加载
// import PlaceholderImage from "../img/150x150.png";
// import "../sass/style.scss";
// // import "regenerator-runtime/runtime";

// const myImage = (function() {
//   const imageNode = document.createElement("img");
//   imageNode.width = 300;
//   imageNode.height = 300;
//   document.body.appendChild(imageNode);
//   return {
//     setSrc: function(src) {
//       imageNode.src = src;
//     }
//   };
// })();

// const proxyImage = (function() {
//   const image = new Image();
//   image.onload = function() {
//     // 网络图片加载完成以后再替换本地图片, 模拟延时
//     setTimeout(() => {
//       myImage.setSrc(this.src);
//     }, 1000);
//   };

//   return {
//     setSrc: function(src) {
//       // 设置本地图片
//       myImage.setSrc(PlaceholderImage);
//       // 设置src
//       image.src = src;
//     }
//   };
// })();

// // myImage.setSrc(PlaceholderImage);

// proxyImage.setSrc(
//   "https://images.unsplash.com/photo-1537779948435-62e7e105ce9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8dd9a54faeb6025f7b627b8a2099d212&auto=format&fit=crop&w=1567&q=80"
// );

// Proxy监听数据的变化

const arr = [1, 2, 3, 4];
const list = document.getElementById("list");
const btn = document.querySelector("btn");
// 渲染列表
const Render = {
  // 初始化
  init: function(arr) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      li.textContent = arr[i];
      fragment.appendChild(li);
    }
    list.appendChild(fragment);
  },
  // 我们只考虑了增加的情况,仅作为示例
  change: function(val) {
    const li = document.createElement("li");
    li.textContent = val;
    list.appendChild(li);
  }
};

const newArray = new Proxy(arr, {
  get: function(target, key, receiver) {
    console.log(`${key}`);
    return Reflect.get(target, key, receiver);
  },
  set: function(target, key, value, receiver) {
    console.log(target, key, value, receiver);
    if (key !== "length") {
      Render.change(value);
    }
    return Reflect.set(target, key, value, receiver);
  }
});

// push数字
document.querySelector("button").addEventListener("click", function() {
  newArray.push(6);
});

window.onload = function() {
  Render.init(arr);
};

console.log(arr);
