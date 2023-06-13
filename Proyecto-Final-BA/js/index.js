document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos relevantes del DOM
    const addToCartButtons = document.getElementsByClassName('addToCart');
    const cartButton = document.getElementById('cartButton');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCartButton = document.getElementById('closeCart');
    const cartItemsList = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
  
    // Variables globales
    let cartItems = [];
    let totalPrice = 0;
  
    // Función para agregar un producto al carrito
    function addToCart(event) {
      const product = event.target.parentElement;
      const productNameElement = product.querySelector('.product-name');
        const productName = productNameElement ? productNameElement.textContent : '';
      const productPrice = parseFloat(product.querySelector('.product-price').textContent.split('$')[1]);
  
      const cartItem = { name: productName, price: productPrice };
      cartItems.push(cartItem);
  
      totalPrice += productPrice;
      totalPriceElement.textContent = `Total: ${totalPrice.toFixed(2)}`;
  
      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${productName} - $${productPrice.toFixed(2)}`;
      cartItemsList.appendChild(cartItemElement);
  
      updateCartButton();
  
      event.preventDefault();
    }
  
    // Función para actualizar el botón del carrito con el número de elementos
    function updateCartButton() {
      cartButton.textContent = `Carrito (${cartItems.length})`;
    }
  
    // Función para abrir el carrito
    function openCart() {
      cartOverlay.style.display = 'block';
      document.body.classList.add('cart-open');
    }
  
    // Función para cerrar el carrito
    function closeCart() {
      cartOverlay.style.display = 'none';
      document.body.classList.remove('cart-open');
    }
  
    // Asignar eventos a los elementos
    for (let i = 0; i < addToCartButtons.length; i++) {
      addToCartButtons[i].addEventListener('click', addToCart);
    }
  
    cartButton.addEventListener('click', openCart);
    closeCartButton.addEventListener('click', closeCart);
});
  




document.addEventListener('DOMContentLoaded', () => {
  // Agregar listeners para los botones de siguiente y anterior
  const carousels = document.querySelectorAll('.carousel');

  for (let i = 0; i < carousels.length; i++) {
    const carousel = carousels[i];
    const images = carousel.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
      for (let j = 0; j < images.length; j++) {
        images[j].style.display = 'none';
      }

      images[index].style.display = 'block';
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function previousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    carousel.querySelector('.next-button').addEventListener('click', nextImage);
    carousel.querySelector('.previous-button').addEventListener('click', previousImage);

    showImage(currentIndex);
  }
});
