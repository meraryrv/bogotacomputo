  // Función para actualizar el valor del rango de precios en el "span"
  function updatePriceValue() {
    const precioActual = document.getElementById('precio').value;
    document.getElementById('precio-actual').textContent = formatPrice(precioActual);
}

// Función para formatear el valor del precio con separador de miles
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function filterProducts() {
  const dispoFiltro = document.getElementById('dispo').value;
  const añoFiltro = parseInt(document.getElementById('año').value);
  const marcFiltro = document.getElementById('marca').value;
  const precioFiltro = parseInt(document.getElementById('precio').value);

  const elementos = document.getElementsByClassName('item');
  for (const item of elementos) {
    const dispo = item.dataset.dispo;
    const año = parseInt(item.dataset.año);
    const marca = item.dataset.marca;
    const precio = parseInt(item.dataset.precio);

    const isdispoMatch = dispoFiltro === 'todos' || dispoFiltro === dispo;
    const isañoMatch = isNaN(añoFiltro) || añoFiltro === año;
    const ismarcadMatch = marcFiltro === 'todos' || marcFiltro === marca;
    const isprecioMatch = isNaN(precioFiltro) || precioFiltro >= precio;

    

    if (isdispoMatch && isañoMatch && ismarcadMatch && isprecioMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
// Cesta de compras
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

const addToCartButtons = document.querySelectorAll('.add-to-cart');

const itemsInCart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const parentItem = button.closest('.item');
        const itemName = parentItem.querySelector('.descripcion').textContent;
        const itemPrice = parseInt(parentItem.querySelector('.precio').textContent.replace(/\D/g, ''));

        itemsInCart.push({
            name: itemName,
            price: itemPrice
        });

        updateCart();
    });
});

function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    itemsInCart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);

        total += item.price;
    });

    cartTotal.textContent = `$${total}`;
}

checkoutButton.addEventListener('click', () => {
    alert('Compra realizada con éxito. Gracias por su compra.');
    itemsInCart.length = 0;
    updateCart();
});

});



document.addEventListener('DOMContentLoaded', function() {
  //  <!-- ocultar el filtro -->
  var toggleButton = document.getElementById('toggleButton');
  var filtro = document.getElementById('filtro');

  toggleButton.addEventListener('click', function() {
    if (filtro.style.display === 'none') {
      filtro.style.display = 'block';
    } else {
      filtro.style.display = 'none';
    }
  });

  // ocultar cesta
  var botcesta = document.getElementById('botcesta');
  var cart = document.getElementById('cart');

  botcesta.addEventListener('click', function() {
    if (cart.style.display === 'none') {
      cart.style.display = 'block';
    } else {
      cart.style.display = 'none';
    }
  });

  

  // Inicializar la lista de productos para que estén visibles inicialmente
  filterProducts();
  updatePriceValue();
});



