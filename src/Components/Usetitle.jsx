import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`${title}-Food Lovers`
    },[title])
}

export default useTitle