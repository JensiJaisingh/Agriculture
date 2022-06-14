const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const cors = require("cors");
const data = require("./data");
app.use(bodyparser.json());
app.use(
 cors({
origin: "http://localhost:4200",
 })
);
// email-post
app.post('/email',(request,response)=>{
    const object={
        email:request.body.email,
        password:request.body.password,
        type:'user'
    }
    data.post(object,'agri_sample').then((res)=>{
        if(res){
          response.send(res);    
        }
        else{
          response.send('err')
        }
       
      })
    });
    app.get("/adminlogin", (request, response) => {
      console.log(request);
      console.log('admin get data')
      console.log("begin to write data");
      const info = {
        selector:{
          type:'adminlogin'
        }
      }
    
      data.get(info,"agri_sample").then((res) => {
    
        if (res) {
          response.send(res);
        } else {
          response.send("error");
        }
      });
    });
    app.post('/talk',(request,response)=>{
      const object={
          name:request.body.name,
          email:request.body.email,
          occupation:request.body.occupation,
          talk:request.body.talk,
          type:'user'
      }
      data.post(object,'agri_sample').then((res)=>{
          if(res){
            response.send(res);    
          }
          else{
            response.send('err')
          }
         
        })
      });
      app.get("/gettalk", (request, response) => {
        console.log(request);
        console.log('admin get data')
        console.log("begin to write data");
        const info = {
          selector:{
            type:'user'
          }
        }
      
        data.get(info,"agri_sample").then((res) => {
      
          if (res) {
            response.send(res);
          } else {
            response.send("error");
          }
        });
      });
    
    app.listen(port, (err) => {
        if (err) {
          return console.log("something bad happened", err);
        }
      
        console.log(`server is listening on http://localhost:${port}`);
      })
app.get("/addcard",(request,response)=>{
  console.log(request);
  const details={
    selector:{
      type:'addcard'
    }
  }
  data.get(details,"agri_sample").then((res) =>{
    if(res){
      response.send(res);
    }else{
      response.send("error");
    }
  });
});
app.post('/carddetails',(request,response)=>{
  const object={
    img:request.body.name,
    title:request.body.title,
    description:request.body.description,
    type:'addcard'
  }
  data.post(object,'agri_sample').then((res)=>{
    if(res){
      response.send(res);
    }
    else{
      response.send('err');
    }
  }
  )
});
app.get("/getcarddetails",(request,_response)=>{
  console.log(request);
  console.log("admin get card")
  console.log("begin to write data")
})