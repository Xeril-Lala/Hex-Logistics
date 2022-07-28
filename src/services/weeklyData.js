export const getWeeklyData = () => {
    var url = "http://hexlogapi-001-site1.gtempurl.com/api/daily-stat";
    return fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}