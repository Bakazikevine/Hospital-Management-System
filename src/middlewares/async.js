const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.log(error.message)
            next(error);
        }4
    }
}

export default asyncWrapper;