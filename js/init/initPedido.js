import { GetMercaderia } from "../services/fetchMercaderia.js";
import {RenderCard, RenderFiltroSelect} from "../container/PedidoPage.js";
import { modalCarrito, filaModalCarrito, carritoVacio, filaModalTotalCarrito} from "../components/modalCarrito.js";
import {addToCart, removeFromCart, getCart,clearCart} from "../helpers/managerLocalStorageCarrito.js";
import {showCarrito} from "../init/initheaderNav.js";
import {renderChangeModalCarrito, renderChangeMercaderiaRowModal} from "../container/renderModalCarrito.js"

/* Devuelve una lista con los filtros de TipoMercaderia y sus ID's */
const GetListTipoMercaderia= (mercaderiasJson) =>
{
    let optionListFiltro=[];

    /* Obtenemos todos los tipos de mercaderia */
    mercaderiasJson.forEach(element =>
    {
        let flag=false;
        optionListFiltro.forEach(item => 
            {
                if(item[0]== element.tipo.id)
                { flag= true;} /* Verifica si el ID ya existe */
            });
        if(!flag)
        {
            optionListFiltro.push([element.tipo.id, element.tipo.descripcion]);
        }
        
    });

    return optionListFiltro;
};

/* Renderiza las Card's que muestran la mercaderia para vender */
const RenderMercaderia = (mercaderiasJson, container) =>
{
    let agregadoHtmlMercaderia= ``;
    /* Renderiza las tarjetas de mercaderia */
    mercaderiasJson.forEach(element => 
        {
            let nombre = element.nombre;
            let tipoDesc = element.tipo.descripcion;
            let precio= element.precio;
            let img= element.imagen;
            let id= element.id;
            
            agregadoHtmlMercaderia += RenderCard(nombre, tipoDesc, precio, img, id);
            
        });
        container.innerHTML=agregadoHtmlMercaderia;
};

/* Renderiza/Llena los filtros de la etiqueta SELECT*/
const RenderFiltros = (listaFiltros, container) =>
{
    let agregadoHtmlFiltro= ``;
    /* Renderiza los filtros en base al tipo de mercaderia */
    listaFiltros.forEach((element) =>
    {
        agregadoHtmlFiltro += RenderFiltroSelect(`${element[0]}`, element[1]);
    });
    container.innerHTML += agregadoHtmlFiltro;
};

async function eventListenerButtonsCarrito(mercaderiaJson)
{

    let btn_agregar_all= document.querySelectorAll("#btn-Agregar");
    let btn_quitar_all= document.querySelectorAll("#btn-Quitar");
    let btn_info_all= document.querySelectorAll("#btn-Info");
    btn_agregar_all.forEach(event =>
        {
            event.addEventListener("click", function(e)
            {
                mercaderiaJson.forEach(x => 
                {       
                    if(x.id == event.value)
                    {
                        let request= {"id": x.id, "nombre": `${x.nombre}`, "precio":x.precio};
                        addToCart(request);
                        renderChangeMercaderiaRowModal(x.id, 1, x.precio);
                    }
                });
            });
        });

    btn_quitar_all.forEach(event =>
        {
            event.addEventListener("click", function(e)
            {
                mercaderiaJson.forEach(x => 
                {
                    if(x.id == event.value)
                    {
                        removeFromCart(x.id);
                        renderChangeMercaderiaRowModal(x.id,-1, - x.precio);
                    }
                });
            });
        });

    btn_info_all.forEach(event =>
        {
            event.addEventListener("click", function(e)
            {
                alert("El id es: " + event.value);
            });
        });
}

async function inicio()
{
    let tipoMercaderia;
    let orden;
    let nombreFiltro;
    let container_mercaderia = document.querySelector(".Container-Mercaderia").querySelector("#container-row-mercaderia");
    let container_filtro= document.querySelector("#select-TipoMercaderia");
    let select_orden= document.querySelector("#listbox-orden");
    let select = document.querySelector('#select-TipoMercaderia');
    let btnFind= document.querySelector("#btnFind");
    let nombreMercaderia= document.querySelector("#inputNombre");
    let mercaderias = await GetMercaderia(tipoMercaderia, nombreFiltro);
    let lista= GetListTipoMercaderia(mercaderias);
    RenderFiltros(lista, container_filtro);
    RenderMercaderia(mercaderias, container_mercaderia);

    
    
    select.addEventListener('change',
    async function(){
        nombreMercaderia.value="";
        orden= select_orden.options[select_orden.selectedIndex].value == "0" ? "ASC": "DESC" ;
        tipoMercaderia = this.options[select.selectedIndex];
        if(tipoMercaderia.value == "-1")
        {
            let mercaderiaFiltrada= await GetMercaderia( null,null, orden);
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
        else
        {
            let mercaderiaFiltrada= await GetMercaderia( tipoMercaderia.value,null, orden);
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
    });

    select_orden.addEventListener('change',
    async function(){
        orden = this.options[select_orden.selectedIndex];
        tipoMercaderia = select.options[select.selectedIndex].value == "-1" ? null:select.options[select.selectedIndex].value;

        let nombre= nombreMercaderia.value ==""? null: nombreMercaderia.value;
        if(orden.value == "0")
        {
            let mercaderiaFiltrada= await GetMercaderia( tipoMercaderia,nombre, "ASC");
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
        else
        {
            let mercaderiaFiltrada= await GetMercaderia( tipoMercaderia,nombre, "DESC");
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
    });


    btnFind.addEventListener("click", async function(e)
    {
        tipoMercaderia = select.options[select.selectedIndex];
        let mercaderiaFiltrada;
        if(tipoMercaderia.value == "-1")
        {
            mercaderiaFiltrada= await GetMercaderia( null, nombreMercaderia.value);
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
        else
        {
            mercaderiaFiltrada= await GetMercaderia( tipoMercaderia.value, nombreMercaderia.value);
            RenderMercaderia(mercaderiaFiltrada, container_mercaderia);
        }
    });
    
    await eventListenerButtonsCarrito(mercaderias);

}


await inicio();






