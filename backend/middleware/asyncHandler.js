
/*
    A wrapper function used to handle asynchronous operations within Express route handlers.
    It is used to catch errors that occur in asynchronous operations and pass them to Express.
*/
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;