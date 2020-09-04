const express = require('express');
const app = express();

const mockUserData=[
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users',function(req,res){
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.get('/users/:user', function(req,res){
  console.log(req.params.user)
  res.send("Worship the lord +")
})

app.listen(8080, function(){
  console.log("Server is running")
})
