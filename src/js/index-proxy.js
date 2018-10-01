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

// Proxy: 代理就是新类调用老类的接口
function Person() {}

Person.prototype.sayName = () => console.log("Say name, this is Henry");
Person.prototype.sayAge = () => console.log("Say age, this is my age, 29");

function PersonProxy() {
  this.person = new Person();
  this.callMethod = functionName => {
    console.log("before proxy:", functionName);
    this.person[functionName](); // proxy
    console.log("after proxy:", functionName);
  };
}

var pp = new PersonProxy();
pp.callMethod("sayName"); // 代理调用Person的方法sayName()
pp.callMethod("sayAge"); // 代理调用Person的方法sayAge()
