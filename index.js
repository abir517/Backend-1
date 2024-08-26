const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('ami backend theke esheshi  ')
  })


  const users = [
    {name:"siam",Email:"siam@gmail.com",drescription:"fbcegvjhcb"},
    {name:"fahim",Email:"fahim@gmail.com",drescription:"fbcegvjhcb"},
    {name:"riyad",Email:"riyad@gmail.com",drescription:"fbcegvjhcb"},
    {name:"rifat",Email:"rifat@gmail.com",drescription:"fbcegvjhcb"},
    {name:"rahmat",Email:"rahmat@gmail.com",drescription:"fbcegvjhcb"},

  ]

  app.get("/user",(req, res)=>{ 
    res.send(users)
  })



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })