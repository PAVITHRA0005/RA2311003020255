function scheduleMaintenance(vehicleId, lastServiceDate, intervalMonths = 6) {
    const date = new Date(lastServiceDate);

    if (isNaN(date)) {
        return { error: "Invalid date format" };
    }

    date.setMonth(date.getMonth() + intervalMonths);

    return {
        vehicleId,
        lastServiceDate,
        nextServiceDate: date.toISOString().split("T")[0],
        intervalMonths
    };
}

module.exports = { scheduleMaintenance };