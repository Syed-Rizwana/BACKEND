const app=require('./Requires');
const port=process.env.PORT || 3000;
app.listen(port,function(){
    console.log(`app listening at http://localhost:${port}`);
}); 