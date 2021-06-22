import React from 'react'
import './App.css';

const App = () => {
  return (
    <div>
      <header id="header">
            <div class="title">
              <h1 class="heading"> SWaG</h1>
              <h2 class="heading">Action.  Not just Education.</h2>
              <br/>
              <h2>We are coming soon</h2>
              <a class="smoothscroll" href="#contact">
              <div class="mouse">
                <div class="wheel"></div>
              </div>
              </a> </div>
            <a class="smoothscroll" href="#contact">
            <div class="scroll-down"></div>
            </a> 
        </header>
            

          <section id="team">
            <div class="container">
              <div class="row">
                <h1>Meet the Team</h1>
                <div class="block"></div>
                <h2>Leadership</h2>
              </div>
              <div class="row">
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                  <h4>Lorem Ipsum</h4>
                  <p>Founder</p>
                </div>  
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                  <h4>Lorem Ipsum</h4>
                  <p>Founder</p>
                </div>
                </div>
            </div>
          </section>
          
          
          <section id="coreteam">
            <div class="container">
              <h1>Core Team</h1>
              <div class="block"></div>
              <div class="row">
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>    
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>    
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>    
                </div>
                <div class="row">
                    <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>    
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                </div>          
                
              </div>
                   
            </div>
          </section>
          
          <section id="advisor">
            <div class="container">
              <h1>Advisor</h1>
              <div class="block"></div>
              <div class="row">
                <div class="three columns"> <img src="http://placehold.it/220x220" width="220" height="220" alt=""/>
                    <h4>Lorem Ipsum</h4>
                    <p>Founder</p>
                     </div>
                

                </div>
            </div>
          </section>
          
         
          
          
          <section id="contact">
            <div class="container">
              <h1>Contact</h1>
              <div class="block"></div>
              <form>
                <div class="row">
                  
                  <div class="six columns">
                    
                    <input class="u-full-width" type="email" placeholder="Email"/>
                    </div>
                  &emsp;&emsp;
                  <input class="button-primary" type="submit" value="Notify Me"/>
                
                  
                  </div>
                  
                  
              </form>
            </div>
          </section>
          
          
          
          <footer>
            <div class="container">
              <div class="nine columns">
                <p>Reach out to us at email@email.com</p>
              </div>
            
            </div>
          </footer>
    </div>
  )
}

export default App
