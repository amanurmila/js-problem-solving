function reversedString(string){
    let splitor = string.split("");
    let reversed = splitor.reverse();
    let finalResult = reversed.join("");
    return finalResult;
}
// console.log(reversedString("urmi"));



function reverseString(str){
    let splited = str.split("");
    let finalResult = [];
    for(let i = 0; i < splited.length; i++){
        finalResult.unshift(splited[i]);
    }
    return finalResult.join("");
}

// console.log(reverseString("aman"));



function reverseString(str){
    let splited = str.split("");
    let finalResult = [];
    for(let arr of splited){
        finalResult.unshift(arr);
    }
    return finalResult.join("");
}
console.log(reverseString("israt"));