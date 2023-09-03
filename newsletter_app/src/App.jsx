
import './App.css'
import page from  '../images/illustration-sign-up-desktop.svg';

export default function App() {
  return(
  <div className="container">
    <div className="purpose">
    <p className="main">Stay updated!</p>
    <p className="p1">Join 60,000+ product managers receives monthly<br/> updates on:</p>
    <ul>
      <li>Product discovery and building what matters</li>
      <li>Measuring to ensure updates are a success</li>
      <li>And much more!</li>
    </ul>
    <label for="fname">Email address</label>
    <input type="text" id="fname" placeholder="email@company.com"/>
    <button className ="bt">Subscribe to monthly newsletter</button>
    </div>
    
    
    <img className="newsLetter" src={page}/>
    
    </div>
  );
  
  
}
 