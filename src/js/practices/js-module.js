// Standard Module Pattern

const UICtrl = (function() {
  let text = "This is a text set by module";

  // 模块私有方法
  const changeText = () => {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    // 从模块中导出的方法
    callChangeText: () => {
      changeText();
    }
  };
})();

// 调用UICtrl模块中的方法
UICtrl.callChangeText();

const ItemCtrl = (function() {
  const data = [];
  function add(item) {
    data.push(item);
    console.log("Item added...");
    console.log(data);
  }

  function get(id) {
    console.log("find id: " + id);
    return data.find(item => item.id === id);
  }

  return {
    add,
    get
  };
})();

ItemCtrl.add({ id: 1, name: "blade" });
ItemCtrl.add({ id: 2, name: "demon" });

console.log(ItemCtrl.get(10));
