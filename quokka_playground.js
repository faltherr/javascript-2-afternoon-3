// function uniq(array, cb){
//     newArr = [];
//     for (var i = 0; i<array.length; i++){
//       if(array.includes(array[i])){
//         newArr.push(array[i])
//       }
//     } return cb(newArr);
//   }

// var tryThis = [5,7, 6, 5, 9];

// console.log(uniq(tryThis))

var myArr2 = [ 'alice', 'alice', 'bob', 'charlie', 'charlie', 'danielle', 'tester', 'tester', 'tester' ];
var myArr3 = [ 'alice', 'alice', 'bob', 'charlie', 'charlie', 'danielle', 'tester', 'tester', 'tester' ];

// var uniq = myArr2.filter(function(elem, index, self){
//     return index === self.indexOf(elem)
// })

// function uniq(arr){
//     var tmp = [];
//     for (var i = 0; i < arr.length; i++){
//         if (tmp.indexOf(arr[i]) == -1){
//             tmp.push(arr[i])
//         }
//     } return tmp;
// }

// console.log(uniq(myArr2))

var myArr = [ 'alice', 'bob', 'charlie', 'danielle', 'tester'];

function each(arr,cb){
    for (var i = 0; i < arr.length; i++){
        cb(arr[i], i)
    }

console.log(each(myArr,cb))