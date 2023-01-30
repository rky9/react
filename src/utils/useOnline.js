import { useEffect, useState } from 'react'

const useOnline = ()=> {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true)
        }
        const handleOfline = ()=>{
            setIsOnline(false)
        }
        window.addEventListener("online",handleOnline)
        window.addEventListener("ofline",handleOfline)

        return(()=>{
        window.removeEventListener("online", handleOnline)
        window.removeEventListener("offline", handleOfline)
        })
    },[])
  return isOnline
}

export default useOnline