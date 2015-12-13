
// add two numbers without using +
function add(a,b) {
     if(b == 0)
         return a;
     var sum = a ^ b;
     var carry = (a & b) << 1;
     return add(sum,carry);
}

console.log('Sum of 2 & 5 is',add(2,5));