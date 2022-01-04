const express = require("express");
const app = express();

// instead of sending this response
// app.get('/', function(req,res){
//     res.send('<h1>Express here!</h1>')
// })

//after setting up the route (need module.exports in usersRoute)
// & proxy we can send the exported router instead of the above h1

app.use("/users/", require("./routes/usersRoute"));
// after setting up we can head to frontend to exchange index js render app.js to a new component

app.listen(3003, function () {
	console.log("express server is running on 3003");
});
