async function f() {
    return 1;
};
f().then(function(result) { // (**)
  
    console.log(result); // 1
    return result * 2;
  
}).then(function(result) { // (***)
  
    console.log(result); // 2
    return result * 2;
  
}).then(function(result) {
  
    console.log(result); // 4
    return result * 2;
  
});
