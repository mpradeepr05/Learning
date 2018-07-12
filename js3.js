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


var array = ("122")

for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[i] == array[j]) {
            console.log("true");
            // console.log(array[i]+"="+array[j])
        }
    }
    // if (arrSplit[i] == arrSplit[i+1]) {
    //     console.log(arrSplit[i]+arrSplit[i+1])
    // }
}


