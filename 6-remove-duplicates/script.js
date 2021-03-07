function removeDuplicates(str) {
  var result = ''
  for (let i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  return result;
} 

console.log(removeDuplicates('aabcc'))