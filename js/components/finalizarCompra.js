const finalizarCompra = () =>
{
    
    let response= `
    <div class="modal modal-lg" id="myModalCompra">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Finalizar compra</h5>
                        <button class="btn btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div class="modal-body" id="modal-body-Fin-Compra">
                    <h4 id="Layaout-Modal-Fin-Compra"> Por favor elija el tipo de retiro </h4>
                    <div class="row">
                            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label class="btn btn-secondary active" id="label-PedidoYa">
                            <input type="radio" name="options" class="chk-tipo-entrega" id="Btn-Modal-Fin-Compra-PY" autocomplete="off" value="3">Pedidos Ya
                            </label>
                            <label class="btn btn-secondary" id="label-Salon">
                            <input type="radio" name="options" class="chk-tipo-entrega" id="Btn-Modal-Fin-Compra-S" autocomplete="off" value="1" checked>Salon
                            </label>
                            <label class="btn btn-secondary" id="label-Delibery">
                            <input type="radio" name="options" class="chk-tipo-entrega" id="Btn-Modal-Fin-Compra-D" autocomplete="off" value="2">Delivery
                            </label>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button class="btn btn-danger" data-bs-dismiss="modal">Me arrepenti</button>
                        <button class="btn btn-success" data-bs-dismiss="modal" id="Confirmar-Compra">Confirmar Compra</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;

    return response;
}

export {finalizarCompra};