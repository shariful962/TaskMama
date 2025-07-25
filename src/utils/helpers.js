export const getToken = () => {
    return localStorage.getItem('authToken');
}

export const setToken = (token) => {
    if (localStorage.setItem('authToken', token)) return true;
}

export const getLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    return value || false;
}

export const setLocalStorage = (key, value) => {
    try {
        localStorage.setItem(key.value)
        return true
    } catch (error) {
        return error;
    }
}

export const addClass = (className) =>{
    document.documentElement.classList.add(className)
}

export const removeClass = (className)=>{
    document.documentElement.classList.remove(className)
}