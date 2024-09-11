function palindrome(str){
    let splitor = str.split("");
    let reversed = splitor.reverse();
    let reversedStr = reversed.join("");
    if(str === reversedStr){
        return true;
    }
    else{
        return false;
    }
}
console.log(palindrome("racecar"));
console.log(palindrome("uri"));