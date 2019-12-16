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
    console.log('Set: ');
    console.log(name, {[url]: obj});
    cacheObject(name, {[url]: obj});
}

// Parse the JSON object before reading it
export const getCachedObject = (name) => {
    let obj = JSON.parse(localStorage.getItem(name));
    return obj;
}

export const getCachedObjectByURL = (name, obj) => {
    let url = window.location.href.replace(window.location.search, '');
    console.log('Get: ');
    console.log(getCachedObject(name)[url]);
    return getCachedObject(name)[url];
}
