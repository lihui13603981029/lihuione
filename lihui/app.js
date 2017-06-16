'use  strict'
const express = require('express');
const app = express();
const port = process.env.port || 3000;
app.listen(port);
app.set('views','./views/pages');
app.set('view engine','jade');
console.log('success');
app.get('/',function(req,res){
  res.render('index',{
    title:"网站首页"
  })
})
app.get('/admin/list',function(req,res){
    res.render('list',{
        title: "列表页"
    })
})
app.get('/admin/main',function(req,res){
    res.render('list',{
      title:"网站主页"   
    })
})

app.get('/admin/movie',function(req,res){
    res.render('admin',{
      title:"李辉 后台录入页"   
    })
})
app.get('/movie/:id',function(req,res){
    res.render('detail',{
      title:"详情页"   
    })
})