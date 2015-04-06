var flairColor = function (seconds) {
    if (seconds > 51) {
        return "#820080";
    }
    if (seconds > 41) {
        return "#0083C7";
    }
    if (seconds > 31) {
        return "#02be01";
    }
    if (seconds > 21) {
        return "#E5D900";
    }
    if (seconds > 11) {
        return "#e59500";
    }
    return "#e50000";
};