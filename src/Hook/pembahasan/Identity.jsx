import { useCallback, useEffect, useState } from "react";

const Identity = () =>{
    const fetchUser = useCallback(() => ['Edi', 'Aldo'],[]);
     let [user, setUser] = useState ([]);

    useEffect(()=>{
        const data =fetchUser();
        setUser(data);
    },[fetchUser])
    return(
        <div>
            <ul>
                {
                    user.map(u => <li key={u}>{u}</li>)
                }
                
            </ul>
        </div>
    )
}

export default Identity;