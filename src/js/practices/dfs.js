// DFS 深度优先遍历
/** 遍历节点如下：
  <div class="root">
      <div class="container">
          <section class="sidebar">
              <ul class="menu">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
          </section>
          <section class="main">
              <article class="post"></article>
              <p class="copyright"></p>
          </section>
      </div>
  </div>
 */
console.info(`
  深度优先遍历结果：
    DIV .root
    DIV .container
    SECTION .sidebar
    UL .menu
    SECTION .main
    ARTICLE .post
    P .copyright
`);

// 递归实现
function deepTraversal(node, nodeList = []) {
  if (node) {
    nodeList.push(node);
    var children = node.children;
    //每次递归的时候将需要遍历的节点和节点所存储的数组传下去
    for (let child of children) deepTraversal(child, nodeList);
  }
  return nodeList;
}
console.log(deepTraversal(document.querySelector(".root")));

// 非递归实现
function deepTraversal2(node) {
  var nodeList = [];
  if (node) {
    var stack = [];
    stack.push(node);
    while (stack.length != 0) {
      var childrenItem = stack.pop();
      nodeList.push(childrenItem);
      var childrenList = childrenItem.children;
      for (var i = childrenList.length - 1; i >= 0; i--)
        stack.push(childrenList[i]);
    }
  }
  return nodeList;
}

console.log(deepTraversal2(document.querySelector(".root")));
