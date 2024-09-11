function findSimilar(str1, str2) {
  let split1 = str1.split(" ");
  let split2 = str2.split(" ");

  for(let i = 0; i < split1.length; i++){
    for(let j = 0; j < split2.length; j++){
        if(split1[i] === split2[j]){
            return split1[i];
        }
    }
  }
  return "nothing has found";
}

const str1 = "Muhammad Amanullah";
const str2 = "Amanullah love Hazrat Muhammad (SM)";

console.log(findSimilar(str1, str2));