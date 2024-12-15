const products = [
  {
    name: "Secret Oud",
    image: "assets/images/secret-oud.webp",
    alt: "Secret Oud",
    price: 28.99, 
    description: "Een exclusieve geur met een mysterieuze mix van houtachtige tonen en warme specerijen.",
    figcaption: "Een exclusieve geur met een mysterieuze mix van houtachtige tonen en warme specerijen. De amberkleurige fles met gouden accenten straalt luxe en verfijning uit, ideaal voor kenners die de diepgang en sensualiteit van oudh willen ervaren in een private edition.",
    features: [
      "Houtachtige en warme specerijenelementen",
      "Exclusieve geurervaring",
      "Langdurige, intense geur"
    ]
  },
  {
    name: "Irish Lavender",
    image: "assets/images/anfar-irish-lavender.webp",
    alt: "Irish Lavender",
    price: 19.99, 
    description: "Een verfijnde geur met de rustgevende essentie van lavendel. Ideaal voor liefhebbers van bloemige en ontspannende aroma's.",
    figcaption: "Deze geur vangt de rustgevende eigenschappen van lavendel en brengt een bloemige en ontspannende geurervaring, perfect voor iedere gelegenheid.",
    features: [
      "Essentie van lavendel",
      "Rustgevend en bloemig",
      "Lichte, ontspannende geur"
    ]
  },
  {
    name: "Blue Meridian",
    image: "assets/images/anfar-london-blue-meridian.webp",
    alt: "Blue Meridian",
    price: 22.50, 
    description: "Een frisse, maritieme geur die de oceaan in een fles vangt, ideaal voor een energieke dag.",
    figcaption: "Deze geur vangt de essentie van de oceaan met frisse en maritieme tonen, waardoor elke druppel je meeneemt naar een dag aan zee.",
    features: [
      "Frisse maritieme tonen",
      "Energieke geur",
      "Langdurige frisheid"
    ]
  },
  {
    name: "Oudh Khalifa",
    image: "assets/images/anfar-oudh-khalifa.webp",
    alt: "Oudh Khalifa",
    price: 29.99, 
    description: "Een majestueuze geur die de kracht van oudh belichaamt, met diepe, houtachtige tonen. Ideaal voor luxe liefhebbers.",
    figcaption: "Een krachtige en luxueuze geur die de essentie van hout en oudh combineert voor een intense ervaring.",
    features: [
      "Diepe houtachtige tonen",
      "Krachtige oudh",
      "Luxueuze uitstraling"
    ]
  },
  {
    name: "Oud Uswa",
    image: "assets/images/anfar-oud-uswa.webp",
    alt: "Oud Uswa",
    price: 24.99, 
    description: "Een sensuele geur met een diepe houtachtige kern van oudh, perfect voor een exclusieve ervaring.",
    figcaption: "Met een kern van diep houtachtige oudh is deze geur perfect voor liefhebbers van exclusieve en verfijnde aroma's.",
    features: [
      "Diepe houtachtige kern",
      "Sensuele geur",
      "Exclusieve ervaring"
    ]
  },
  {
    name: "Joudah",
    image: "assets/images/adyan-joudah.webp",
    alt: "Joudah",
    price: 32.00, 
    description: "Een verfijnde, luxueuze geur met zilveren details, perfect voor een tijdloze geurervaring.",
    figcaption: "De zilveren fles straalt elegantie uit en de geur biedt een tijdloze ervaring die elke gelegenheid naar een hoger niveau tilt.",
    features: [
      "Luxueuze zilveren accenten",
      "Tijdloze geur",
      "Elegantie voor elke gelegenheid"
    ]
  },
  {
    name: "Aitizaz Pure Sapphire",
    image: "assets/images/aitizaz-pure-sapphire.webp",
    alt: "Aitizaz Pure Sapphire",
    price: 27.50, 
    description: "Een koninklijke geur geïnspireerd door saffier, perfect voor een frisse, luxe geurervaring.",
    figcaption: "Geïnspireerd door saffier biedt deze geur een frisse en luxueuze geurervaring die koninklijke allure met zich meebrengt.",
    features: [
      "Frisse luxueuze tonen",
      "Geïnspireerd door saffier",
      "Koninklijke allure"
    ]
  },
  {
    name: "Aitizaz Woody Velvet",
    image: "assets/images/aitizaz-woody-velvet.webp",
    alt: "Aitizaz Woody Velvet",
    price: 26.99, 
    description: "Een warme, houtachtige geur die rijkdom en diepte brengt, ideaal voor liefhebbers van aardse tonen.",
    figcaption: "Een geur die de warmte en diepte van hout benadrukt, perfect voor degenen die houden van rijke en aardse aroma's.",
    features: [
      "Houtachtige warmte",
      "Rijke en diepe geur",
      "Aardse tonen"
    ]
  },
  {
    name: "Lailatul Liqa",
    image: "assets/images/aiyad-lailatul-liqa.webp",
    alt: "Lailatul Liqa",
    price: 21.99, 
    description: "Een romantische, bloemige geur die de zintuigen prikkelt, perfect voor een speciale avond.",
    figcaption: "Een sensuele geur die bloemige en romantische noten combineert voor een onvergetelijke ervaring.",
    features: [
      "Romantische bloemige tonen",
      "Sensuele geur",
      "Perfect voor speciale gelegenheden"
    ]
  },
  {
    name: "Oudh Al Qamar",
    image: "assets/images/andar-oudh-al-qamar.webp",
    alt: "Oudh Al Qamar",
    price: 23.49, 
    description: "Een sensuele en mysterieuze geur met rijke houtachtige tonen, perfect voor een verfijnde geurervaring.",
    figcaption: "Met rijke houtachtige tonen en een mysterieuze kern biedt Oudh Al Qamar een verfijnde en exclusieve geurervaring.",
    features: [
      "Rijke houtachtige tonen",
      "Sensuele en mysterieuze geur",
      "Verfijnde ervaring"
    ]
  },
  {
    name: "Dehn Al Oudh",
    image: "assets/images/anfar-dehn-al-oud.webp",
    alt: "Dehn Al Oudh",
    price: 34.99, 
    description: "Een traditionele geur die de rijke, houtachtige essentie van oudh viert, ideaal voor kenners van oosterse geuren.",
    figcaption: "Dehn Al Oudh is een traditionele geur die de essentie van oosterse oudh naar voren brengt, perfect voor kenners.",
    features: [
      "Traditionele oosterse geur",
      "Rijke houtachtige essentie",
      "Ideaal voor kenners"
    ]
  },
  {
    name: "Rooh Al Anfar",
    image: "assets/images/rooh-al-anfar.webp",
    alt: "Rooh Al Anfar",
    price: 31.50, 
    description: "Een intense, oosterse geur met een rijke mix van oudh en exotische specerijen, perfect voor liefhebbers van krachtige aroma's.",
    figcaption: "Rooh Al Anfar combineert rijke oudh met exotische specerijen voor een krachtige en intense geurervaring.",
    features: [
      "Rijke mix van oudh en specerijen",
      "Krachtige aroma's",
      "Intense oosterse geur"
    ]
  }
];

const cart = {};
const wishlist = [];
let totalPrice = 0;

function getProductByName(productName) {
    return products.find(product => product.name === productName);
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    cartItemsList.innerHTML = ''; // Clear existing items

    for (const productName in cart) {
        const product = getProductByName(productName);
        const quantity = cart[productName];

        const listItem = document.createElement('li');

        const productText = document.createElement('span');
        productText.textContent = `${productName} (€${(product.price * quantity).toFixed(2)}) x `;

        const quantityDropdown = document.createElement('select');
        for (let i = 0; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (i === quantity) {
                option.selected = true;
            }
            quantityDropdown.appendChild(option);
        }

        quantityDropdown.addEventListener('change', function () {
            const newQuantity = parseInt(this.value, 10);

            if (newQuantity === 0) {
                delete cart[productName];
            } else {
                cart[productName] = newQuantity;
            }

            totalPrice = Object.entries(cart).reduce((total, [name, qty]) => {
                const prod = getProductByName(name);
                return total + prod.price * qty;
            }, 0);

            updateCartDisplay();
        });

        listItem.appendChild(productText);
        listItem.appendChild(quantityDropdown);
        cartItemsList.appendChild(listItem);
    }

    totalPriceElement.textContent = `Total: €${totalPrice.toFixed(2)}`;
}

function showNotification(message, productImage) {
    const notificationContainer = document.getElementById('notification-container');

    const notification = document.createElement('div');
    notification.classList.add('notification');

    if (productImage) {
        const img = document.createElement('img');
        img.src = productImage;
        img.alt = "Product image";
        notification.appendChild(img);
    }

    const messageText = document.createElement('p');
    messageText.textContent = message;
    notification.appendChild(messageText);

    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product-name');
        const product = getProductByName(productName);

        if (!productName) {
            console.log('Product name is null');
            return;
        }

        if (cart[productName]) {
            cart[productName] += 1;
        } else {
            cart[productName] = 1;
        }

        totalPrice += product.price;

        updateCartDisplay();

        showNotification(`${productName} has been added to the cart.`, product.image);
    });
});

document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-product-name');
        const product = getProductByName(productName);

        if (!productName) {
            console.log('Product name is null');
            return;
        }

        const index = wishlist.indexOf(productName);

        if (index !== -1) {
            wishlist.splice(index, 1);
            this.classList.remove('wishlisted');
            showNotification(`${productName} has been removed from the wishlist.`, product.image);
        } else {
            wishlist.push(productName);
            this.classList.add('wishlisted');
            showNotification(`${productName} has been added to the wishlist.`, product.image);
        }
    });
});

function loadProductDetails() {
    const queryParams = new URLSearchParams(window.location.search);
    const productName = queryParams.get('name');

    if (productName) {
        const product = getProductByName(productName);

        if (product) {
            document.title = `Frosty Fragrances - ${product.name}`;

            document.querySelector('h1').textContent = `${product.name}`;
            document.querySelector('figure img').src = product.image;
            document.querySelector('figure img').alt = product.alt;
            document.querySelector('figcaption').textContent = product.figcaption;
            document.querySelector('.product-features ul').innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
            document.querySelector('#product-price').textContent = product.price.toFixed(2);

            const addToCartButton = document.querySelector('.add-to-cart');
            const addToWishlistButton = document.querySelector('.add-to-wishlist');
            addToCartButton.setAttribute('data-product-name', product.name);
            addToWishlistButton.setAttribute('data-product-name', product.name);
        } else {
            document.querySelector('h1').textContent = 'Product not found';
        }
    } else {
        console.log("No product name found in the URL");
    }
}

document.addEventListener("DOMContentLoaded", loadProductDetails);

// Klanten.html

fetch('https://randomuser.me/api/?results=12')
      .then(response => response.json())
      .then(data => {
        const customers = data.results;
        const customerGrid = document.getElementById('customer-grid');

        customers.forEach(customer => {
          const customerCard = document.createElement('article');
          customerCard.classList.add('customer-card');


          const img = document.createElement('img');
          img.src = customer.picture.large;
          img.alt = `${customer.name.first} ${customer.name.last}`;
          customerCard.appendChild(img);

   
          const name = document.createElement('h2');
          name.textContent = `${customer.name.title} ${customer.name.first} ${customer.name.last}`;
          customerCard.appendChild(name);


          const country = document.createElement('p');
          country.innerHTML = `<strong>Land:</strong> ${customer.location.country}`;
          customerCard.appendChild(country);

   
          const email = document.createElement('p');
          email.innerHTML = `<strong>Email:</strong> ${customer.email}`;
          customerCard.appendChild(email);
          customerGrid.appendChild(customerCard);
        });
      })
      .catch(error => console.error('Error fetching customer data:', error));


      const qrCode = document.getElementById("qr-code");
      const qrModal = document.getElementById("qr-modal");
      const qrFullImage = document.getElementById("qr-full-image");
      const qrClose = document.getElementById("qr-close");
      
      qrCode.addEventListener("click", () => {
        qrModal.style.display = "flex"; // 
      });
      
      qrClose.addEventListener("click", () => {
        qrModal.style.display = "none";
      });
      
      window.addEventListener("click", (e) => {
        if (e.target === qrModal) {
          qrModal.style.display = "none";
        }
      });