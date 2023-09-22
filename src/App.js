import logo from './logo.gif';
import './App.css';

function Validation(val){
  const pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  if(val.value.match(pattern)) { 
    alert('Correct, try another...')
    return true;
  }
  else{ 
    alert('Wrong...!')
    return false;
  }
}

function App() {
  return (
    <div className="App">
      <div className="name-section">
         <center> <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{color:"white"}}>Nihilent Technologies Ltd.</h1> </center>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
      </div>
      <div className="form-section">
          <form name="form">
            <center><h1>Login</h1></center>
            
            <table>
              <tr>
                <td>Email:</td>
                <td><input type="email" required /></td>
              </tr>
              <tr>
                <td>Password:</td>
                <td><input type="password" name="password" required /></td>
              </tr>
              <input type="submit" className='submit' onClick={() => Validation(document.form.password)}/>
            </table>
          </form>
          <div className='new-user'>
           <center> New User? <a href='#' >Sign Up</a></center>
          </div>
      </div>
    </div>
  );
}

export default App;
