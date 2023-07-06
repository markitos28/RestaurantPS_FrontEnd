import {filaModalCarrito, filaModalTotalCarrito} from "../components/modalCarrito.js";
import {getCart} from "../helpers/managerLocalStorageCarrito.js";
import {cargaDatosCarrito} from "../helpers/helpMercaderia.js"

/**
 * 
 * @param {int} id 
 * @param {int} cantidad 
 * @param {int} precioUnitario 
 * @returns {bool} deleteRow
 */
const renderChangeModalCarrito = (id, cantidad, precioUnitario) =>
{
    let deleteRow=false;
    let tagCantidad= document.querySelector(`#Col-Table-Cantidad-${id}`);
    
    let tagTotalUnidad = document.querySelector(`#Col-Table-TotalUnidad-${id}`);
    let tagTotalCarrito = document.querySelector(`#Col-Table-TotalCarrito`);

    if(tagCantidad && tagTotalUnidad && tagTotalCarrito)
    {
        if(parseInt(tagCantidad.textContent,10) > 0 || cantidad > 0)
        {
            document.querySelector(`#Col-Table-Cantidad-${id}`).textContent= parseInt(tagCantidad.textContent,10) + parseInt(cantidad,10) ;
        }
        
        
        if(parseInt(tagTotalUnidad.textContent.substring(1),10) > 0 || cantidad > 0)
        {
            document.querySelector(`#Col-Table-TotalUnidad-${id}`).textContent="$" + (parseInt(tagTotalUnidad.textContent.substring(1),10) + parseInt(precioUnitario,10) );
            document.querySelector(`#Col-Table-TotalCarrito`).textContent = "$" + (parseInt(tagTotalCarrito.textContent.substring(1),10) + parseInt(precioUnitario,10) );
        }

        if(parseInt(tagCantidad.textContent,10) == 0)
        {
            deleteRow=true;
        }
        
    }
    return deleteRow;

    
    
}

const renderChangeMercaderiaRowModal = (id, cantidad, precioUnitario) =>
{
    let deleteRender = renderChangeModalCarrito(id,cantidad,precioUnitario);
    
    let tbody= document.querySelector("#tbody-table-Mercaderia");
    let tagRowModal = tbody.querySelector(`#Row-Table-Mercaderia-${id}`);
    let tfooter = document.querySelector(`#tfoot-table-Mercaderia`);

    if(deleteRender)
    {
        tagRowModal.remove();
    }
    else
    {
        if(!tagRowModal)
        {
            let jsonCarrito = getCart();
            console.log(jsonCarrito);
            let listaAgrupMercaderia = cargaDatosCarrito(jsonCarrito);

            let total=0;

            listaAgrupMercaderia.forEach(element => {
                if(element.id == id)
                {
                    
                    let newTagRowModal= filaModalCarrito(element.nombre , element.precioUnit, element.totalUnit, element.cantidad, id);
                    tbody.innerHTML += newTagRowModal;
                }
                total += element.totalUnit;
            });

            tfooter.innerHTML=filaModalTotalCarrito(total);
        }
    }

}

export {renderChangeModalCarrito, renderChangeMercaderiaRowModal};