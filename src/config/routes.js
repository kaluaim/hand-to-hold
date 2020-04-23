export const ROOT_PATH = `/hand-to-hold`
export const LOGIN_PATH = `/hand-to-hold/login`
export const DASHBOARD_PATH = `/hand-to-haold/dashboard`
export const PROFILE_PATH = `/hand-to-hold/profile`


export const isPublicRoute = () => {
    const publicRoutes = [LOGIN_PATH]
    return publicRoutes.includes(window.location.pathname)
}