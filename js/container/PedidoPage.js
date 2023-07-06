import {CardMercaderia} from "../components/cardMercaderia.js"
import {OptionFiltrosMercaderia} from "../components/filtroSelectMercaderia.js"
import {postComanda} from "../services/fetchComanda.js";

const InsertComanda = async (listaMercaderia, formaEntrega) =>
{
    let request = 
    {
        "mercaderias": listaMercaderia, 
        "formaEntrega": parseInt(formaEntrega)
    };
    let response = await postComanda(request);
    return response;
}

const RenderCard=  (nombre, tipoDesc, precio, img, id) =>
{
    let response = CardMercaderia (nombre, tipoDesc, precio, img, id); 
    return response;
};

const RenderFiltroSelect=  (value,descripcion) =>
{
    let response = OptionFiltrosMercaderia (value,descripcion); 
    return response;
};


export {RenderCard, RenderFiltroSelect, InsertComanda};
