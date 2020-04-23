/**
 * Local storage client for adding and fetching data
 */

export const getUserToken = () => {
    return localStorage.getItem('userToken')
}

export const setUserToken = userToken => {
    console.log(`Saving user token to storage... (${userToken})`)
    localStorage.setItem('userToken', userToken)
}

export const removeUserToken = () => {
    console.log(`Removing user token from storage.`)
    localStorage.removeItem('userToken')
}

export const getUserName = () => {
    return localStorage.getItem('userName')
}

export const isLoggedIn = () => {
    // TODO validate token with backend
    if (getUserToken()) {
        return true
    }

    return false
}