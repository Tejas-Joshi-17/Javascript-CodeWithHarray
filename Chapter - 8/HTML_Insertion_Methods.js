

// 1) node.append(e)    <--- appand at the end of the node

// Screen Before :- 
                    // Before the Container              Before the Container 
                    // ____________________              <hr>
                    // Start of the Container            <div class="container"> 
                    // Middle of the Container              Start of the Container 
                    // End of the Conatiner                 <div class="first">Middle of the Container</div> 
                    // ____________________                 End of the Conatiner  
                    // After the Container               </div>
                    //                                   <hr>
                    //                                   After the Container 


// let a = document.getElementsByTagName('div')[0]

// let div = document.createElement('div')
// div.innerHTML = '<h3>Hello World😎😎</h3>'
// a.appendChild(div)

// Screen After :- 
                    // Before the Container              Before the Container 
                    // ____________________              <hr>
                    // Start of the Container            <div class="container"> 
                    // Middle of the Container               Start of the Container 
                    // End of the Conatiner                  <div class="first">Middle of the Container</div> 
                    // Hello World 😎😎                     End of the Conatiner  
                    // ____________________                  <div>
                    // After the Container                       <h3>Hello World😎😎</h3>
                    //                                       </div>
                    //                                   </div>
                    //                                   <hr>
                    //                                   After the Container 









// 2) node.prepend(e)    <--- Insert at the begining of the node

// Screen Before :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Start of the Container            <div class="container"> 
                // Middle of the Container               Start of the Container 
                // End of the Conatiner                  <div class="first">Middle of the Container</div> 
                // ____________________                  End of the Conatiner  
                // After the Container               </div>
                //                                   <hr>
                //                                   After the Container 


// let b = document.getElementsByTagName('div')[0]

// let div = document.createElement('div')
// div.innerHTML = '<h3>Hello World😎😎</h3>'
// b.prepend(div)
                    
// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Hello World 😎😎                 <div class="container"> 
                // Start of the Container                <div>
                // Middle of the Container                    <h3>Hello World😎😎</h3>
                // End of the Conatiner                  </div>
                // ___________________                   Start of the Container 
                // After the Container                   <div class="first">Middle of the Container</div> 
                //                                       End of the Conatiner  
                //                                   </div>
                //                                   <hr>
                //                                   After the Container 









// 3) node.before(e)    <--- Insert before node

// Screen Before :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Start of the Container            <div class="container"> 
                // Middle of the Container               Start of the Container 
                // End of the Conatiner                  <div class="first">Middle of the Container</div> 
                // ____________________                  End of the Conatiner  
                // After the Container               </div>
                //                                   <hr>
                //                                   After the Container 

// let c = document.getElementsByTagName('div')[0]

// let div = document.createElement('div')
// div.innerHTML = '<h3>Hello World😎😎</h3>'
// c.before(div)
                    
// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Hello World 😎😎                 <div>
                // Start of the Container                 <h3>Hello World😎😎</h3>
                // Middle of the Container           </div>
                // End of the Conatiner              <div class="container"> 
                // ___________________                      Start of the Container 
                // After the Container                      <div class="first">Middle of the Container</div> 
                //                                          End of the Conatiner  
                //                                   </div> 
                //                                   <hr>
                //                                   After the Container









// 4) node.after(e)    <--- Insert after node

// Screen Before :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Start of the Container            <div class="container"> 
                // Middle of the Container               Start of the Container 
                // End of the Conatiner                  <div class="first">Middle of the Container</div> 
                // ____________________                  End of the Conatiner  
                // After the Container               </div>
                //                                   <hr>
                //                                   After the Container 

// let d = document.getElementsByTagName('div')[0]

// let div = document.createElement('div')
// div.innerHTML = '<h3>Hello World😎😎</h3>'
// d.after(div)
                    
// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Start of the Container            <div class="container">
                // Middle of the Container                Start of the Container
                // End of the Conatiner                   <div class="first">Middle of the Container</div>  
                // Hello World 😎😎                      End of the Conatiner 
                // ___________________               </div>       
                // After the Container               <div>        
                //                                        <h3>Hello World😎😎</h3>
                //                                   </div>                
                //                                   <hr>
                //                                   After the Container    


















// 5) node.replacewith(e)       <----- replaces node with the given node


// Screen Before :-
                    // Before the Container           
                    // ____________________             
                    // Start of the Container           
                    // Middle of the Container            
                    // End of the Conatiner       
                    // ____________________                
                    // After the Container                                      


let e = document.getElementsByTagName('div')[0]

let div = document.createElement('div')
div.innerHTML = '<h3>Hello World😎😎</h3>'
e.replaceWith(div)




// Screen After :-
                    // Before the Container           
                    // ____________________             
                    // Hello World 😎😎     
                    // ____________________                
                    // After the Container 