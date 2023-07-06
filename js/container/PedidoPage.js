import {CardMercaderia} from "../components/cardMercaderia.js"
import {OptionFiltrosMercaderia} from "../components/filtroSelectMercaderia.js"



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


export {RenderCard, RenderFiltroSelect};
