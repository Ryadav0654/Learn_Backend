const asyncHandler = (fn) => {
    return async (req, res, next) => {
    try {
        return await fn(req, res, next);
        
    } catch (error) {
        res.status(error.status || 500).json({
            success: false,
            message: error.message,
        });
    }
}
};

export { asyncHandler };

/*
// promise based async function

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

*/
