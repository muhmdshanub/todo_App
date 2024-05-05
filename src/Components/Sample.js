import React from "react";



const Sample = () =>{

    const [isLogin,setIsLogin] = useState(false);


    const handleClick = () =>{
        if(!isLogin){
            setIsLogin(true);
        }else{
            setIsLogin(false);
        }
    }
    return(
        <>
            <p > {isLogin ? "Welcome user" : "Please Login"}</p>
            <button onClick={handleClick} >{isLogin ? "Logout" : "Login"}</button>
        
        </>
    )
}


export default Sample;