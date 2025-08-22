const PRODUCTOS = [
  // RETAIL
  { categoria: "RETAIL", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "500 grs", codigo: "P/10952", col1: "1", interno: "1012", dto: "0.01" },
  { categoria: "RETAIL", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "1k", codigo: "P/10952", col1: "2", interno: "1011", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "500 grs", codigo: "R/12952", col1: "5", interno: "2012", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "1k", codigo: "R/12952", col1: "6", interno: "2011", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "PAN RALLADO TRADICIONAL", marca: "Crokant", peso: "400 grs", codigo: "P/10952", col1: "54", interno: "2014", dto: "15" },
  { categoria: "RETAIL", descripcion: "REBOZADOR TRADICIONAL", marca: "Crokant", peso: "400 grs", codigo: "R/12952", col1: "51", interno: "2014", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "REBOZADOR CONDIMENTADO", marca: "Rosa Blanca", peso: "450 grs", codigo: "R/12952", col1: "30", interno: "2112", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "REBOZADOR MIX DE SEMILLAS Y CEREALES", marca: "Rosa Blanca", peso: "450 grs", codigo: "R/12952", col1: "31", interno: "2212", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "PANKO", marca: "Rosa Blanca", peso: "500 grs", codigo: "PO/44", col1: "70", interno: "1005", dto: "0.1" },
  { categoria: "RETAIL", descripcion: "PANKO COLOR", marca: "Rosa Blanca", peso: "500 grs", codigo: "PO/44C", col1: "70", interno: "1002", dto: "0.2" },

  // GASTRONOMIA
  { categoria: "GASTRONOMIA", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "5k", codigo: "P/10952", col1: "3", interno: "1005", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR TRADICIONAL", marca: "Rosa Blanca", peso: "5k", codigo: "R/12952", col1: "7", interno: "2005", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "PANKO", marca: "Rosa Blanca", peso: "2 K", codigo: "PO/44", col1: "70", interno: "2002", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "PANKO COLOR", marca: "Rosa Blanca", peso: "2 K", codigo: "PO/44C", col1: "70", interno: "2002", dto: "0.2" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR CRUJIENTE TIPO PANKO", marca: "Rosa Blanca", peso: "3,5 k", codigo: "TP/1610", col1: "62", interno: "3035", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR CRUJIENTE TIPO PANKO COLOR", marca: "Rosa Blanca", peso: "3,5 k", codigo: "TP/1610C", col1: "63", interno: "3035", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR CRUJIENTE CB7030 BICOLOR", marca: "Rosa Blanca", peso: "3,5 k", codigo: "TP/1610M", col1: "64", interno: "3035", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR CONDIMENTADO", marca: "Rosa Blanca", peso: "4,5 k", codigo: "R/12952", col1: "35", interno: "2145", dto: "0.1" },
  { categoria: "GASTRONOMIA", descripcion: "REBOZADOR MIX DE SEMILLAS", marca: "Rosa Blanca", peso: "4,5 k", codigo: "R/12952", col1: "36", interno: "2245", dto: "0.1" },

  // INDUSTRIA
  { categoria: "INDUSTRIA", descripcion: "PAN RALLADO TRADICIONAL", marca: "Rosa Blanca", peso: "25k", codigo: "P/10952", col1: "4", interno: "1025", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR TRADICIONAL", marca: "Rosa Blanca", peso: "25k", codigo: "R/12952", col1: "9", interno: "2052", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR RELLENO PASTAS/PREDUST", marca: "Rosa Blanca", peso: "25k", codigo: "R/14951", col1: "39", interno: "2014", dto: "51" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR RELLENO PASTAS/PREDUST", marca: "Rosa Blanca", peso: "25k", codigo: "R/16951", col1: "11", interno: "2071", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR RELLENO PASTAS/PREDUST", marca: "Rosa Blanca", peso: "25k", codigo: "R/18951", col1: "40", interno: "2018", dto: "51" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR ESPECIAL GRUESO", marca: "Rosa Blanca", peso: "25k", codigo: "R/10402", col1: "42", interno: "2010", dto: "42" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR TRADICIONAL COLOR", marca: "Rosa Blanca", peso: "25k", codigo: "R/12953", col1: "10", interno: "2053", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR TRADICIONAL GRUESO COLOR", marca: "Rosa Blanca", peso: "25k", codigo: "R/10953", col1: "43", interno: "2010", dto: "53" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR COLOR", marca: "Rosa Blanca", peso: "25k", codigo: "R/101060C", col1: "44", interno: "2010", dto: "6C" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR COLOR", marca: "Rosa Blanca", peso: "25k", codigo: "R/1060C3", col1: "45", interno: "2010", dto: "C3" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR COLOR", marca: "Rosa Blanca", peso: "25k", codigo: "R/1400C3", col1: "46", interno: "2014", dto: "C3" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR CRUJIENTE TIPO PANKO", marca: "Rosa Blanca", peso: "15 k", codigo: "TP/1610", col1: "65", interno: "3010", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR CRUJIENTE TIPO PANKO COLOR", marca: "Rosa Blanca", peso: "15 k", codigo: "TP/1610C", col1: "66", interno: "3011", dto: "0.2" },
  { categoria: "INDUSTRIA", descripcion: "REBOZADOR CRUJIENTE CB7030", marca: "Rosa Blanca", peso: "15 k", codigo: "TP/1610M", col1: "67", interno: "3012", dto: "73" },
  { categoria: "INDUSTRIA", descripcion: "PANKO", marca: "Rosa Blanca", peso: "10 K", codigo: "PO/44", col1: "70", interno: "1010", dto: "0.1" },
  { categoria: "INDUSTRIA", descripcion: "PANKO COLOR", marca: "Rosa Blanca", peso: "10 K", codigo: "PO/44C", col1: "70", interno: "1010", dto: "0.2" }
];

function agruparPorCategoria(productos) {
  return productos.reduce((acc, p) => {
    acc[p.categoria] = acc[p.categoria] || [];
    acc[p.categoria].push(p);
    return acc;
  }, {});
}

function renderizarFormulario() {
  const cont = document.getElementById("formulario-productos");
  cont.innerHTML = "";
  const porCat = agruparPorCategoria(PRODUCTOS);

  Object.entries(porCat).forEach(([cat, items]) => {
    const sec = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = `PRODUCTOS PARA ${cat}`;
    sec.appendChild(title);

    const tbl = document.createElement("table");
    tbl.innerHTML = `
      <thead>
        <tr>
          <th class="descripcion">Descripción</th>
          <th class="marca">Marca</th>
          <th class="peso">Peso</th>
          <th class="codigo">Código</th>
          <th class="interno">Interno</th>
          <th class="cant">Cant</th>
          <th class="precio">Precio</th>
          <th class="dto">Dto</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
    const tb = tbl.querySelector("tbody");

    items.forEach((p, idx) => {
      const tr = document.createElement("tr");
      const interno = `${p.col1} ${p.interno} ${p.dto}`;
      tr.innerHTML = `
        <td class="descripcion">${p.descripcion}</td>
        <td class="marca">${p.marca}</td>
        <td class="peso">${p.peso}</td>
        <td class="codigo">${p.codigo}</td>
        <td class="interno">${interno}</td>
        <td class="cant"><input type="number" class="cantidad" data-c="${cat}" data-i="${idx}" placeholder=""></td>
        <td class="precio"><input type="number" class="precio" data-c="${cat}" data-i="${idx}" placeholder=""></td>
        <td class="dto"><input type="number" class="descuento" data-c="${cat}" data-i="${idx}" placeholder=""></td>
      `;
      tb.appendChild(tr);
    });

    sec.appendChild(tbl);
    cont.appendChild(sec);
  });
}

function guardarPedido() {
  const p = {
    cliente: document.getElementById("cliente").value || "",
    fechaPedido: document.getElementById("fecha-pedido").value || "",
    transporte: document.getElementById("transporte").value || "",
    condiciones: document.getElementById("condiciones").value || "",
    vendedor: document.getElementById("vendedor").value || "",
    fechaEntrega: document.getElementById("fecha-entrega").value || "",
    observaciones: document.getElementById("observaciones").value || "",
    productos: [],
    creado: new Date().toISOString()
  };

  document.querySelectorAll(".cantidad").forEach((input) => {
    const cant = parseInt(input.value, 10);
    if (isNaN(cant) || cant <= 0) return;

    const idx = input.dataset.i;
    const cat = input.dataset.c;
    const row = input.closest("tr");
    const producto = agruparPorCategoria(PRODUCTOS)[cat][idx];
    const precio = parseFloat(row.querySelector(".precio").value) || 0;
    const dto = parseFloat(row.querySelector(".descuento").value) || 0;

    p.productos.push({
      ...producto,
      cantidad: cant,
      precio,
      descuento: dto
    });
  });

  const arr = JSON.parse(localStorage.getItem("pedidos") || "[]");
  arr.push(p);
  localStorage.setItem("pedidos", JSON.stringify(arr));
  alert("Pedido guardado correctamente");
  window.location.href = "historial.html";
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarFormulario();
  document.getElementById("guardar-local").onclick = guardarPedido;
  document.getElementById("ver-historial").onclick = () => window.location.href = "historial.html";
  document.getElementById("recargar").onclick = () => window.location.reload();
});
