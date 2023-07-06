export const OptionFiltrosMercaderia = (value, descripcion) =>
{
    const response = 
    `
    <option value="${value}"> ${descripcion} </option>
    `;
    return response;
};