const headerNav= () => 
{
    let response= 
    `
        <h1 class="col" id="msj-Welcome">¡Bienvenido!</h1>
        <img class="col-1" id="logo-img" alt= "Logo - Restaurante GBA Sur" src="../img/Logo_GBASur.png"> 
        
        <!-- Header de opciones -->
        <div class="col" id="redirect-btn"> 
            <a class="col" id="links" href="../../html/index.html"> Inicio </a>
            <a class="col" id="links" href="../../html/comanda.html"> Comandas </a>
            <a class="col" id="links" href="../../html/mercaderia.html"> Mercaderia </a>
            <button class="col"  id="btn-carrito" data-bs-toggle="modal" data-bs-target="#myModal"> 
                <img id="Icon-Carrito" src="../img/icons/icons8-agregar-a-carrito-de-compras-48.png" alt="Carrito" > 
            </button>
        </div>
    `;
    return response;
};

export {headerNav};