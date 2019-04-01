/**
 * 节流：
 */
import { loremIpsum } from "lorem-ipsum";

const newList = Array(100)
  .fill()
  .map(index => ({
    id: index,
    name: "John Doe",
    image: "http://via.placeholder.com/40",
    text: loremIpsum({
      count: 1,
      units: "sentences",
      sentenceLowerBound: 4,
      sentenceUpperBound: 8
    })
  }));

document.body.innerHTML = `
  <ul class="list-group">
    ${newList.reduce(
      (result, item) =>
        result + `<li class="list-group-item">${item.text}</li>`,
      ""
    )}
  </ul>
`;

const throFun = () => console.log("hello");
const thro = throttle(throFun, 1000);
document.body.onscroll = () => {
  thro(); // 调用至少间隔 300 毫秒才会触发一次
};

/**
 * 节流函数 限制函数在指定时间段只能被调用一次
 * 用法 比如防止用户连续执行一个耗时操作 对操作按钮点击函数进行节流处理
 */
function throttle(func, wait) {
  let timer = null;
  return function(...args) {
    if (!timer) {
      func(...args);
      timer = setTimeout(() => (timer = null), wait);
    }
  };
}

/**
 * 函数调用后不会被立即执行 之后连续 wait 时间段没有调用才会执行
 * 用法:如处理用户输入
 */
function debounce(func, wait) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  };
}

// document.body.innerHTML = `
//   <button id="btn">点击</button>
// `;

// document.body.addEventListener(
//   "click",
//   debounce(function(e) {
//     console.log("click");
//   }, 3000)
// );
