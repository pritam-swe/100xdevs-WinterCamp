const homeHandler = (req, res) => {
    res.status(200).send("<h1>Welcome to the Notes backend APIs</h1>")
};

const aboutHandler = (req, res) => {
    res.status(200).send("Welcome to the about page")
}

module.exports = {homeHandler, aboutHandler};