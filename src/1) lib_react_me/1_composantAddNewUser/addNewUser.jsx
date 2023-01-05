import { useState } from "react";
import { checkCreateEmail, checkCreatePass } from "./utile/checker";
import ComposantButtonDontTuchMe from '../btn/1_composantButtonDontTuchMe/ComposantButtonDontTuchMe'




function ComposantAddNewUser()
{
    let [user, setUser] = useState({
        email:"",
        pass:"",
        checkPass:"",
    })
    let [error, setError] = useState({error:1, message:<h5 style={{color:"var(--primary_1)"}}>Your turn to play !</h5>})
    let [btn, setbtn] = useState(false)


    function checker(my_user)
    {
        let email = checkCreateEmail(my_user);
        let pass = checkCreatePass(my_user);
        if (email.code < 0)
             setError({error:1, message:<h5 style={{color:"red"}}>{email.message}</h5>});
        else if (pass.code < 0)
            setError({error:1, message:<h5 style={{color:"red"}}>{pass.message}</h5>});
        else
            setError({error:0, message:<h5 style={{color:"var(--primary_1)"}}>Your turn to play !</h5>});
 
    }
    function handleSaveUserTmp(e)
    {
        let tmpUser = {
            ...user,
            [e.target.name]:e.target.value,
        };
        setUser({
            ...user,
            [e.target.name]:e.target.value,
        })
        checker(tmpUser)
    }
    function handleSaveUser(e)
    {
        alert("Welcome !");
    }
    return (
        <form className="gate_ver my_form">
            <h4>Create your profile</h4>
            {error.message}
            <h5 className="gray_h4">Your email</h5>
            <input onInput={(e) => {handleSaveUserTmp(e);}} type='text' name='email'/>
            <h5 className="gray_h4">Your passWord</h5>
            <input onInput={(e) => {handleSaveUserTmp(e);}} type='text' name='pass'/>
            <h5 className="gray_h4">Copy your password</h5>
            <input onInput={handleSaveUserTmp} type='text' name='checkPass'/>
            <ComposantButtonDontTuchMe ftOnClick={handleSaveUser} bool={error.error > 0 ?false:true}/>
        </form>
    );
}

export default ComposantAddNewUser;