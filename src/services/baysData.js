export const getBaysData = () => {
    var url = "http://hexlogapi-001-site1.gtempurl.com/api/bays";
    return fetch (url)
    .then((response)=>response.json())
    .catch((error)=> {console.log(error);})
}
