export function SaveDataLocalStorage(key, valuer){
    try {
        localStorage.setItem(key, JSON.stringify(valuer))
    } catch (error) {
        console.error("could not save data", error )
    }
}
export function getDataLocalStorage(key){
    const data = localStorage.getItem(key);
    if (data == null) {
        return null
    }
    return JSON.parse(data);
}
