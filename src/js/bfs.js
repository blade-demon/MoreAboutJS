// 链接：https://juejin.im/post/58f558efac502e006c3e5c97
// Breadth-first search （深度优先遍历）
/** 遍历节点如下：
 *
  <div class="root">
      <div class="container">
          <section class="sidebar">
              <ul class="menu"></ul>
          </section>
          <section class="main">
              <article class="post"></article>
              <p class="copyright"></p>
          </section>
      </div>
  </div>
 */
console.info(`广度优先遍历结果：
  DIV .root
  DIV .container
  SECTION .sidebar
  SECTION .main
  UL .menu
  ARTICLE .post
  P .copyright
`);

function traverse(rootNode) {
  const queue = [rootNode];
  while (queue.length) {
    const node = queue.shift();
    printNodeInfo(node);
    if (!node.children.length) {
      continue;
    }
    Array.from(node.children).forEach(x => queue.push(x));
  }
}

function printNodeInfo(node) {
  console.log(node.tagName, `.${node.className}`);
}

// 开始遍历
traverse(document.querySelector(".root"));
