function do_something_slow(x) {
  setTimeout(function() {
    let y = x * 2; // Result of some supposedly slow computation.
    callback(y);
  }, 1000);
}

function callback(x) {
  setTimeout(() => {
    let y = x + 2; 
    callback2(y);
  }, 1000);
}

function callback2(x) {
  setTimeout(() => {
    let y = x + 2; 
    callback3(y);
  }, 1000);
}

function callback3(x) {
  console.log("The result in the end is ", x);
}

do_something_slow(3);