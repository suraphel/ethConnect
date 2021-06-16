
//import './SignIn.css'
import Card from './Card';
import classes from './Adduser.module.css'
import Button from './Button'


const SignIn = (props) => {

    const signInHandler = (event) =>{
    event.preventDefault();         
    }

    // Adding password toggler 

    // const mytoggler = () =>{
    //     let x = document.getElementById("myinput");
    //     if(x.type === "password"){
    //         x.type = "text"; 
    //     }else {
    //         x.type = "password"; 
    //     }

    // }

    return(
        <Card className={classes.input}>        
            <form onSubmit = {signInHandler}> 
                <label  htmlFor="username">   Username      </label>            
                    <input type="email" placeholder="email" />               

                <label htmlFor="password">Password </label>  
                    <input type="password" placeholder="Password"
                     value = "" id="myinput"/>
                    <Button type ="submit"> SIGN IN </Button>
                    {/* <input type="checkbox" onClick={mytoggler}> Show Password</input> */}
            </form>       
        </Card>
    );
}

export default SignIn; 