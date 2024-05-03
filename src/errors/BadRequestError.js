import CustomError from "./CustomError.js";

/**
 * Custom error class for handling bad request errors.
 * @extends {CustomError} - Extends the CustomError class.
 */
export class BadRequestError extends CustomError {
    /**
     * Constructor for the BadRequestError class.
     * @param {string} message - The error message to be displayed.
     */
    constructor(message) {
        /**
         * Call the superclass constructor with the provided message.
         * @param {string} message - The error message to be displayed
         */
        super(message);
        /**
         * Set the HTTP status code for this error to 400.
         */
        this.statusCode = 400;
    }
}