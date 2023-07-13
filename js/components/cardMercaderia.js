export const CardMercaderia = (nombre, tipoDesc, precio, img, id, ingredientes) =>
{
    const response = 
    `
    <div class="col Card-Mercaderia">
    <h2 id="tipo-Mercaderia">${tipoDesc}</h2>
        <div id="conteiner-datos-mercaderia">
            <img id="img-mercaderia" src="${img}" alt="Imagen ${nombre}">
            <h3 id="nombre-mercaderia">${nombre}</h3>
        </div>
    
        <div class="col container-descripcion-mercaderia">
            
            <p id="price-Mercaderia"> Precio: $ ${precio} </p>
            <div class="col btn-operation"> 
            <button class="btn-action" id="btn-Agregar" value="${id}"> 
                <img class="icon" id= "icon-plus" src="../img/icons/plus-solid.svg"></img> Agregar 
            </button>
            <button class="btn-action" id="btn-Quitar" value="${id}">
                <img class= "icon" id= "icon-negative" src="../img/icons/minus-solid.svg"></img> Quitar 
            </button>
            <button class="btn-action" id="btn-Info" value="${id}"> 
                <img class= "icon" id= "icon-info" src="../img/icons/circle-info-solid.svg"></img> Info 
            </button>

                <div id="miPopover-info-${id}" class="div-popover">
                    <div class="popover-content">
                        Ingredientes: ${ingredientes}
                    </div>
                </div>
            </div>
        </div>

    </div>
    `;
    return response;
};
