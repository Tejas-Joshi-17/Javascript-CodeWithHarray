// Re-declaring a variable with var in a loop
function loopScopeVar() {
    for (var i = 0; i < 3; i++) {
        var loopVariable = "Hello from the loop!";
        console.log(loopVariable); // Hello from the loop!
    }
    console.log(loopVariable); // Hello from the loop!
}
loopScopeVar(); // Hello from the loop!
