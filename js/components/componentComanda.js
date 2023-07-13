const cardComanda = (idComanda, totalComanda, formaEntrega, fecha) =>
{
    let component = 
    `
    <div class="col Comanda-Card">
            <h4 id="Header-Id-Comanda">${idComanda}</h4>
            <table class="col" id="table-Comanda">
                <thead id="thead-table-Comanda">
                    <tr>
                        <td> Tipo  </td>
                        <td> Nombre </td>
                        <td> Precio </td>
                    </tr>
                </thead>
                <tbody id="tbody-table-Comanda-${idComanda}">
                    
                </tbody>
                <tfoot id="tfoot-table-Comanda-${idComanda}">
                    <tr>
                        <td>Total </td>
                        <td></td>
                        <td>$ ${totalComanda}</td>
                    </tr>
                </tfoot>
            </table>
            <div class="col-lg-4" id="layaout-footer-comanda">
                <p id="layaout-forma-entrega">Forma de Entrega: ${formaEntrega}</p>
            <p id="layaout-fecha-comanda">Fecha: ${fecha}</p>
            </div>
        </div>
    `;

    return component;
};

const rowTableComandaDetalle = (tipoComida, nombreComida, precioUnidad ) =>
{
    let component = 
    `
    <tr>
        <td>${tipoComida}</td>
        <td>${nombreComida}</td>
        <td>$ ${precioUnidad}</td>
    </tr>
    `;

    return component;
};

const rowTableComanda = (nombreComida, precioUnidad ) =>
{
    let component = 
    `
    <tr>
        <td></td>
        <td>${nombreComida}</td>
        <td>$ ${precioUnidad}</td>
    </tr>
    `;

    return component;
};

export{cardComanda, rowTableComanda, rowTableComandaDetalle};