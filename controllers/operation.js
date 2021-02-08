const Users = require("../models/users");

exports.create = (req, res) => {
    res.render("create");
};

exports.list = (req, res) => {
    res.render("list", {users: req.users});
};

exports.createUser = (req, res) => {
    console.log(req.body);
    const user = new Users(req.body);
    user.save((err) => {
        if(err) {
            console.log(err)
        } else {
            res.redirect("/list");
        }
    });
};

// middlewares
exports.getAllUsers = (req, res, next) => {
    Users.find({}, (err, users) => {
        if(err) {
            console.log(err)
        }
        req.users = users;
        next();
    })
};

// delete 
exports.deleteUser = (req, res) => {
    Users.deleteOne({_id: req.params.userID}, (err) => {
        if(err) {
            console.log(err);
        }
        res.redirect("/list");
    })
};