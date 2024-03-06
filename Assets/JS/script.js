const restaurants = [
  {
    name: "Yoshinoya",
    overlayText: "rating: 9.5/10",
    image:
      "https://a3x2k4e2.rocketcdn.me/wp-content/uploads/2022/08/gyudon-jollibee.jpg",
    description:
      "Yoshinoya is a well-known Japanese fast food chain famous for its delicious Gyudon (beef bowl). It features thinly sliced beef and onions simmered in a savory soy-based sauce, served over a bowl of steaming rice.",
    address: "2/F SM City North EDSA, North Avenue Corner Edsa 1105",
    phoneNumber: "288-2888",
    openTime: "10:00 AM - 9:00 PM",
    priceRange: "PHP 100 - PHP 300",
  },

  {
    name: "Senju",
    overlayText: "rating: 10/10",
    image:
      "https://retaildesignblog.net/wp-content/uploads/2015/09/Bam-Senju-Restaurant-by-Metaphor-Interior-Jakarta-Indonesia-720x480.jpg",
    description:
      "Senju Japanese Restaurant in the Philippines offers an authentic taste of Japan with its diverse menu featuring traditional Japanese cuisine. Known for its elegant ambiance and skilled chefs, Senju provides a delightful dining experience, capturing the essence of Japanese culinary artistry",
    address: "1 Garden Way, Ortigas Center, Mandaluyong, 1550 Metro Manila",
    phoneNumber: "8633-8888",
    openTime: "11:30 AM - 10:00 PM",
    priceRange: "PHP 400 - PHP 2,000",
  },
  {
    name: "Tokyo Tokyo",
    overlayText: "rating: 6.5/10",
    image:
      "https://savorjapan.com/gg/content_image/t0227_009_20190322014336.jpg",
    description:
      "Tokyo Tokyo, a well-loved Japanese restaurant in the Philippines, serves up a delightful blend of authentic Japanese flavors. From sushi to ramen, tempura to bento, it offers a diverse menu of Japanese favorites, all in a casual and inviting setting. Enjoy a taste of Japan right here in the heart of the Philippines with Tokyo Tokyo.",
    address: "3/F, 168 Shopping Mall, Recto Avenue, Metro Manila",
    phoneNumber: "7957-7641",
    openTime: "9:00 AM - 7:00 PM",
    priceRange: "PHP 100 - PHP 500",
  },
  {
    name: "Yayoi",
    overlayText: "rating: 9/10",
    image:
      "https://primer.com.ph/food/wp-content/uploads/sites/4/2016/09/IMG_9455-e1473938675735.jpg",
    description:
      "Yayoi Japanese Teishoku Restaurant in the Philippines presents a unique dining experience with its traditional Teishoku-style meals. Combining quality ingredients and meticulous preparation, Yayoi offers a taste of Japan's culinary excellence. From savory main dishes to delightful sides, immerse yourself in the rich flavors of Japanese cuisine at Yayoi.",
    address: "3rd level, Mega B, SM Megamall, Mandaluyong, Metro Manila",
    phoneNumber: "8634-4865",
    openTime: "10:00 AM - 8:30 PM",
    priceRange: "PHP 175 - PHP 1,000",
  },
];

let popupOpen = false;

function generateRestaurantCards() {
  const restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = "";

  restaurants.slice(0, 4).forEach((restaurant, index) => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "position-relative");
    card.setAttribute("data-index", index);

    card.innerHTML = `
          <h5 class="card-title">${restaurant.name}</h5>
              <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
              
              <div class="card-overlay">
                  <p class="overlay-text">${restaurant.overlayText}</p>
              </div>
          `;
    card.addEventListener("click", () => openPopup(restaurant));
    restaurantList.appendChild(card);
  });
}

function openPopup(restaurant) {
  const popup = document.getElementById("popup");

  if (!popupOpen) {
    popup.innerHTML = `
            <div class="popup-content">
              <div class="popup-image">
                <img src="${restaurant.image}" class="popup-img" alt="${restaurant.name}">
              </div>
              <div class="popup-info">
                <h2>${restaurant.name}</h2>
                <p><strong>Address:</strong> ${restaurant.address}</p>
                <p><strong>Phone:</strong> ${restaurant.phoneNumber}</p>
                <p><strong>Open Time:</strong> ${restaurant.openTime}</p>
                <p><strong>Price Range:</strong> ${restaurant.priceRange}</p>
                <p>${restaurant.description}</p>
              </div>
            </div>
          `;
    popup.style.display = "block";
    popupOpen = true;
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  popupOpen = false;
}

document.getElementById("menuButton").addEventListener("click", closePopup);
generateRestaurantCards();
