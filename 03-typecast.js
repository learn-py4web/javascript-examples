// "0" is a string. I can add a 1 by making the 1 a string, then concatenating. 
// int -> string, string operator.  Converting rhs to lhs, then operator. 
console.log("0" + 1);

// - is not a string operator. 
// So js makes sense of this, by asking: can I convert each rhs, lhs, to a type
// to which I can apply -?  Yes, convert both to numbers. 
console.log("0" - 1);

function pages (current_page) {
    let next_page = current_page + 1;
    let previous_page = current_page - 1;
    console.log(next_page, previous_page);
}

function safe_pages (current_page) {
    let c = Number(current_page);
    let next_page = c + 1;
    let previous_page = c - 1;
    console.log(next_page, previous_page);
}

let my_page = "10"; // This really comes from eg. a network call. 
pages(my_page);
safe_pages(my_page);

