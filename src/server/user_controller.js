module.exports = {

    addUser: (req, res, next) => {
        const {username, password} = req.body;
        console.log(username);
        const dbInstance = req.app.get("db");
        dbInstance.register_user(username, password)
            .then( response => {
                console.log(response)
                res.status(200)
            }).catch(err => {
                res.status(500).send(err)
                console.log(err)
            })
    }



}