//We create Data here we want to pass to frontend

exports.usersController = (req,res) => {
    res.json({
        usersList: ['user 1', 'user 2']
    })
}