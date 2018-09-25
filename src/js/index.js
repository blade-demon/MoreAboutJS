// 利用代理模式实现：图片预加载
const myImage = (function() {
  const imageNode = document.createElement("img");
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
    // 网络图片加载完成以后再替换本地图片
    myImage.setSrc(this.src);
  };

  return {
    setSrc: function(src) {
      // 设置本地图片
      myImage.setSrc("img/150x150.png");
      // 设置src
      image.src = src;
    }
  };
})();

// myImage.setSrc("./img/150x150.png");

proxyImage.setSrc(
  "https://images.unsplash.com/photo-1537779948435-62e7e105ce9a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8dd9a54faeb6025f7b627b8a2099d212&auto=format&fit=crop&w=1567&q=80"
);
