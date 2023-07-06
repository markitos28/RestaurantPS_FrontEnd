import { headerNav } from "../components/headerNav.js";
import { modalCarrito, filaModalCarrito, carritoVacio, filaModalTotalCarrito} from "../components/modalCarrito.js";
import {addToCart, removeFromCart, getCart,clearCart, getDelivery} from "../helpers/managerLocalStorageCarrito.js";
import {finalizarCompra} from "../components/finalizarCompra.js"
import {listenerBtnVaciarCarrito, listenerCheckFormaEntrega, listenerBtnConfirmaCompra} from "../container/renderModalCarrito.js"
//import {postComanda} from "../services/fetchComanda.js";



export function cargaDatosCarrito (jsonCarrito)
{
    let listaCompra= [];
    // json: {id:int, nombre:string, precio:int}
    // listaCompra: {id:int, nombre:string, cantidad:int, precioUnit: int, totalUnit:int }
    jsonCarrito.forEach(element => {
        let encontrado=false;
        listaCompra.forEach((row, index) =>
        {
            if(element.id == row.id)
            {
                let item = {
                    id:row.id, 
                    nombre:row.nombre, 
                    cantidad:row.cantidad + 1, 
                    precioUnit: row.precioUnit, 
                    totalUnit: row.totalUnit + row.precioUnit
                };
                listaCompra[index] = item;
                encontrado=true;
            }
        });

        if(!encontrado)
        {
            let item = {
                id:element.id, 
                nombre:element.nombre, 
                cantidad: 1, 
                precioUnit: element.precio, 
                totalUnit: element.precio
            };
            listaCompra.push(item);
        }

    });
    return listaCompra;
}

export const listenerCarrito = () =>
{
    listenerBtnVaciarCarrito();

    const btnFinalizarCompra= document.querySelector("#Finalizar-Compra");
    var miModal = document.getElementById("myModal");
    btnFinalizarCompra.addEventListener("click", function(e)
    {
        
        if(getCart()== 0 )
        {
            alert("La lista esta vacia, por favor agregue mercaderia al carrito.");
        }
        else
        {
            // Cerrar el modal
            miModal.classList.remove("show");
            miModal.style.display = "none";
            miModal.setAttribute("aria-hidden", "true");
            miModal.setAttribute("aria-modal", "false");

            // Remover el backdrop del modal
            var backdrop = document.getElementsByClassName("modal-backdrop")[0];
            backdrop.parentNode.removeChild(backdrop);
        }
    });
}

export const showCarrito= async () =>
{
    // sacar el render del carrito entero y solo cargar el modal carrito: cuando clickee en agregar o quitar, se renderiza el articulo solo
    let jsonCarrito = getCart();
    let listaCarrito = cargaDatosCarrito(jsonCarrito);
    let agregadoHtml= modalCarrito();

    let sectionHeader = document.querySelector(".container-modal-carrito");
    let rowMercaderia="";
    sectionHeader.innerHTML = agregadoHtml;
    let tableBodyCarrito = document.querySelector("#tbody-table-Mercaderia");
    let tableFooterCarrito = document.querySelector("#tfoot-table-Mercaderia");
    if(listaCarrito.length > 0)
    {
        let totalCompra=0;
        listaCarrito.forEach(element =>
        {
            rowMercaderia += filaModalCarrito(element.nombre, element.precioUnit, element.totalUnit, element.cantidad, element.id);
            totalCompra += element.totalUnit;
            
        });
        tableFooterCarrito.innerHTML =  filaModalTotalCarrito(totalCompra);
        tableBodyCarrito.innerHTML += rowMercaderia;
    }
};

const confirm = async ()=>
{
    let option = getDelivery();
        let carrito = getCart();
        let listaMercaderia=[];
        carrito.forEach(element =>
        {
            listaMercaderia.push(element.id);
        });
        console.log("Hola, soy tu option: " + option);
        let response = await listenerBtnConfirmaCompra(listaMercaderia, option);

        if(response)
        {
            alert(`Su pedido está siendo procesado.\nSe entregará mediante ${response.formaEntrega.descripcion}`);
        }
}

const showHeader = () => 
{
    const sectionHeader = document.querySelector("#header_redirect");
    let agregadoHtml= headerNav();
   

    document.addEventListener("DOMContentLoaded", async function ()
    {
        
        sectionHeader.innerHTML += agregadoHtml;
        let modalFinCompra = finalizarCompra();
        let containerModalFinCompra = document.querySelector(".container-modal-Fin-Compra");
        containerModalFinCompra.innerHTML= modalFinCompra;
        await listenerCheckFormaEntrega();
        let response = await listenerBtnConfirmaCompra();
    });
    

   
};

showHeader();
await showCarrito();


