function validEmail(str) {
  if (!str) return false;

  const regex = /^[\w.-]+@[\w-]+(\.[\w-]{2,})+$/;

  return regex.test(str);
}
console.log(validEmail('abc@example.com'));     
console.log(validEmail('xyz@abc.com.in'));  
console.log(validEmail('john.doe@com.'));       
console.log(validEmail('@example.com'));        
console.log(validEmail(''));