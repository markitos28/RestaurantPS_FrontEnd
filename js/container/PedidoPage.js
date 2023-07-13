import {CardMercaderia} from "../components/cardMercaderia.js"
import {OptionFiltrosMercaderia} from "../components/filtroSelectMercaderia.js"
import {postComanda} from "../services/fetchComanda.js";
import {GetMercaderiaId} from "../services/fetchMercaderia.js";

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

const GetMercaderiaById = async (idMercaderia) =>
{
    let response= await GetMercaderiaId(idMercaderia);
    return response;
}

const RenderCard=  (nombre, tipoDesc, precio, img, id, ingredientes) =>
{
    let response = CardMercaderia (nombre, tipoDesc, precio, img, id, ingredientes); 
    return response;
};

const RenderFiltroSelect=  (value,descripcion) =>
{
    let response = OptionFiltrosMercaderia (value,descripcion); 
    return response;
};

const listenerBtnInfo= (id) =>
{
    alert("hola");
    /*
    // Obtén una referencia al botón y al popover
    var miBoton = document.querySelectorAll("#btn-Info");
    var miPopover = document.querySelectorAll("#miPopover-info");

    miBoton.forEach(element =>
        {
            element.addEventListener("click", function() {
                // Verificar si el popover está visible o no

                miPopover.forEach(popoverItem =>
                    {
                        if(element.value == popoverItem.value)
                        {
                            let popoverVisible = popoverItem.style.display !== "none";
            
                            // Mostrar o ocultar el popover según su estado actual
                            if (popoverVisible) {
                                miPopover.style.display = "none";
                            } else {
                                miPopover.style.display = "block";
                            }
                        }
                    });
            });

                
        });
    // Agrega un evento clic al botón
    */
}


export {RenderCard, RenderFiltroSelect, InsertComanda, listenerBtnInfo, GetMercaderiaById};
