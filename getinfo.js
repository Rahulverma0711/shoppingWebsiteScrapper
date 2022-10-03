const request=require('request');
const cheerio=require('cheerio');
// const url="https://www.reliancedigital.in/samsung-galaxy-m01-core-16-gb-1-gb-blue-mobile-phone/p/491894462";
function getInfo(url){
    request(url,cb);
}

function cb(error,response,html){
   if(error){
    console.log("error");
   }else{
    handleHtml(html);
   }
}
function handleHtml(html){
    let $=cheerio.load(html);
    let fullModelName=$(".pdp__title.mb__20").text();
    let model=fullModelName.split(",");
    console.log("Model: "+model[0]);
    console.log();

    
  
    

    
    let sectionArr=$("#pdp__specification section");
    
    for(let i=0;i<sectionArr.length-1;i++){
       let infoheader=$(sectionArr[i]).find(".pdp__tab-info__header");
       let infoname=$(infoheader[0]).text();
       let infoListArr=$(sectionArr[i]).find(".pdp__tab-info__list");
       console.log(infoname);
       
       for(let j=0;j<infoListArr.length;j++){
        let specrowArr=$(infoListArr[j]).find(".pdp__specification-row");
        for(let k=0;k<specrowArr.length;k++){
            let nameArr=$(specrowArr[k]).find("div");
            console.log($(nameArr[0]).text()+": "+$(nameArr[1]).text());
        }
        
        
       }
       console.log();
       
    }
    
    console.log("----------------------------");

}

module.exports={
    getInfo:getInfo
}