export function setCookie(name, value, days) {
    // Calculates the cookie's expiration date in milliseconds
    const now = new Date();
    now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000)); // days to milliseconds

    // Converts the expiration date to the required UTC format
    const expires = now.toUTCString();

    // Creates the cookie with the name, value, expiration date, and path
    document.cookie = name + "=" + value + "; expires=" + expires + "; path=/";
}

export function getCookie(name) {
    // Splits all cookies into an array, where each element is a "name=value" pair
    const cookiesArray = document.cookie.split('; ');

    // Iterates through each cookie to find the one with the specified name
    for (let cookie of cookiesArray) {
        // Splits each cookie into "name" and "value"
        const [cookieName, cookieValue] = cookie.split('=');

        // If the cookie name matches the searched name, returns the value
        if (cookieName === name) {
            return cookieValue;
        }
    }

    // If the cookie is not found, returns null
    return null;
}

export function checkCookie() {
    const theme = getCookie("theme");
    if (!theme) {
        // If the cookie dosent exist, define the default theme as light
        setCookie("theme", "light", 365); // for 1 year
        return "light";
    }
    return theme;
}