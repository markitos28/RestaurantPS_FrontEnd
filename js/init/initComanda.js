import {RenderComanda, RenderRowTableComandaDetalle, RenderRowTableComanda, GetComandaByFecha} from "../container/containerComanda.js";


const RenderCardComanda = async (fecha) =>
{
    let containerCardComanda = document.querySelector("#section-card-comanda");
    

    let responseAPI = await GetComandaByFecha(fecha);

    responseAPI.forEach(element => {
        let rowComanda="";
        let idComanda= element.id;
        let lsMercaderia= element.mercaderias;
        let objFormaEntrega= element.formaEntrega; // {id:int, descripcion:string}
        let total= element.total
        let fecha= fecha;

        containerCardComanda.innerHTML += RenderComanda(idComanda, total, objFormaEntrega.descripcion, fecha);
        
        let tbodyComanda = document.querySelector(`tbody-table-Comanda-${idComanda}`);
        lsMercaderia.forEach(item => 
        {
            let render = RenderRowTableComanda(item.nombre, item.precio);
            rowComanda += render;
        });
        tbodyComanda.innerHTML += rowComanda

        let tfooter = document.querySelector(`tfoot-table-Comanda-${idComanda}`);
        
    });
}