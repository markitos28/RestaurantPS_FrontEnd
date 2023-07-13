let urlBase= "https://localhost:7130";
let controller= "api/v1/Comanda";

export const getComanda = async (fecha) =>
{
    let queryParam = fecha != null ?  `fecha=${fecha}` : null;
    let result;
    let url=`${urlBase}/${controller}?${queryParam}`;
    let response = await fetch(url, {
        method: "GET",
        headers:{
            "accept": "*/*",
            "Content-Type": "application/json"
        },
    });

    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log(`Error: Hubo un error al intentar recuperar las comandas. ErrorCode: ${response.status}`);
        return null;
    }
};

export const postComanda = async (data) =>
{
    let result;
    let response = await fetch(`${urlBase}/${controller}`, {
        method: "POST",
        headers:{
            "accept": "*/*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if(response.ok && response.status==201)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log("Error: No se creo la comanda. " + `ErrorCode: ${response.status}`);
        return null;
    }
};

export const getComandaId = async (idComanda) =>
{
    let result;
    let response = await fetch(`${urlBase}/${controller}/${idComanda}`, {
        method: "GET",
        headers:{
            "Content-Type": "application/json"
        },
    });

    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log(`Error: No existe una comanda con el id= ${idComanda}. ErrorCode: ${response.status}`);
        return null;
    }
};