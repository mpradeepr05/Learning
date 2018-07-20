// var numb = 2;

// for (let i = 0; i < 10; i++) {
//     if(i==0){
//         console.log(
//             numb + " X " + i +" = 1"
//         );
//     }else{
//         console.log(
//             numb + " X " + i +" = "+ i*numb
//         );
//     }
//     numb + " X " + i +" = "+ i*numb
    
// }



// for (let i = 1; i < 20; i++) {
//     if (i%2===0) {
//         console.log(i+" this number is even")
//     }
//     else{
//         console.log(i+" this number is odd")
//     }
// }




// function isPalindrome(str) {
//     var splitString = str.split("")
//     var reverseArray = splitString.reverse().join("");
//     if (str === reverseArray) {
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
// }
// isPalindrome("ABCBA");


var array = [1,1,2,3,1,4,4,6,6,3];
var blArray = [];
for (let i = 0; i < array.length; i++) {
    if (blArray.indexOf(array[i])===-1){
        console.log(array[i]);
        // console.log(blArray[i]);
        blArray.push(array[i])
    }
}