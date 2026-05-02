exports.processData = (req, res) => {
    try {
        const { numbers } = req.body;

        if (!numbers || !Array.isArray(numbers)) {
            return res.status(400).json({
                error: "Invalid input: numbers must be an array"
            });
        }

        if (numbers.length === 0) {
            return res.status(400).json({
                error: "numbers array cannot be empty"
            });
        }

        if (!numbers.every(num => typeof num === "number")) {
            return res.status(400).json({
                error: "All elements must be numbers"
            });
        }

        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const evenNumbers = numbers.filter(num => num % 2 === 0);
        const oddNumbers = numbers.filter(num => num % 2 !== 0);

        return res.status(200).json({
            success: true,
            data: {
                sum,
                evenNumbers,
                oddNumbers
            }
        });

    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        });
    }
};
const { scheduleMaintenance } = require("../../vehicle_maintence_scheduler/scheduler");

exports.scheduleService = (req, res) => {
    try {
        const { vehicleId, lastServiceDate, intervalMonths } = req.body;

        // Validation
        if (!vehicleId || !lastServiceDate) {
            return res.status(400).json({
                error: "vehicleId and lastServiceDate are required"
            });
        }

        const result = scheduleMaintenance(vehicleId, lastServiceDate, intervalMonths);

        if (result.error) {
            return res.status(400).json(result);
        }

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        });
    }
};