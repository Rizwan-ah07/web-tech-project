// Array of product objects
const products = [
    {
      name: "Secret Oud",
      image: "assets/images/secret-oud.webp",
      alt: "Secret Oud",
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
      description: "Een intense, oosterse geur met een rijke mix van oudh en exotische specerijen, perfect voor liefhebbers van krachtige aroma's.",
      figcaption: "Rooh Al Anfar combineert rijke oudh met exotische specerijen voor een krachtige en intense geurervaring.",
      features: [
        "Rijke mix van oudh en specerijen",
        "Krachtige aroma's",
        "Intense oosterse geur"
      ]
    }
  ];
  
  
  // Function to get the product based on the URL parameter
  function getProductByName(productName) {
    return products.find(product => product.name === productName);
  }
  
  function loadProductDetails() {
    const queryParams = new URLSearchParams(window.location.search); // Get URL parameters
    const productName = queryParams.get('name'); // Get the product name from the URL
    
    console.log("Product Name from URL:", productName); // Debugging log
    
    if (productName) {
      const product = getProductByName(productName); // Find the product by name
      console.log("Product Found:", product); // Debugging log
  
      if (product) {
        // Set the page title to the product name
        document.title = `Frosty Fragrances - ${product.name}`;
  
        // Update the product details in the HTML
        document.querySelector('h1').textContent = `${product.name} by Anfar`;
        document.querySelector('figure img').src = product.image;
        document.querySelector('figure img').alt = product.alt;
        document.querySelector('figcaption').textContent = product.figcaption;
        document.querySelector('.product-features ul').innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
      } else {
        // If the product is not found, show an error message or redirect
        document.querySelector('h1').textContent = 'Product not found';
      }
    } else {
      console.log("No product name found in the URL");
    }
  }
  
  // Load the product details when the DOM is ready
  document.addEventListener("DOMContentLoaded", loadProductDetails);
  