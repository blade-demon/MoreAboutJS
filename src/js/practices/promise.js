class MyPromise {
  constructor(execFunc) {
    this.status = "pending";
    this.value = undefined;
    this.reason = undefined;

    this.promiseChain = [];

    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    execFunc(this.onResolve, this.onReject);
  }

  onResolve(value) {
    if (this.status === "pending") {
      this.value = value;
      this.status = "resolved";
      this.promiseChain.forEach(nextFunc => nextFunc(this.value));
    }
  }

  onReject(reason) {
    if (this.status === "pending") {
      this.reason = reason;
      this.status = "rejected";
      self.onRejectedArray.forEach(nextFunc => nextFunc(this.reason));
    }
  }

  then(onResolve, onReject) {
    switch (this.status) {
      case "pending":
        this.promiseChain.push(() => onResolve(this.value));
      case "resolved":
        onResolve(this.value);
        break;
      case "reject":
        onReject(this.reason);
        break;
      default:
    }
  }
}

new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve(1);
  }, 1000);
}).then(function(x) {
  console.log(x);
});

// myPromise.deferred = function() {
//   let dfd = {};
//   dfd.promise = new myPromise(function(resolve, reject) {
//     dfd.resolve = resolve;
//     dfd.reject = reject;
//   });
//   return dfd;
// };

// module.exports = myPromise;
