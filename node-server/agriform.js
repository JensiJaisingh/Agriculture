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
    var object={
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
      console.log("begin to write ddata");
      var info = {
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
      var object={
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
        console.log("begin to write ddata");
        var info = {
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
// })
