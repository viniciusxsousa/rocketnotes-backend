class AppError {
    statusCode;
    message;

    constructor(message, status = 400) {
        this.message = message;
        this.statusCode = status;
    }
}

module.exports = AppError