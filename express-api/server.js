const { request, response } = require("express");
const express = require("express");
const posts = require("./data/posts")
const users = require("./data/users")
const app = express();

app.get("/users",(request,response) =>{

    if(request.query.id) {
        var item = users.filter(x => x.id == request.query.id)
        response.send(item);
    }
    else{
        response.send(users);
    }
});

app.get("/posts",(request,response) =>{
    if(request.query.id) {
        var item = posts.filter(x => x.id == request.query.id)
        response.send(item);
    }
    else{
        response.send(posts);
    }
});

app.get("/posts/:postId",(request,response) =>{
    console.log(request.params.postId)
    var result = posts.filter(x => x.id == request.params.postId);
    response.send(result);
    })

app.get("/posts", (request,response)=> {
    response.send(posts);
});

const PORT = 5000;
app.listen(PORT);
