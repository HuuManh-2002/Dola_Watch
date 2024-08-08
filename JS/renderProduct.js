document.addEventListener("DOMContentLoaded", function () {
  const products = JSON.parse(localStorage.getItem("products"));

  const sortedProducts_sale_number = products
    .slice()
    .sort((a, b) => b.sale_number - a.sale_number);
  const sortedProducts_createDate = products
    .slice()
    .sort((a, b) => new Date(b.createDate) - new Date(a.createDate));
  const products_Donghonam = products
    .slice()
    .filter((product) => product.category === "Đồng hồ nam");
  const products_Donghonu = products
    .slice()
    .filter((product) => product.category === "Đồng hồ nữ");

  const spMoiDiv = document.getElementById("spmoi-list");
  const spNoibatDiv = document.getElementById("spnoibat-list");
  const spBanchayDiv = document.getElementById("spbanchay-list");
  const DonghonamDiv = document.getElementById("list-donghonam");
  const DonghonuDiv = document.getElementById("list-donghonu");

  document
    .getElementById("spmoi-tab")
    .addEventListener("click", () =>
      renderSpMoi(spMoiDiv, sortedProducts_createDate)
    );
  document
    .getElementById("spnoibat-tab")
    .addEventListener("click", () => renderSpNoibat(spNoibatDiv, products));
  document
    .getElementById("spbanchay-tab")
    .addEventListener("click", () =>
      renderSpBanchay(spBanchayDiv, sortedProducts_sale_number)
    );

  renderSpMoi(spMoiDiv, sortedProducts_createDate);
  renderDonghonam(DonghonamDiv, products_Donghonam);
  renderDonghonu(DonghonuDiv, products_Donghonu);
});

const renderSpMoi = (container, sortedProducts) => {
  const ListSPMoi = sortedProducts.slice(0, 10);
  container.innerHTML = "";
  ListSPMoi.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p>Lượt bán: ${product.sale_number}</p>
          <p class="price">${product.price.toLocaleString("vi-VN")} VND</p>
        </a>
      `;

    container.appendChild(productDiv);
  });
};

const renderSpNoibat = (container, products) => {
  const ListSPNoibat = products.slice(10, 20);
  container.innerHTML = "";
  ListSPNoibat.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p>Lượt bán: ${product.sale_number}</p>
          <p class="price">${product.price.toLocaleString("vi-VN")} VND</p>
        </a>
      `;

    container.appendChild(productDiv);
  });
};

const renderSpBanchay = (container, sortedProducts) => {
  const ListSPBanchay = sortedProducts.slice(0, 10);
  container.innerHTML = "";
  ListSPBanchay.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p>Lượt bán: ${product.sale_number}</p>
          <p class="price">${product.price.toLocaleString("vi-VN")} VND</p>
        </a>
      `;

    container.appendChild(productDiv);
  });
};

const renderDonghonam = (container, products_Donghonam) => {
  const ListDongHoNam = products_Donghonam.slice(0, 10);
  container.innerHTML = "";
  ListDongHoNam.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p>Lượt bán: ${product.sale_number}</p>
          <p class="price">${product.price.toLocaleString("vi-VN")} VND</p>
        </a>
      `;

    container.appendChild(productDiv);
  });
};
const renderDonghonu = (container, products_Donghonu) => {
  const ListDongHoNu = products_Donghonu.slice(0, 10);
  container.innerHTML = "";
  ListDongHoNu.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    productDiv.innerHTML = `
        <a href="#">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.brand}</p>
          <p>Lượt bán: ${product.sale_number}</p>
          <p class="price">${product.price.toLocaleString("vi-VN")} VND</p>
        </a>
      `;

    container.appendChild(productDiv);
  });
};
