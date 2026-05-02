function scheduleMaintenance(vehicleId, lastServiceDate, intervalMonths = 6) {
    if (!vehicleId || !lastServiceDate) {
        return { error: "vehicleId and lastServiceDate are required" };
    }

    if (intervalMonths <= 0) {
        return { error: "intervalMonths must be a positive number" };
    }

    const date = new Date(lastServiceDate);

    if (isNaN(date.getTime())) {
        return { error: "Invalid date format" };
    }

    const nextServiceDate = new Date(date);
    nextServiceDate.setMonth(nextServiceDate.getMonth() + intervalMonths);

    return {
        vehicleId,
        lastServiceDate: date.toISOString().split("T")[0],
        nextServiceDate: nextServiceDate.toISOString().split("T")[0],
        intervalMonths
    };
}

module.exports = { scheduleMaintenance };