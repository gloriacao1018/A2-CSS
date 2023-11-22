function acceptCookies() {
    document.getElementById("cookie-consent-text").textContent = "Cookies have been accepted.";
    document.getElementById("accept-cookies-button").style.display = "none";
    document.getElementById("revoke-cookies-button").style.display = "block";

}

function revokeCookies() {
    document.getElementById("cookie-consent-text").textContent = "Cookies have been revoked.";
    document.getElementById("accept-cookies-button").style.display = "block";
    document.getElementById("revoke-cookies-button").style.display = "none";
}
