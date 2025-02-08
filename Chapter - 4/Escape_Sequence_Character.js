// Escape Sequence Character

// let Name = 'Tej'as Joshi'    <<--- Error 
// let Name = "Tej"as Joshi"    <<--- Error 

let Name = 'Tej\'as Joshi'  // <---- (\) not count
console.log(Name)           // Tej'as Joshi
console.log(Name.length)    // 12

let Surname = "Tej\"as Joshi"  // <---- (\) not count
console.log(Surname)           // Tej"as Joshi
console.log(Surname.length)    // 12



let Game = `Gta\tVice\tCity`
console.log(Game)   // Gta     Vice    City


let game = `Gta\nVice\tCity`
console.log(game)   
// Gta
// Vice    City