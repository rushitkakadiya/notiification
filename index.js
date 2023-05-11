const express = require("express");
const cors = require("cors");
const app = express();
const axios=require("axios")

app.use(cors());
app.use(express.json());

app.post("/", async (req, res, next) => {
  //   console.log(req.body);
   
  res.sendStatus(200)
  //   res.send({...re})
  });
app.post("/api/data", async (req, res, next) => {
  console.log(req.body);
  const Message = req.body.Message;
  const Area = req.body.Area;
  const Category = req.body.Category;

  Message.map(async(item)=>{
    console.log(item);
    const data={
      "to":item,
      "notification":{
        "title":`Property Alert`,
        "body":`New ${Category} is added near to you at ${Area}`
      }
    }
    
    const re= await axios.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(data), {headers: {
         'Content-Type': 'application/json',
         'Authorization':"key=AAAAdHg4_YI:APA91bFep04wkBOvUTjhhhFGmAxDeXTTpS38VA2Jkj-ZYjsQpCjrfjcBT--jagww7wymMPMLrkge7AphYiRttyqWyxaq3y5ZeYX4XjD1B2KhRU4mLjJHocQs1Vr8VeCj89ColvHyWPEs"
       }})
   console.log(re.data);
  })
 
res.sendStatus(200)
//   res.send({...re})
});
app.listen(5000, () => {
  console.log("server is on");
});
