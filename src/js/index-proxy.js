// 利用代理模式实现：图片预加载
import PlaceholderImage from "../img/150x150.png";
import "../sass/style.scss";
// import "regenerator-runtime/runtime";

const myImage = (function() {
  const imageNode = document.createElement("img");
  imageNode.width = 300;
  imageNode.height = 300;
  document.body.appendChild(imageNode);
  return {
    setSrc: function(src) {
      imageNode.src = src;
    }
  };
})();

const proxyImage = (function() {
  const image = new Image();
  image.onload = function() {
    // 网络图片加载完成以后再替换本地图片, 模拟延时
    setTimeout(() => {
      myImage.setSrc(this.src);
    }, 1000);
  };

  return {
    setSrc: function(src) {
      // 设置本地图片
      myImage.setSrc(PlaceholderImage);
      // 设置src
      image.src = src;
    }
  };
})();

// myImage.setSrc(PlaceholderImage);

proxyImage.setSrc(
  "https://images.unsplash.com/photo-1537779948435-62e7e105ce9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8dd9a54faeb6025f7b627b8a2099d212&auto=format&fit=crop&w=1567&q=80"
);
