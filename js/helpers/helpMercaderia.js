/**
 * Toma el documento json que devuelve el local storage y lo convierte en una lista agrupada por mercaderia
 * @param {JSON} jsonCarrito 
 * @returns {list} SumGroupMercaderia
 */
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