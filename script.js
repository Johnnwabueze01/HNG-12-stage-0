function updateUTCTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    utcTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
