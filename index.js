const input = document.getElementById("palindrome-input")
const button = document.getElementById("button") 


button.addEventListener("click", (e) =>
        {
   e.preventDefault();
   console.log(input.value);
   
   if(input.value === input.value.split('').reverse().join('')){
    alert(`${input.value} is a palindrome`)
   }
   else{
    alert(`${input.value} is not a palindrome`)
    }
})