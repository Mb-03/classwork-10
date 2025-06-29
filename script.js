const hero = document.querySelector("#hero");

document.querySelector("#get").addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((product) => {
        let container = document.createElement("div");

        let id = document.createElement("h4");

        let title = document.createElement("h2");

        let price = document.createElement("h4");

        let description = document.createElement("p");

        let category = document.createElement("h3");

        let image = document.createElement("img");

        let ratingRate = document.createElement("h3");

        let ratingCount = document.createElement("h4");

        id.textContent = product.id;
        container.appendChild(id);

        title.textContent = product.title;
        container.appendChild(title);

        price.textContent = product.price;
        container.appendChild(price);

        description.textContent = product.description;
        container.appendChild(description);

        category.textContent = product.category;
        container.appendChild(category);

        image.src = product.image;
        container.appendChild(image);

        ratingRate.textContent = product.rating.rate;
        container.appendChild(ratingRate);

        ratingCount.textContent = product.rating.count;
        container.appendChild(ratingCount);

        hero.appendChild(container);
      });
    });
});
