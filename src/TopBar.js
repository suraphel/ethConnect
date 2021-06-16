 
import './TopBar.css'; 
import SignIn from './Registration/SignIn';
import { Link } from 'react-router-dom';

const TopBar = () => ( 
<header className= "toolbar">
<nav className = " navigation_toolbar">
   <div className= "toolbar_logo"> <a href="/"> Logo </a> </div>
   <div className = "spacer"/>
   <div className= "toolbar">  </div>   
   <div className= "toolbar_navItems">
        <ul>
           <li> <Link to="/SignIn">Sign in </Link>  </li>
           <li><Link to="/Employees">Post chore </Link></li> 
           <li><Link to="/Employers">Register Company</Link></li> 
       </ul>  
   </div>

</nav>           
</header>     
); 
export default TopBar








