let urlBase= "https://localhost:7130";
let controller= "api/v1/Mercaderia";

export const GetMercaderia = async (tipo, nombre, orden ) =>
{
    let result;
    let _orden = orden == null ? "&orden=ASC" : `&orden=${orden}`;
    let _tipo = tipo != null ? "&tipo="+ tipo : "";
    let _nombre = nombre != null  ? "&nombre=" + nombre : "";

    let url= `${urlBase}/${controller}?${_orden}${_tipo}${_nombre}`;
    let response = await fetch(`${url}`, {
        method: "GET",
        });
    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log(`Error: Hubo un error al intentar recuperar las mercaderias. ErrorCode: ${response.status}`);
        return null;
    }
};

export const PostMercaderia = async (data) =>
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
        console.log("Error: No se creo la mercaderia. " + `ErrorCode: ${response.status}`);
        return null;
    }
};

export const DeleteMercaderiaId = async (idMercaderia) =>
{
    let result;
    let response = await fetch(`${urlBase}/${controller}/${idMercaderia}`, {
        method: "DELETE",
        
    });

    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log("Error: No se elimino la mercaderia. " + `ErrorCode: ${response.status}`);
        return null;
    }
};

export const PutMercaderiaId = async (idMercaderia, data) =>
{
    let result;
    let response = await fetch(`${urlBase}/${controller}/${idMercaderia}`, {
        method: "PUT",
        headers:{
            "accept": "*/*",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log("Error: No se elimino la mercaderia. " + `ErrorCode: ${response.status}`);
        return null;
    }
};

export const GetMercaderiaId = async (idMercaderia) =>
{
    let result;
    let response = await fetch(`${urlBase}/${controller}/${idMercaderia}`, {
        method: "GET",
    });

    if(response.ok && response.status==200)
    {
        result = response.json();
        return result;
    }
    else
    {
        console.log(`Error: Hubo un error al intentar recuperar la mercaderia. ErrorCode: ${response.status}`);
        return null;
    }
};