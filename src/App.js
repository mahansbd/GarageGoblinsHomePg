import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Garage Goblins';
  const message = "Welcome to our site";
  return (
    <div className="App">
      <Home></Home>
      <Navbar></Navbar>



      <div className="content">
        <h1>{title}</h1>  
        <p>{message}</p>
        <p><button>Find Parking</button>
        <button><a href="https://ccmonstage.universitytickets.com/">Purchase Parking</a> </button>
     
        <button>View Garages</button>
        <button><a href="https://ccmonstage.universitytickets.com/" target="_blank" rel="noreferrer" >Event Parking</a> </button></p>

                
            </div>    
        </div> 

   
    
  );
}

export default App;
