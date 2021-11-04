import {useEffect} from "react"
import {useHistory} from "react-router-dom"

const useAuthorization =() => {
    const history = useHistory()

    useEffect(()=> {
        const token = localStorage.getItem("token")
        !token && history.push("/")

    },[history])

}
export default useAuthorization