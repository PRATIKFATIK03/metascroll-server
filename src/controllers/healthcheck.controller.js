const healthCheck = (_, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running fine",
    });
};

export { healthCheck };
