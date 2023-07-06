import { headerNav } from "../components/headerNav.js";
import { modalCarrito, filaModalCarrito, carritoVacio, filaModalTotalCarrito} from "../components/modalCarrito.js";
import {addToCart, removeFromCart, getCart,clearCart} from "../helpers/managerLocalStorageCarrito.js";



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

export const showCarrito= async () =>
{
    // sacar el render del carrito entero y solo cargar el modal carrito: cuando clickee en agregar o quitar, se renderiza el articulo solo
    let jsonCarrito = getCart();
    let listaCarrito = cargaDatosCarrito(jsonCarrito);
    let agregadoHtml= modalCarrito();

    //document.addEventListener("DOMContentLoaded", function ()
    //{
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
        else
        {
            rowMercaderia=carritoVacio();
            let containerTable = document.querySelector("#container-table-carrito");
            containerTable.innerHTML = rowMercaderia;
        }
        
        
    //});

};


const showHeader = () => 
{
    const sectionHeader = document.querySelector("#header_redirect");
    let agregadoHtml= headerNav();

    document.addEventListener("DOMContentLoaded", function ()
    {
        sectionHeader.innerHTML += agregadoHtml;
    });

   
};

showHeader();
await showCarrito();




