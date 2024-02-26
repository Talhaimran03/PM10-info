
async function get_by_city(city) {
    return await (
        await fetch(`backend/controller/ControllerRilevazioni.php/?mode=get_by_city&city=${city}`, {
            method: "GET",
        })
    ).json();
}

async function get_city() {
    return await (
        await fetch(`backend/controller/ControllerStazioni.php/?mode=get_city`, {
            method: "GET",
        })
    ).json();
}

async function top_city() {
    return await (
        await fetch(`backend/controller/ControllerRilevazioni.php/?mode=get_higher_avg`, {
            method: "GET",
        })
    ).json();
}

async function get_cityAnalytics() {
    return await (
        await fetch(`backend/controller/ControllerRilevazioni.php/?mode=get_range_counts`, {
            method: "GET",
        })
    ).json();
}

async function get_yearlyData() {
    return await (
        await fetch(`backend/controller/ControllerRilevazioni.php/?mode=get_yearly_average`, {
            method: "GET",
        })
    ).json();
}

async function get_stations_coordinates() {
    return await (
        await fetch(`backend/controller/ControllerStazioni.php/?mode=get_stations_coordinates`, {
            method: "GET",
        })
    ).json();
}