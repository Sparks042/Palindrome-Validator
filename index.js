let input = document.getElementById("palindrome-input")
let button = document.getElementById("button")
let inputValue = input.value.toLowerCase();
input.oninput = (e) => {
    e.target.value.toLowerCase()
}
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "" || input.value == "number") {
        alert("Please enter a word")
    }
    else if (input.value.toLowerCase() === input.value.toLowerCase().split('').reverse().join('')) {
        // alert(`${input.value.toLowerCase()} is a palindrome`)
        alert('Correct')
    }
    else {
        // alert(`${input.value.toLowerCase()} is not a palindrome`)
        alert('Incorrect')
    }
})