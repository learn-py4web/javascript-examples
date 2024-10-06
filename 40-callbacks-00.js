function do_something_slow(x) {
  setTimeout(function() {
    let y = x * 2; // Result of some supposedly slow computation.
    return y;
  }, 1000);
}

y = do_something_slow(3);
console.log("The result is ", y);
