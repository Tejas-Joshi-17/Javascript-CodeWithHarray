let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if (key == "color" && value == "red" || value == "blue") {
        localStorage.removeItem(key)
        document.write(`Removing key = color & value ${value}`)
}

if (key == 0) {
    localStorage.clear()
    document.write(`Removing All Keys`)
}
