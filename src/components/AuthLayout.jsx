import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({ children, RouteNeedsAuthentication = true }) => {

  const navigate = useNavigate()
  const [loader, setLoader] = useState(true)
  const authStatus = useSelector(state => state.auth.status)


  useEffect(() => {
    if (RouteNeedsAuthentication && authStatus !== RouteNeedsAuthentication) {
      navigate("/login")
    } else if (!RouteNeedsAuthentication && authStatus !== RouteNeedsAuthentication) {
      navigate("/")
    }
    setLoader(false)
  }, [authStatus, navigate, RouteNeedsAuthentication])


  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected