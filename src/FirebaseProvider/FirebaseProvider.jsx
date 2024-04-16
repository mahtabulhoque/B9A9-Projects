import { createContext } from "react";


const AuthContext = createContext(null)
const FirebaseProvider = ({children}) => {



    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
        
           
       
    );
};

export default FirebaseProvider;