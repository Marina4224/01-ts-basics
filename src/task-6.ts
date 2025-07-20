function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}


const firstNumber = getFirstElement<number>([1, 2, 3]);           
const firstString = getFirstElement<string>(["a", "b", "c"]);     
const firstBoolean = getFirstElement<boolean>([true, false]);    


const firstMixed = getFirstElement<number | string | boolean>([1, "a", true]);
console.log(firstNumber);   
console.log(firstString);   
console.log(firstBoolean);  
console.log(firstMixed); 