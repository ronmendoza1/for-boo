
const START = new Date(2020, 7, 27, 0, 0, 0);

const MS_SECOND = 1000;
const MS_MINUTE = MS_SECOND * 60;
const MS_HOUR = MS_MINUTE * 60;
const MS_DAY = MS_HOUR * 24;

const el = id => document.getElementById(id);

function update() {
    const now = new Date();

    // Whole months completed
    let totalMonths =
        (now.getFullYear() - START.getFullYear()) * 12 +
        (now.getMonth() - START.getMonth());

    let anchor = new Date(START.getFullYear(), START.getMonth() + totalMonths, START.getDate());
    if (anchor > now) {
        totalMonths--;
        anchor = new Date(START.getFullYear(), START.getMonth() + totalMonths, START.getDate());
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    // Time since the last 27th
    let diff = now - anchor;
    const days = Math.floor(diff / MS_DAY);       diff -= days * MS_DAY;
    const hours = Math.floor(diff / MS_HOUR);     diff -= hours * MS_HOUR;
    const minutes = Math.floor(diff / MS_MINUTE); diff -= minutes * MS_MINUTE;
    const seconds = Math.floor(diff / MS_SECOND);

    el("years").textContent = years;
    el("months").textContent = months;
    el("days").textContent = days;
    el("hours").textContent = String(hours).padStart(2, "0");
    el("minutes").textContent = String(minutes).padStart(2, "0");
    el("seconds").textContent = String(seconds).padStart(2, "0");
}

update();
setInterval(update, 1000);