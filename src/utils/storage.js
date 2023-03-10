/**
 * 存储sessionStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.sessionStorage.getItem(name);
}

/**
 * 删除sessionStorage
 */
export const removeStore = name => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
}

/**
 * 存储 localStorage
 */
export const setLocalStorage = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取 localStorage
 */
export const getLocalStorage = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

/**
 * 删除 localStorage
 */
export const removeLocalStorage = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}


/**
 *
 * @type {{get: (function(*=): *), set: CookieUtil.set, unset: CookieUtil.unset}}
 */
export const CookieUtil = {
    //读取cookie，判断某个cookie是否存在。
    //读取操作配合 unclekeith=21; sex=boy 这个cookie会更好理解读取cookie的操作。
    get: function (name) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    getToken: function () {
        let name = 'token';
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    //写入cookie。
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) + "=" +
            encodeURIComponent(value);
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    },
    //删除cookie
    unset: function (name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    },

    delcookies: function (name) {
        this.set(name, ' ', -1);
    }
};