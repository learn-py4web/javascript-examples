function do_something_slow(x) {
  setTimeout(function() {
    let y = x * 2; // Result of some supposedly slow computation.
    callback(y);
  }, 1000);
}

function callback(x) {
  console.log("The result is ", x);
}

do_something_slow(3);