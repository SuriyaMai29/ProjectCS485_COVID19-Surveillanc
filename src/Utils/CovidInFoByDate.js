const API ='http://covid19.th-stat.com/api/open/timeline'
function isGoodDate(dt){
    var reGoodDate = /^((0?[5]|1[05])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    return reGoodDate.test(dt);
}
export default function CovidInFoByDate(state,setState){
    fetch(API)
    .then(res=>res.json())
    .then(res=>{
        const arr =[]
         res.Data.map(ele=>{
             //  setSearches(searches => [...searches, query])
                if(isGoodDate(ele.Date)) 
                arr.push({Date:ele.Date,NewConfirmed:ele.NewConfirmed})
                
         })
         setState(arr)
    })
}