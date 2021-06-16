import './App.css';
import { useState } from 'react';
import Employers from './Registration/Employers'
import Employees from './Registration/Employees'
import SearchBar from './SearchBar'
import TopBar from './TopBar'; 
// import ReactDom from 'react-dom'; 
import SignIn from './Registration/SignIn';
import {Route, Switch, Router} from 'react-router-dom'
import CompanyListing from './Registration/CompanyListing';

function App() {
  const [companyName, setCompanyName]=useState([]); 

  const AddEmployeerHandler = (uName, uTypeOfBusiness)=>{
    setCompanyName((preCompanyList)=> {
      return [...preCompanyList,{CompanyName: uName, 
        companyTypeOfBusiness: uTypeOfBusiness}];    
    });
  };

    return ( 
    <div className="App">      
       <TopBar/>
       <main style = {{marginTop: "163px"}}>
       </main>       

       <Switch>
        <Route exact path ="/">        
            <SearchBar/> 
        </Route>
          <Route  path = "/Employees">
          <Employers  
          formHeader="Please register your chores by fillig the form here undre  "  />
          </Route>
        <Route path = "/Employers">
         <Employees onEmployeer={AddEmployeerHandler}
         formHeader="Please register your company by fillig the form here undre  " />
        </Route>       
        <Route path = "/SignIn">
         <SignIn />
        </Route>                      
        </Switch>
        <CompanyListing companies={companyName}/>
    </div>

  );
}

// function App() {
//   return (
//   <Router history = {browserHistory}>
//     <div className="App">
//         <TopBar/>
//       <main style = {{marginTop: "63px"}}>
//         <Route path = "/" component = {App}/>            
//         <Route path = "/Employees" component={Employees} />
//         <Route path= "/Employer" component={Employers}/>   
//         <SearchBar/> 
//      </main>
// </div>
// </Router>  
//   );
// }

export default App;
