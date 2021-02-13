var map = L.map("mapid").setView([4.6383743, -74.1111105], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([4.6383743, -74.1111105]).addTo(map);
L.marker([4.6318652, -74.117715]).addTo(map);
L.marker([4.63754, -74.09529]).addTo(map);
L.marker([4.62968, -74.08964]).addTo(map);
