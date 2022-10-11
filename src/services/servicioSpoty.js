export async function servicioSpoty(){

    const URI="https://api.spotify.com/v1/artists/6olE6TJLqED3rqDCT0FyPh/top-tracks?market=US"

    const TOKEN="Bearer BQDn85dIGIkjprjs0aEa4RkLXYrR8csTZzzvokHeQ-aWhicVnReXeCQd8pDMxK8swXqWNlsiVM0oBguetFCfnKjz-QoxpD_Sa8WaC0R-foUUgKki6lC8ZOsAhagxGfJygzYgnn_nprEg_szv433ED4og9EEuq-bChh701ETp3UmMle00fJSeQ4QKqrO7obPq6Sk"

    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos    
}