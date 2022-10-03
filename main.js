const request=require('request');
const cheerio=require('cheerio');
const getinfoObj=require("./getinfo");
const { getInfo } = require('./getinfo');
// const url="https://www.reliancedigital.in/search?q=samsung%20phone:relevance";
const url="https://www.reliancedigital.in/smart-phones/c/S101711?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock:brand:Apple&page=0";
request(url,cb);
function cb(error,response,html){
   if(error){
    console.log("error");
   }else{
    handleHtml(html);
   }
}
function handleHtml(html){
    let $=cheerio.load(html);
    let linkArr=$(".sp.grid a[attr-tag='link']");
    for(let i=0;i<linkArr.length;i++){
        let link=$(linkArr[i]).attr("href");
        let fulllink="https://www.reliancedigital.in"+link;
        getinfoObj.getInfo(fulllink);
        
    }
    
    

}