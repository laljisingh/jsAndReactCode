const mnt = document.getElementById("month");
const dy = document.getElementById("day");
const dt = document.getElementById("date");
const yr = document.getElementById("year");

const date = new Date();
const year = date.getFullYear();
const dates = date.getDate();

yr.innerText = year
dt.innerText = dates;
mnt.innerText = date.toLocaleString("en", {
  month: "long",
});

dy.innerText = date.toLocaleString("en", {
  weekday: "long",
});
