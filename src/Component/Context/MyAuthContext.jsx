import { createContext, useState } from "react";


export const MyAuthContext = createContext(); 

function AuthContextProvide({children}) {
 
const[lang, setLang]= useState(false);
// console.log(lang)

const[isAuth, setIsauth] = useState(false);
console.log(isAuth);



const language= () =>{
    setLang(true)
}
    return(
        // value is used for send info
     <MyAuthContext.Provider value = {{language,lang ,setLang, isAuth, setIsauth}}>{children}</MyAuthContext.Provider>
    )
}

export default AuthContextProvide;