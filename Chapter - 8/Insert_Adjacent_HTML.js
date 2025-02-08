
// 1) "beforeend"   <--- Insert HTML into element at the end

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
// a.insertAdjacentHTML('beforeend','<div><p>Tejas Joshi😎😎</p></div>')


// Screen After :- 
                    // Before the Container              Before the Container 
                    // ____________________              <hr>
                    // Start of the Container            <div class="container"> 
                    // Middle of the Container               Start of the Container 
                    // End of the Conatiner                  <div class="first">Middle of the Container</div> 
                    // Hello World 😎😎                     End of the Conatiner  
                    // ____________________                  <div>
                    // After the Container                       <p>Hello World😎😎</p>
                    //                                       </div>
                    //                                   </div>
                    //                                   <hr>
                    //                                   After the Container 














// 2) "beforebegin"         <--- Insert HTML immdiately before element


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


// let a = document.getElementsByTagName('div')[0]
// a.insertAdjacentHTML('beforebegin','<div><p>Tejas Joshi😎😎</p></div>')


// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Hello World 😎😎                 <div>
                // Start of the Container                 <p>Hello World😎😎</p>
                // Middle of the Container           </div>
                // End of the Conatiner              <div class="container"> 
                // ___________________                      Start of the Container 
                // After the Container                      <div class="first">Middle of the Container</div> 
                //                                          End of the Conatiner  
                //                                   </div> 
                //                                   <hr>
                //                                   After the Container












// 3) "afterbegin"      <---- Insert HTML into element at the begining

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

// let a = document.getElementsByTagName('div')[0]
// a.insertAdjacentHTML('afterbegin','<div><p>Tejas Joshi😎😎</p></div>')


// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Hello World 😎😎                 <div class="container"> 
                // Start of the Container                <div>
                // Middle of the Container                    <p>Hello World😎😎</p>
                // End of the Conatiner                  </div>
                // ___________________                   Start of the Container 
                // After the Container                   <div class="first">Middle of the Container</div> 
                //                                       End of the Conatiner  
                //                                   </div>
                //                                   <hr>
                //                                   After the Container 



















// 4) "afterend"        <---- Insert HTML immediately after element


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

// let a = document.getElementsByTagName('div')[0]
// a.insertAdjacentHTML('afterend','<div><p>Tejas Joshi😎😎</p></div>')


// Screen After :- 
                // Before the Container              Before the Container 
                // ____________________              <hr>
                // Start of the Container            <div class="container">
                // Middle of the Container                Start of the Container
                // End of the Conatiner                   <div class="first">Middle of the Container</div>  
                // Hello World 😎😎                      End of the Conatiner 
                // ___________________               </div>       
                // After the Container               <div>        
                //                                        <p>Hello World😎😎</p>
                //                                   </div>                
                //                                   <hr>
                //                                   After the Container   











// 5) ele.remove()    <--- Used to Remove the node if present


let a = document.getElementsByTagName('div')            // undefined
a                                                       // HTMLCollection(2) [div.container, div.first]
let b = a[0]                                            // undefined
b                                                       // <div class=​"container">​…​</div>​
b.remove()                                              // undefined
// div tag containing class="container" will be removed 