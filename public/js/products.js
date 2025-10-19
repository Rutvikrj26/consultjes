document.addEventListener('DOMContentLoaded', () => {
    const productListings = document.querySelector('.product-listings');

    // Function to create product HTML
    const createProductHtml = (product) => {
        let productHtml = '<h4>' + product.name + '</h4>';
        productHtml += '<ul>';
        for (const [key, value] of Object.entries(product)) {
            if (key !== 'name' && key !== 'image') {
                productHtml += '<li><strong>' + key.replace(/_/g, ' ') + ':</strong> ' + value + '</li>';
            }
        }
        productHtml += '</ul>';
        if (product.image) {
            productHtml += '<img src="' + product.image + '" alt="' + product.name + '" style="max-width: 200px;">';
        }
        return productHtml;
    };

    // Fetch and display products
    const fetchProducts = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const categorySection = document.createElement('div');
                categorySection.className = 'product-category';

                const categoryTitle = document.createElement('h2');
                categoryTitle.textContent = data.category;
                categorySection.appendChild(categoryTitle);

                data.products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.className = 'product-item';
                    productItem.innerHTML = createProductHtml(product);
                    categorySection.appendChild(productItem);
                });

                productListings.appendChild(categorySection);
            });
    };

    // Load all product data
    fetchProducts('data/air-cooled-chillers.json');
    fetchProducts('data/water-cooled-chillers.json');
    fetchProducts('data/specialized-chillers.json');
    fetchProducts('data/cooling-tunnels.json');
    fetchProducts('data/linear-bearings-guideways.json');
    fetchProducts('data/shafts-ballscrews-supports.json');
    fetchProducts('data/bushings-specialized-bearings.json');
    fetchProducts('data/ancillary-material-handling.json');
    fetchProducts('data/pumps.json');
    fetchProducts('data/motors.json');
    fetchProducts('data/valves.json');
    fetchProducts('data/mobile-hydraulics-linear-motion.json');
    fetchProducts('data/sensors-accessories.json');
});