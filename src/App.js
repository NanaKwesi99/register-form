import './App.css';

function App() {
  return (
    <form style={{textAlign: "center"}}>
     <div>
       <label>FirstName</label>
       <br />
       <input type="text" name="firstname" />
       <br />
       <label>LastName</label>
       <br />
       <input type="text" name="lastname" />
       <br />
       <label>Email</label>
       <br />
       <input type="text" name="Email" />
       <br />
       <label>Phone number</label>
       <br />
       <input type="text" name="phone number" />
       <br />
       <label>Gender</label>
       <br />
       <select>
         <option>Male</option>
         <option>Female</option>
       </select>
       <br />
     </div>
     <br />
     <button type="submit" style={{color: "orange"}}>Submit</button>
    </form>
  );
}

export default App;
