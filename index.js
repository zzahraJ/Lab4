// const express = require('express')
// const app = express()
// const port = 3000

// //enable CORS
// const cors = require('cors')
// app.use(cors())

// app.get('/api/v1/messages', (req, res) => {
//   res.json({
//     "status": "success",
//     "message": "GET messages",
//     "data": [],
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




const express = require('express');
const app = express();
const port = 3000;

// enable CORS
const cors = require("cors");
app.use(cors());
app.use(express.json()); 

app.get('/api/v1/messages', (req, res) => {
  const user = req.query.user;
  if (user) {
    res.json({
      status: "success",
      message: `GET messages for user ${user}`,
    });
  } else {
    res.json({
      status: "success",
      message: "GET messages",
      data: [
        {
          user: "Zahra",
          message: "Hihihi",
        },
        {
          user: "Eva",
          message: "Hahaha",
        },
      ],
    });
  }
});

app.get('/api/v1/messages/:id', (req, res) => {
  const id = parseInt(req.params.id);
    res.json({
      status: "success",
      message: `GET message with ID ${id}`,
    });
});

app.post('/api/v1/messages', (req, res) => {
  const user = req.body.message.user;
  
  if (user) {
    res.json({
      status: "success",
      message: `POST a new message for user ${user}`,
    });
  } else {
    res.status(400).json({
      status: "error",
      message: "Post failed",
    });
  }
});
