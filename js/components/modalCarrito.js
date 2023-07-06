const modalCarrito = () => {
    let response =
    ` 
        <div class="modal modal-lg" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Lista del Carrito</h5>
                        <button class="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body">
                        <div class="row" id="container-table-carrito">
                            <table class="table-modal-Mercaderia">
                            <thead id="thead-table-Mercaderia">
                                <tr >
                                    <td>Nombre </td>
                                    <td>Cantidad</td>
                                    <td>Precio Unitario</td>
                                    <td>Total</td>
                                </tr>
                            </thead>

                            <tbody id="tbody-table-Mercaderia">
                            </tbody>

                            <tfoot id="tfoot-table-Mercaderia">
                            </tfoot>
                            </table>
                        </div>
                        <!-- modalCarrito.js (filaModalCarrito()) -->
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-danger" data-bs-dismiss="modal">cerrar</button>
                        <button class="btn btn-outline-success" data-bs-dismiss="modal">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    return response;
};

const filaModalCarrito = (nombreMercaderia , precio, sumPrecioMercaderia, cantidad, id) => {
    let response =
        `
        <tr id="Row-Table-Mercaderia-${id}">
            <td id="Col-Table-Nombre-${id}">${nombreMercaderia}</td>
            <td id="Col-Table-Cantidad-${id}"> ${cantidad} </td>
            <td id="Col-Table-Precio-${id}">$ ${precio}</td>
            <td id="Col-Table-TotalUnidad-${id}">$ ${sumPrecioMercaderia}</td>
            <td><button class="btn-action" id="btn-Agregar" value="${id}">
                <img class="icon" id="icon-plus" src="../img/icons/plus-solid.svg" width="10px" height="10px"></img>
            </button></td>
            <td><button class="btn-action" id="btn-Quitar" value="${id}">
                <img class="icon" id="icon-negative" src="../img/icons/minus-solid.svg" width="10px" height="10px"></img>
            </button></td>
        </tr>
    `;

    return response;
}

const filaModalTotalCarrito = (sumTotal) => {
    let response =
        `
        
        <tr id="Row-Table-Mercaderia-Total">
            <td>Total</td>
            <td></td>
            <td></td>
            
            <td id ="Col-Table-TotalCarrito">$ ${sumTotal}</td>
        </tr>
        
    `;

    return response;
}

const carritoVacio = () => {
    let response =
        `
        <p id="layaout-carrito-vacio"> El carrito se encuentra vacio </p>
    `;

    return response;
}

export { modalCarrito, filaModalCarrito, carritoVacio, filaModalTotalCarrito};