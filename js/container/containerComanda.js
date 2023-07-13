import {cardComanda, rowTableComanda, rowTableComandaDetalle} from "../components/componentComanda.js";
import {getComanda} from "../services/fetchComanda.js"

const RenderComanda= (idComanda, totalComanda, formaEntrega, fecha) =>
{
    let response=  cardComanda(idComanda, totalComanda, formaEntrega, fecha);
    return response;
}

const RenderRowTableComandaDetalle = () =>
{
    let response = rowTableComandaDetalle(tipoComida, nombreComida, precioUnidad);
    return response;
}

const RenderRowTableComanda = (nombreComida, precioUnidad) =>
{
    let response = rowTableComanda(nombreComida, precioUnidad);
    return response;
}

const GetComandaByFecha= async (fecha) =>
{
    let response = await getComanda(fecha);
    return response;
}


export
{
    RenderComanda,
    RenderRowTableComandaDetalle,
    RenderRowTableComanda,
    GetComandaByFecha
};