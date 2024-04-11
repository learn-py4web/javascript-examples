let f = function(x) {return x + 1};

console.log(f(1)); // 2


let g = (x) => {return x + 1};

let h = (x) => {
    let xp = x + 1;
    return xp;
}

let hh = (x) => x + 1;

console.log(g(1)); // 2

console.log(h(1)); // 2
console.log(hh(1)); // 2
