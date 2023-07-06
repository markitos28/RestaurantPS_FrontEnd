const btnActionAgrRej = () =>
{
    
    //document.addEventListener("DOMContentLoaded", function(e)
    //{
        let btn_agregar_all= document.querySelectorAll("#btn-Agregar");
        let btn_quitar_all= document.querySelectorAll("#btn-Quitar");
        btn_agregar_all.forEach(element =>
        {
            element.addEventListener("click", function(e)
            {
                let rowTableChange= document.querySelectorAll(`#Mercaderia-${element.value}`);
                console.log(rowTableChange);
                rowTableChange.forEach(element => {
                    let tagCantidad = element.querySelectorAll("td")[1].textContent;
                    let tagPrecioTotal = element.querySelectorAll("td")[3].textContent;
                    let tagPrecioUnit = element.querySelectorAll("td")[2].textContent;

                    console.log(tagPrecioTotal);
                    console.log(tagPrecioUnit);
                    console.log();
                    element.querySelectorAll("td")[1].textContent = parseInt(tagCantidad,10) +1;
                    element.querySelectorAll("td")[3].textContent ="$"+ (parseInt(tagPrecioTotal.substring(1),10) + parseInt(tagPrecioUnit.substring(1),10));
                });
                
                
            });
        
        });
        btn_quitar_all.forEach(element =>
            {
                element.addEventListener("click", function(e)
                {
                    let rowTableChange= document.querySelectorAll(`#Mercaderia-${element.value}`);
                console.log(rowTableChange);
                rowTableChange.forEach(element => {
                    let tagCantidad = element.querySelectorAll("td")[1].textContent;
                    let tagPrecioTotal = element.querySelectorAll("td")[3].textContent;
                    let tagPrecioUnit = element.querySelectorAll("td")[2].textContent;

                    console.log(tagPrecioTotal);
                    console.log(tagPrecioUnit);
                    console.log();
                    element.querySelectorAll("td")[1].textContent = parseInt(tagCantidad,10) -1;
                    element.querySelectorAll("td")[3].textContent ="$"+ (parseInt(tagPrecioTotal.substring(1),10) - parseInt(tagPrecioUnit.substring(1),10));
                });
                });
            
            });
   // });
};


export {btnActionAgrRej};