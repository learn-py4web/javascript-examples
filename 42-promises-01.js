function do_something_slow(x) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let y = x * 2; // Result of some supposedly slow computation.
      resolve(y);
    }, 1000);
  })
}

do_something_slow(2).then(function (x) {
  console.log("The result is ", x);
})
