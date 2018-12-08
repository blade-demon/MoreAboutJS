// // 发布订阅模式
// function Publisher() {
//   this.listeners = [];
// }

// Publisher.prototype = {
//   addListener: function(listener) {
//     this.listeners.push(listener);
//   },
//   removeListener: function(listener) {
//     delete this.listeners[listener];
//   },
//   notify: function(obj) {
//     for (let i = 0; i < this.listeners.length; i++) {
//       var listener = this.listeners[i];
//       if (typeof listener !== "undefined") {
//         listener.process(obj);
//       }
//     }
//   }
// };

// function Subscriber() {}

// Subscriber.prototype = {
//   process: function(obj) {
//     console.log(obj);
//   }
// };

// var publisher = new Publisher();
// publisher.addListener(new Subscriber());
// publisher.addListener(new Subscriber());

// publisher.notify({ name: "michaelqin", ageo: 30 }); // 发布一个对象到所有订阅者
// publisher.notify("2 subscribers will both perform process"); // 发布一个字符串到所有订阅者

function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
  },
  unsubscribe: function(fn) {
    this.observers = this.observers.filter(observer => {
      if (observer != fn) {
        return observer;
      }
    });
    console.log(`You are now unsubscribe from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(observer) {
      observer.call();
    });
  }
};

const observer = new EventObserver();
document.body.innerHTML = `<h1>观察者订阅者模式</h1>`;
document.write(`
<div>
  <button class="sub-ms">Sub ms</button>
  <button class="unsub-ms">Unsub ms</button>

<br/>
    <button class="sub-s">Sub s</button>
  <button class="unsub-s">Unsub s</button>
  <br />
  <button class="fire">Fire</button>
</div>`);

document.querySelector(".sub-ms").addEventListener("click", function() {
  observer.subscribe(getMilliseconds);
});

document.querySelector(".unsub-ms").addEventListener("click", function() {
  observer.unsubscribe(getMilliseconds);
});

document.querySelector(".fire").addEventListener("click", function() {
  observer.fire();
});

document.querySelector(".sub-s").addEventListener("click", function() {
  observer.subscribe(getSeconds);
});

document.querySelector(".unsub-s").addEventListener("click", function() {
  observer.unsubscribe(getSeconds);
});

// click handler
const getMilliseconds = () => {
  console.log("Current milliseconds: ", new Date().getMilliseconds());
};

function getSeconds() {
  console.log("Current seconds: " + new Date().getSeconds());
}
