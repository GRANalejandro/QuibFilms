import { useEffect } from 'react'
import useAuth from './useAuth'
import { Route, useHistory, useLocation } from 'react-router-dom'
// import Loading from './Loading/Loading'

const RoutePrivate = ({ children, ...rest }) => {
    const history = useHistory()
    const location = useLocation()
    const { isAuthenticated } = useAuth()

    useEffect(() => {
        if (!isAuthenticated) {
            localStorage.setItem('redirect', location.pathname)
            history.push('/iniciar-sesion')
        }
    }, [isAuthenticated, history, location.pathname])

    return <Route {...rest}>{children}</Route>
}

export default RoutePrivate