const API ='https://covid19.th-stat.com/api/open/today'
export default function CovidInformations(setState){
    fetch(API)
    .then(res=>res.json())
    .then(res=>{
       setState({Confirmed:res.Confirmed,Recovered:res.Recovered,Hospitalized:res.Hospitalized,Deaths:res.Deaths,
        UpdateDate:res.UpdateDate})
    })
}