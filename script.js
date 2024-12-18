    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}`;

    const dayIndex = now.getDay();
    days.forEach((day, index) => {
    document.getElementById(day).classList.toggle('active', index === dayIndex);
});
}

    setInterval(updateClock, 1000);
    updateClock();
