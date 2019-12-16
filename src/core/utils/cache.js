// Save the active page for when a user refreshes/logs back in
export const cachePage = (page) => {
    localStorage.setItem('lastPage', page);
}

// Stringify the JSON object before we cache it
export const cacheObject = (name, obj) => {
    localStorage.setItem(name, JSON.stringify(obj));
}

export const cacheObjectByURL = (name, obj) => {
    let url = window.location.href.replace(window.location.search, '');
    cacheObject(name, {[url]: obj});
}

// Parse the JSON object before reading it
export const getCachedObject = (name) => {
    let obj = JSON.parse(localStorage.getItem(name));
    return (obj) ? obj : {};
}

export const getCachedObjectByURL = (name, obj) => {
    let url = window.location.href.replace(window.location.search, '');
    let cache = getCachedObject(name);
    return (cache) ? cache[url] : {};
}
