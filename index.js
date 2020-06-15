// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// b is an array variable
// a is a string variable


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = []
a.forEach(item => {
    item*=2
    b.push(item)
});
console.log(b);



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
//case 1
console.log(colors.join(' '));
//case 2
console.log(colors.join('+'));
//case 3
console.log(colors.join(','));


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
// quick sort
function quick(arr){
    if(arr.length<=1){
        return arr;
    }
    var left = [];
    var right = [];
    var k = arr.splice(0, 1)[0];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]<k){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quick(left).concat([k],quick(right));
}
console.log(quick(a));



// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var f = {};//所有字符出现的频次
var mostFC = '';//记录出现频次最大的字符
var key;
for (let i = 0; i < a.length; i++) {
    const c = a[i];
    if (!f[c]) {
        f[c] = 0;
    }
    f[c]++;
}
for (key in f) {
    if(mostFC == '' || f[mostFC] < f[key]){
        mostFC = key;
    }
}
console.log(mostFC);
