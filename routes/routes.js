const router = (app) => {
    app.get("/", (request, response) => {
        response.send({
            message: "Node.js and Express REST API",
        });
    });

    app.get("/users", (request, response) => {
        response.send(users);
    });
};


// Export the router
export default router;

const users = [
    {
        id: 1,
        name: "Quốc Đạt",
        email: "dat@gmail.com",
    },
    {
        id: 2,
        name: "OkNguyen",
        email: "oknguyenvip@gmail.com",
    },
];