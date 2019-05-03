export default {

    requisicao = () =>{
        const UrlBase = `https://salty-atoll-57329.herokuapp.com/{0}`;
        
        return{
            Listar:(endpoint) => fetch(
                UrlBase.replace('{0}',endpoint),{method:'GET'}
            )
        }
    
    }

}