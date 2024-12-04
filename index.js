const input = document.getElementById("palindrome-input")
const button = document.getElementById("button")


button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "" || input.value == "number") {
        alert("Please enter a word")
    }
    else if (input.value === input.value.split('').reverse().join('')) {
        input.value = input.value.toLowerCase();
        alert(`${input.value} is a palindrome`)
    }
    else {
        alert(`${input.value} is not a palindrome`)
    }
})