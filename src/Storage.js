
export function setInLocalStorage(name, value){
    localStorage.setItem(name, JSON.stringify(value))
}

export function getLocalStorageData(name){
    return JSON.parse(localStorage.getItem(name))
}

export function clearLocalStorage(name){
    localStorage.removeItem(name)
}