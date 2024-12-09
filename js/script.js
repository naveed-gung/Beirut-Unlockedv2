    const cardData = {
        Accomodation: {
            Hotel: [
                { name: 'Hotel Albergo', image: 'images/pictures/hotel-a.jpg', description: 'An urban oasis in the heart of Beirut.', phone: '+961 1 33 97 97', lat: 33.8880005, lng: 35.5076247 },
                { name: 'Arthaus Beirut', image: 'images/pictures/hotel-c.jpg', description: 'Elegant adults-only boutique hotel.', phone: '+961 1 44 60 10', lat: 33.8946197, lng: 35.5093313 },
                { name: 'The Gem Boutique Hotel', image: 'images/pictures/hotel-d.jpg', description: 'Variety of amenities...', phone: '+961 76 95 28 52', lat: 33.8949782, lng: 35.5139809 },
                { name: 'IHG Hotel', image: 'images/pictures/hotel-e.jpg', description: 'Stunning views...', phone: '+961 1 36 91 00', lat: 33.900734, lng: 35.4924051 },
            ],
            GuestHouse: [
                { name: 'Beit Toureef', image: 'images/pictures/hotel-b.jpg', description: 'A charming house in Beirut.', phone: '+961 70 38 40 21', lat: 33.8953375, lng: 35.516583 },
                { name: 'Beit Tamanna', image: 'images/pictures/bt.jpg', description: 'Breathtaking contemporary design.', phone: '+961 76 70 37 19', lat: 33.8949351, lng: 35.4285519 },
                { name: 'La Maison Rayes', image: 'images/pictures/lr.jpg', description: 'Unique guest house in Beirut.', phone: '+961 3 32 56 98', lat: 33.893287, lng: 35.434417 },
                { name: 'Gemmayzeh House', image: 'images/pictures/gh.jpg', description: 'Exquisite rooms in Beirut.', phone: '03 141 144', lat: 33.8948887, lng: 35.4321694 },
            ],
            Hostel: [
                { name: 'Hostel Beirut', image: 'images/pictures/hb.jpg', description: 'Close to bars and cafes.', phone: '+961 78 80 42 67', lat: 33.8947115, lng: 35.4456443 },
                { name: 'Mady\'s Hostel', image: 'images/pictures/mh.jpg', description: 'Traveler reviews and great deals.', phone: '+961 3 50 22 49', lat: 33.8951696, lng: 35.4375828 },
                { name: 'Unit For Living', image: 'images/pictures/ul.jpg', description: 'Comfortable stay in Beirut.', phone: '+961 1 58 03 80', lat: 33.9000958, lng: 35.4437425 },
                { name: 'The Colony Beirut', image: 'images/pictures/tcb.jpg', description: 'Private small rooms.', phone: '+961 3 77 69 13', lat: 33.9010255, lng: 35.4473454 },
            ],
        },
        Food: {
            Restaurant: [
                { name: 'AI Restaurant', image: 'images/pictures/restaurant-a.jpg', description: 'New Asian restaurant concept.', phone: '+961 81 41 53 33', lat: 33.900672, lng: 35.4978794 },
                { name: 'La Villa 1920 ', image: ' images/pictures/restaurant-b.jpg', description: 'Fine dining experience with Italian cuisine.', phone: '+961 3 77 18 44', lat: 33.8735453, lng: 35.5158006 },
                { name: 'The Bros', image: 'images/pictures/restaurant-c.jpg', description: 'House for burgers, wings, and fries.', phone: '+961 1 57 02 97', lat: 33.8972115, lng: 35.5271449 },
                { name: 'Metropole', image: 'images/pictures/restaurant-d.jpg', description: 'Best steak in town...', phone: '+961 1 99 99 38', lat: 33.901104, lng: 35.5006156 },
            ],
            StreetFood: [
                { name: 'Mac n\' Cheese', image: 'images/pictures/mc.jpg', description: 'Cozy pasta shop in Beirut.', phone: '+961 71 15 50 57', lat: 33.8448063, lng: 35.4222361 },
                { name: 'Fred\'s Food', image: 'images/pictures/ff.jpg', description: 'American, International, Street Food.', phone: '+961 1 33 30 88', lat: 33.8877298, lng: 35.5203394 },
                { name: 'Sawani Falfoul', image: 'images/pictures/sf.jpg', description: 'Lebanese street food.', phone: '+961 70 91 88 94', lat: 33.8732221, lng: 35.5156036 },
                { name: 'Crew Hut', image: 'images/pictures/ch.jpg', description: 'Healthy rich sandwiches.', phone: '+961 1 38 66 58', lat: 33.8346712, lng: 35.4602907 },
            ],
            coffeeShops: [
                { name: 'Cozy Café', image: 'images/pictures/coffeeshop-a.jpg', description: 'A 3-in-1 experience.', phone: '+961 70 66 56 65', lat: 33.8698574, lng: 35.4850322 },
                { name: 'Café Younes', image: 'images/pictures/coffeeshop-b.jpg', description: 'Freshly roasted coffee.', phone: '+961 1 75 09 75', lat: 33.8949165, lng: 35.4792144 },
                { name: 'Caffeine 1922', image: 'images/pictures/coffeeshop-c.jpg', description: 'Premium green beans.', phone: '+961 3 11 31 69', lat: 33.88958, lng: 35.4945806 },
                { name: 'Beyt', image: 'images/pictures/bcf.jpg', description: 'Relax in Mar Mikhael.', phone: '+961 76 76 13 90', lat: 33.897309, lng: 35.5278253 },
            ],
            patisserie: [
                { name: 'Cannelle Verdun', image: 'images/pictures/cv.jpg', description: 'Pâtisserie Lebanon.', phone: '+961 1 79 19 11', lat: 33.892371, lng: 35.4283484 },
                { name: 'Praline', image: 'images/pictures/pe.jpg', description: 'Unique concept in Beirut.', phone: '+961 1 35 17 51', lat: 33.8966377, lng: 35.4031932 },
                { name: 'Emotions', image: 'images/pictures/es.jpg', description: 'Mouth watering cakes.', phone: '+961 1 32 13 35', lat: 33.8915449, lng: 35.4326565 },
                { name: 'Gustav', image: '/images/pictures/gvc.jpg', description: 'Bespoke cakes for special occasions.', phone: '+961 1 74 71 99', lat: 33.8963806, lng: 35.3975914 },
            ]
        },
        NightLife: [
            { name: 'Skybar', image: 'images/pictures/sb.jpg', description: 'Best Bar in the World.', phone: '+961 3 93 91 91', lat: 33.9043895, lng: 35.4230892 },
            { name: 'Taiga Beirut', image: 'images/pictures/tg.jpg', description: 'Number one night club in Lebanon.', phone: '+961 70 49 94 08', lat: 33.8885408, lng: 35.4255444 },
            { name: 'AHM', image: 'images/pictures/ahm.jpg', description: 'Turn any corner of the dancefloor into your stage.', phone: '+961 3 70 33 71', lat: 33.9063347, lng: 35.424266 },
            { name: 'Capri', image: 'images/pictures/cc.jpg', description: 'Authentic Lebanese nightlife experience.', phone: '+961 70 22 02 23', lat: 33.8448063, lng: 35.4379095 },
        ],
        AMustVisit: [
            { name: 'National Museum of Beirut', image: 'images/pictures/museum-a.jpg', description: 'Principal museum of archaeology in Lebanon.', phone: '+961 1 42 67 03', lat: 33.8783745, lng: 35.5124569 },
            { name: 'Mim Museum', image: 'images/pictures/museum-b.jpg', description: 'Private mineral and fossil museum.', phone: '+961 1 42 16 72', lat: 33.8798086, lng: 35.51412 },
            { name: 'Nicolas Sursock Museum', image: 'images/pictures/museum-c.jpg', description: 'Showcasing modern and contemporary art.', phone: '+961 1 20 20 01', lat: 33.893204, lng: 35.5137851 },
        ],
        rides: {
            Bus: [
                { name: 'Bus 15', image: 'images/pictures/15.jpg', description: 'From Doura to Verdun by Sea side and vice Versa', },
                { name: 'Bus 12', image: 'images/pictures/12.jpg', description: 'From Hamra to Bourj Barajne and vice versa', },
                { name: 'Bus 02', image: 'images/pictures/02.jpg', description: 'From Antolies To Hamra and vice versa', },
                { name: 'Bus 04', image: 'images/pictures/04.jpg', description: 'From Hamra to Hadath and vice versa', },
            ],
            Taxi: [
                { name: 'Uber', image: 'images/pictures/uber.jpg', description: 'Ride with Uber for a comfortable journey.', phone: '+961 1 23 45 67', lat: 33.8880005, lng: 35.5076247 },
                { name: 'Taxif', image: 'images/pictures/taxif.jpg', description: 'Quick and easy rides with Taxif.', phone: '+961 1 23 45 68', lat: 33.8953375, lng: 35.516583 },
                { name: 'Allo Taxi', image: 'images/pictures/at.jpg', description: 'Popular ride-hailing...', url: 'https://allo.taxi/home', phone: '1213' },
                { name: 'Talixo-Beirut', image: 'images/pictures/tb.jpg', description: 'Standardized bookings...', url: 'https://talixo.com/taxi-beirut/' },
            ],
            Bike: [
                { name: 'Beirut by Bike', image: 'images/pictures/byb.jpg', description: 'Relaxing Bike Rides...', whatsapp: 'https://wa.me/9613435524' },
                { name: 'Wave Bike', image: 'images/pictures/wb.jpg', description: 'Rent an e-bike for a fun ride around the city.', phone: '+961 1 23 45 69', lat: 33.8946197, lng: 35.5093313 },
                { name: 'Electrip', image: 'images/pictures/et.jpg', description: 'Discover Beirut your way in a sustainable way. We offer electric kick-scooters, electric bicycles and electric motorcycles that can bring you anywhere you want. Rent it for a day, a week, a month or even for just an hour! Whatever your ride is, we got you covered.', phone: '+961 81 888 912', lat: 33.894938, lng: 35.512063, },
                { name: 'Beach Cruisers', image: 'images/pictures/bc.jpg', description: 'Here at Beach Cruisers, we have a vision of creating a new trend in Lebanon; one that will serve the local and tourist communities alike.', phone: '+961 1 374 464', lat: 33.891991, lng: 35.492874, },
            ]
        },
    };


    // Add this function right after cardData
    function createCard(data, onClick, isMainCard = false) {
        const card = document.createElement('div');
        card.classList.add('card', 'flip-card');
        
        const imageHTML = !isMainCard && data.image ? `<img src="${data.image}" alt="${data.name}" />` : '';
    
        // Sanitize the ID
        const sanitizedId = data.name
            .replace(/[^a-zA-Z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .toLowerCase();

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    ${imageHTML}
                    <h3>${data.name}</h3>
                    <p>${data.description}</p>
                    ${data.phone ? `<p><span style="margin-right: 100px; font-weight: bold;">📞 ${data.phone}</span><span style="margin-left: 100px; font-weight: bold;"> <button class="marker-icon"onclick="showMap(event, ${data.lat}, ${data.lng})">📍</button></span></p>` : ''}
                </div>
                <div class="card-back">
                    <h3>${data.name} - Map</h3>
                    <div id="map-${data.name.replace(/\s+/g, '-')}" style="width: 100%; height: 100%;"></div>
                    <br/>
                    <button class="close-map" onclick="closeMap(event)">Close Map</button>
                </div>
            </div>
        `;

        // Add some CSS to ensure the map container is visible
        const mapContainer = card.querySelector('.map-container');
        if (mapContainer) {
            mapContainer.style.width = '100%';
            mapContainer.style.height = '300px';
            mapContainer.style.marginBottom = '10px';
        }

        card.addEventListener('click', onClick);
        return card;
    }


document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");
    const loginBtn = document.getElementById("login-btn");
    const signupBtn = document.getElementById("signup-btn");
    const mainContainer = document.querySelector("main");
    const rideBtn = document.getElementById("ride-btn");
    const homeBtn = document.getElementById("home-btn");
    const recentlyViewedBtn = document.getElementById("recently-viewed-btn");
    const bookBtn = document.getElementById("book-btn");

    const loginSignupContainer = document.getElementById('login-signup-container');
    const container = document.querySelector('.container');

    let searchInput;
    let suggestionsContainer;

    initializeSearch();
    
    function initializeSearch() {
        searchInput = document.querySelector('.search-bar');
        suggestionsContainer = document.getElementById('suggestions');
    
        if (searchInput) {
            searchInput.style.display = 'block';
            searchInput.style.visibility = 'visible';
            searchInput.style.opacity = '1';
            searchInput.style.position = 'relative';
            
            // Add input event listener for real-time filtering
            searchInput.addEventListener('input', filterCards);
            
            // Add keydown event listener for Enter key
            searchInput.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    
                    // Get the first suggestion if available
                    const firstSuggestion = suggestionsContainer.querySelector('.suggestion-item');
                    if (firstSuggestion) {
                        firstSuggestion.click(); // Simulate click on first suggestion
                    } else {
                        // If no suggestions, perform a search with current input
                        const query = searchInput.value.toLowerCase();
                        if (query) {
                            filterCards(event);
                        }
                    }
                }
            });
        } else {
            console.error('Search input element not found');
        }
    }

    function filterCards(event) {
        const input = event.target;
        if (!input || !suggestionsContainer) {
            console.error('Search elements not found');
            return;
        }
    
        const query = input.value.toLowerCase();
        console.log('Searching for:', query); // Debug log
        
        suggestionsContainer.innerHTML = '';
        
        if (query) {
            const allItems = [];
            
            // Debug log the cardData
            console.log('Available data:', cardData);
            
            Object.entries(cardData).forEach(([category, content]) => {
                if (Array.isArray(content)) {
                    content.forEach(item => {
                        console.log('Adding item:', item.name); // Debug log
                        allItems.push({
                            name: item.name,
                            category: category,
                            data: item
                        });
                    });
                } else {
                    Object.entries(content).forEach(([subcategory, items]) => {
                        items.forEach(item => {
                            console.log('Adding item:', item.name); // Debug log
                            allItems.push({
                                name: item.name,
                                category: category,
                                subcategory: subcategory,
                                data: item
                            });
                        });
                    });
                }
            });
    
            console.log('All searchable items:', allItems); // Debug log
    
            const matchedItems = allItems.filter(item => {
                const nameMatch = item.name.toLowerCase().includes(query);
                const categoryMatch = item.category.toLowerCase().includes(query);
                const subcategoryMatch = item.subcategory && item.subcategory.toLowerCase().includes(query);
                
                console.log(`Checking ${item.name}: ${nameMatch || categoryMatch || subcategoryMatch}`); // Debug log
                
                return nameMatch || categoryMatch || subcategoryMatch;
            });
    
            console.log('Matched items:', matchedItems); // Debug log
    
            if (matchedItems.length > 0) {
                suggestionsContainer.style.display = 'block';
                matchedItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'suggestion-item';
                    div.textContent = `${item.name} (${item.subcategory || item.category})`;
                    
                    // Make suggestions visible
                    div.style.backgroundColor = '#1B1717';
                    div.style.color = '#EEEBDD';
                    div.style.padding = '10px';
                    div.style.cursor = 'pointer';
                    div.style.borderBottom = '1px solid #EEEBDD';
                    
                    div.addEventListener('click', () => {
                        const cardWrapper = document.createElement('div');
                        cardWrapper.classList.add('card-wrapper');
                        
                        const card = createCard(item.data, () => {
                            addRecentlyViewed(item.data);
                        });
                        card.style.width = '1400px';
                        cardWrapper.style.marginTop = '250px';
                        
                        cardWrapper.appendChild(card);
                        clearMainContainer();
                        mainContainer.appendChild(cardWrapper);
                        
                        input.value = '';
                        suggestionsContainer.style.display = 'none';
                    });
                    
                    suggestionsContainer.appendChild(div);
                });
                
                // Make sure suggestions container is visible
                suggestionsContainer.style.display = 'block';
                suggestionsContainer.style.position = 'absolute';
                suggestionsContainer.style.top = '100%';
                suggestionsContainer.style.left = '10%';
                suggestionsContainer.style.width = '350px';
                suggestionsContainer.style.zIndex = '1000';
                
            } else {
                suggestionsContainer.style.display = 'none';
            }
        } else {
            suggestionsContainer.style.display = 'none';
            displayMainCards();
        }
    }

function clearMainContainer() {
    // Save the search container before clearing
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        searchContainer.remove(); // Temporarily remove it
    }
    
    // Clear the main container
    mainContainer.innerHTML = '';
    
    // Add the search container back
    if (searchContainer) {
        mainContainer.insertBefore(searchContainer, mainContainer.firstChild);
    }
}

const particlesPerThousandPixels = 0.1;
const fallSpeed = 1.25;
const pauseWhenNotActive = true;
const maxSnowflakes = 200;
const snowflakes = [];

let snowflakeInterval;
let isTabActive = true;
let recentlyViewed = [];
let isLoggedIn = false; 



function toggleForm() {
    loginSignupForm.style.display = loginSignupForm.style.display === "none" || loginSignupForm.style.display === "" ? "flex" : "none";
}

function resetSnowflake(snowflake) {
    const size = Math.random() * 5 + 1;
    const viewportWidth = window.innerWidth - size; 
    const viewportHeight = window.innerHeight;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * viewportWidth}px`; 
    snowflake.style.top = `-${size}px`;

    const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
    snowflake.style.animationDuration = `${animationDuration}s`;
    snowflake.style.animationTimingFunction = "linear";
    snowflake.style.animationName = Math.random() < 0.5 ? "fall" : "diagonal-fall";

    setTimeout(() => {
        if (parseInt(snowflake.style.top, 10) < viewportHeight) {
            resetSnowflake(snowflake);
        } else {
            snowflake.remove(); 
        }
    }, animationDuration * 1000);
}

function createSnowflake() {
    if (snowflakes.length < maxSnowflakes) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        snowflakes.push(snowflake);
        snowContainer.appendChild(snowflake);
        resetSnowflake(snowflake);
    }
}

function generateSnowflakes() {
    const numberOfParticles = Math.ceil((window.innerWidth * window.innerHeight) / 1000) * particlesPerThousandPixels;
    const interval = 5000 / numberOfParticles;

    clearInterval(snowflakeInterval);
    snowflakeInterval = setInterval(() => {
        if (isTabActive && snowflakes.length < maxSnowflakes) {
            requestAnimationFrame(createSnowflake);
        }
    }, interval);
}

// Function to filter cards based on search input


function displayFilteredCards(categories) {
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    categories.forEach(category => {
        const card = createCard(
            { name: category, image: '', description: '' },
            () => displaySubcategories(category),
            true
        );
        card.style.width = '250px';
        card.style.height = '230px';
        cardWrapper.appendChild(card);
    });

// Initialize search functionality
searchInput.addEventListener('input', filterCards);
clearMainContainer();
mainContainer.appendChild(cardWrapper);
}

function displayMainCards() {
    // Create search container if it doesn't exist
    let searchContainer = document.querySelector('.search-container');
    if (!searchContainer) {
        searchContainer = document.createElement('div');
        searchContainer.classList.add('search-container');
        searchContainer.innerHTML = `
            <input type="text" class="search-bar" placeholder="Search...">
            <div id="suggestions" class="suggestions"></div>
        `;
    }
    
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    
    const categories = ['Accomodation', 'Food', 'NightLife', 'AMustVisit'];
    
    categories.forEach(category => {
        const card = createCard(
            { name: category, image: '', description: '' },
            () => displaySubcategories(category),
            true
        );
        
        card.style.width = '350px';
        card.style.height = '270px';
        card.style.textAlign = 'center';
        
        cardWrapper.appendChild(card);
    });
    
    clearMainContainer();
    mainContainer.appendChild(searchContainer);
    mainContainer.appendChild(cardWrapper);
}

function createCard(data, onClick, isMainCard = false) {
    const card = document.createElement('div');
    card.classList.add('card', 'flip-card');
    
    const imageHTML = !isMainCard && data.image ? `<img src="${data.image}" alt="${data.name}" />` : '';
    const sanitizedId = sanitizeId(data.name);  

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                ${imageHTML}
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                ${data.phone ? `<p><span style="margin-right: 100px; font-weight: bold;">📞 ${data.phone}</span><span style="margin-left: 100px; font-weight: bold;"> <button class="marker-icon"onclick="showMap(event, ${data.lat}, ${data.lng})">📍</button></span></p>` : ''}
            </div>
            <div class="card-back">
                <h3>${data.name} - Map</h3>
                <div id="map-${sanitizedId}" class="map-container" style="width: 100%; height: 100%;"></div>
                <button class="close-map" onclick="closeMap(event)">Close Map</button>
            </div>
        </div>
    `;

    // Add click event listener
    card.addEventListener('click', (event) => {
        if (onClick) {
            onClick(event);
        }
        // Only add to recently viewed if it's a detailed card (has image, description, and phone)
        if (!isMainCard && data.image && data.description && data.phone) {
            addRecentlyViewed(data);
        }
    });

    return card;
}

// For the mini-map on card back (when marker is clicked)
window.showMap = function(event, lat, lng) {
    event.stopPropagation(); 

    const card = event.target.closest('.flip-card');
    const cardInner = card.querySelector('.card-inner');
    
    // Get location name and map ID
    const locationName = card.querySelector('.card-front h3').innerText;
    const mapId = `map-${sanitizeId(locationName)}`;
    
    // Flip the card first
    cardInner.style.transform = 'rotateY(180deg)';

    // Add a delay to ensure the map container is visible
    setTimeout(() => {
        const mapElement = document.getElementById(mapId);
        
        try {
            // Initialize Google Map for card back
            const map = new google.maps.Map(mapElement, {
                center: { lat: parseFloat(lat), lng: parseFloat(lng) },
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // Add marker
            const marker = new google.maps.Marker({
                position: { lat: parseFloat(lat), lng: parseFloat(lng) },
                map: map,
                animation: google.maps.Animation.DROP
            });

            // Store map and marker references on the card element
            card.gMap = map;
            card.gMarker = marker;

            // Trigger a resize event after map initialization
            google.maps.event.trigger(map, 'resize');

            // Add the "Bigger Map" button if it doesn't exist
            if (!card.querySelector('.bigger-map-btn')) {
                const biggerMapBtn = document.createElement('button');
                biggerMapBtn.className = 'bigger-map-btn';
                biggerMapBtn.textContent = 'Bigger Map';
                biggerMapBtn.onclick = (e) => {
                    e.stopPropagation();
                    openBiggerMap(lat, lng, locationName, card);
                };
                mapElement.parentElement.insertBefore(biggerMapBtn, mapElement.nextSibling);
            }
        } catch (error) {
            console.error("Error initializing map:", error);
        }
    }, 500);
};

// For the bigger OpenStreetMap view
function openBiggerMap(lat, lng, locationName, card) {
    // Get card data
    const locationImage = card.querySelector('.card-front img')?.src || '';
    const locationDesc = card.querySelector('.card-front p')?.textContent || '';
    const locationPhone = card.querySelector('.card-front span')?.textContent || '';

    const mapWindow = window.open('', '_blank');
    mapWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${locationName} - Map</title>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
            <style>
                #map { height: 100vh; width: 100vw; }
                
                .custom-marker {
                    animation: markerDrop 0.5s ease-in;
                }
                
                .custom-marker.bounce {
                    animation: markerBounce 0.8s ease infinite;
                }
                
                .info-card {
                    background: #EEEBDD;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 15px rgba(0,0,0,0.2);
                    max-width: 300px;
                }
                
                .info-card img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    border-radius: 8px;
                    margin-bottom: 10px;
                }
                
                .info-card h3 {
                    color: #810000;
                    margin: 0 0 10px 0;
                    font-size: 1.5em;
                }
                
                .info-card p {
                    color: #1B1717;
                    margin: 5px 0;
                }
                
                .info-card .phone {
                    color: #810000;
                    font-weight: bold;
                    font-size: 1.1em;
                }
                
                @keyframes markerDrop {
                    0% { transform: translateY(-200px); opacity: 0; }
                    60% { transform: translateY(20px); opacity: 1; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes markerBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
            </style>
        </head>
        <body style="margin:0;">
            <div id="map"></div>
            <script>
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: \`<svg width="40" height="40" viewBox="0 0 24 24" fill="#CE1212">
                             <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0Z"/>
                           </svg>\`,
                    iconSize: [40, 40],
                    iconAnchor: [20, 40],
                    popupAnchor: [0, -40]
                });

                const map = L.map('map').setView([${lat}, ${lng}], 15);
                
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                const marker = L.marker([${lat}, ${lng}], {
                    icon: customIcon,
                    riseOnHover: true,
                    draggable: false
                }).addTo(map);

                const infoContent = \`
                    <div class="info-card">
                        <img src="${locationImage}" alt="${locationName}">
                        <h3>${locationName}</h3>
                        <p>${locationDesc}</p>
                        <p class="phone">${locationPhone}</p>
                    </div>
                \`;

                const popup = L.popup({
                    closeButton: true,
                    closeOnClick: false,
                    maxWidth: 320,
                    offset: L.point(0, -20),
                    autoPan: false
                }).setContent(infoContent);

                let isAnimating = false;
                marker.on('click', function(e) {
                    L.DomEvent.stopPropagation(e);
                    
                    const markerElement = this.getElement();
                    
                    if (!isAnimating) {
                        setTimeout(() => {
                            markerElement.classList.add('bounce');
                        }, 10);
                        
                        this.bindPopup(popup).openPopup();
                        isAnimating = true;
                    }
                });

                popup.on('close', function() {
                    const markerElement = marker.getElement();
                    markerElement.classList.remove('bounce');
                    isAnimating = false;
                    
                    marker.unbindPopup();
                });

                marker.getElement().classList.add('custom-marker');
            </script>
        </body>
        </html>
    `);
}

window.closeMap = function(event) {
    event.stopPropagation();
    const card = event.target.closest('.flip-card');
    const cardInner = card.querySelector('.card-inner');
    
    // Clean up existing map and marker
    if (card.gMap) {
        card.gMap = null;
    }
    if (card.gMarker) {
        card.gMarker = null;
    }
    
    cardInner.style.transform = 'rotateY(0deg)';
};

function displaySubcategories(category) {
    if (!cardData[category]) {
        console.error(`Category ${category} not found in cardData`);
        return;
    }

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    if (Array.isArray(cardData[category])) {
        const items = cardData[category];
        items.forEach(item => {
            const card = createCard(item, () => {
                addRecentlyViewed(item);
                alert(`You clicked on ${item.name}`);
            });
            cardWrapper.appendChild(card);
        });
    } else {
        const subcategories = Object.keys(cardData[category]);
        subcategories.forEach(subcategory => {
            const items = cardData[category][subcategory];
            const images = items.map(item => item.image);
            
            const card = document.createElement('div');
            card.classList.add('card');
            card.style.width = '350px';
            card.style.height = '410px';
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.style.backgroundColor = '#810000';
            card.style.borderRadius = '10px';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            
            const imageGrid = document.createElement('div');
            imageGrid.style.cssText = 'display: grid; grid-template-columns: 0.8fr 0.8fr; gap: 5px; padding: 4px; height: 250px;';
            
            for (let i = 0; i < 4; i++) {
                const imageDiv = document.createElement('div');
                imageDiv.style.cssText = 'height: 100px; border-radius: 5px; transition: opacity 0.3s ease; background-size: cover; background-position: center;';
                imageDiv.style.background = `url('${images[i]}') center/cover`;
                imageGrid.appendChild(imageDiv);
            }
            
            const nameContainer = document.createElement('div');
            nameContainer.style.cssText = 'position: absolute; bottom: 0; left: 0; right: 0; text-align: center; padding: 10px;';
            
            const name = document.createElement('h3');
            name.textContent = subcategory;
            name.style.cssText = 'margin: 0; color: #EEEBDC; font-size: 16px; transition: all 0.3s ease;';
            
            nameContainer.appendChild(name);
            
            card.addEventListener('mouseenter', () => {
                name.style.color = '#EEEBDC';
                name.style.fontSize = '18px';
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', () => {
                name.style.color = '#EEEBDC';
                name.style.fontSize = '16px';
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
            
            card.appendChild(imageGrid);
            card.appendChild(nameContainer);
            
            function shuffleImages() {
                const imageSlots = imageGrid.children;
                const shuffledImages = [...images].sort(() => Math.random() - 0.5);
                
                Array.from(imageSlots).forEach((slot, index) => {
                    slot.style.opacity = '0';
                    setTimeout(() => {
                        slot.style.background = `url('${shuffledImages[index]}') center/cover`;
                        slot.style.opacity = '1';
                    }, 300);
                });
            }
            
            const shuffleInterval = setInterval(shuffleImages, 2000);
            
            card.addEventListener('click', () => {
                clearInterval(shuffleInterval);
                displayDetailedSubcategory(category, subcategory);
            });

            cardWrapper.appendChild(card);
        });
    }

    clearMainContainer();
    mainContainer.appendChild(cardWrapper);
}

function displayDetailedSubcategory(category, subcategory) {
    const details = cardData[category][subcategory];
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    details.forEach(detail => {
        const card = createCard(detail, () => {
            console.log(`Viewed ${detail.name}`);
        });
        cardWrapper.appendChild(card);
    });

    clearMainContainer();
    mainContainer.appendChild(cardWrapper);
}

function addRecentlyViewed(detail) {
    // Only add items that have all the required details
    if (detail.image && detail.description && detail.phone) {
        const isAlreadyViewed = recentlyViewed.some(item => item.name === detail.name);
        if (!isAlreadyViewed) {
            recentlyViewed.push(detail);
            if (recentlyViewed.length > 8) {
                recentlyViewed.shift();
            }
            localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
        }
    }
}

window.addEventListener('load', () => {
    localStorage.removeItem('recentlyViewed');
    recentlyViewed = [];
});

const storedRecentlyViewed = localStorage.getItem('recentlyViewed');
if (storedRecentlyViewed) {
    recentlyViewed = JSON.parse(storedRecentlyViewed);
}

function showRecentlyViewed() {
    clearMainContainer();
    
    if (recentlyViewed.length === 0) {
        const message = document.createElement('div');
        message.style.textAlign = 'center';
        message.style.marginTop = '200px';
        message.style.color = '#EEEBDD';
        message.innerHTML = '<h2>No Recently Viewed Items</h2><p>Start exploring to see your history!</p>';
        mainContainer.appendChild(message);
        return;
    }

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.style.marginTop = '200px';
    
    recentlyViewed.forEach(item => {
        const card = createCard(item);
        card.style.width = '550px';
        card.style.backgroundColor = '#810000';
        card.style.borderRadius = '10px';
        card.style.padding = '20px';
        card.style.margin = '15px';
        card.style.color = '#EEEBDD';
        
        const cardImage = card.querySelector('img');
        if (cardImage) {
            cardImage.style.width = '100%';
            cardImage.style.height = 'auto';
            cardImage.style.maxHeight = '250px';
            cardImage.style.objectFit = 'cover';
        }
        
        cardWrapper.appendChild(card);
    });

    mainContainer.appendChild(cardWrapper);
}

function displayRideCategories() {
    clearMainContainer();
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.style.marginTop = '150px';

    const categories = ['Bus', 'Taxi', 'Bike'];
    
    categories.forEach(category => {
        // Define images for each category
        let images;
        switch(category) {
            case 'Bus':
                images = [
                    'images/pictures/15.jpg',
                    'images/pictures/12.jpg',
                    'images/pictures/02.jpg',
                    'images/pictures/04.jpg'
                ];
                break;
            case 'Taxi':
                images = [
                    'images/pictures/uber.jpg',
                    'images/pictures/taxif.jpg',
                    'images/pictures/at.jpg',
                    'images/pictures/tb.jpg'
                ];
                break;
            case 'Bike':
                images = [
                    'images/pictures/bike1.jpg',
                    'images/pictures/bike2.jpg',
                    'images/pictures/bike3.jpg',
                    'images/pictures/bike4.jpg'
                ];
                break;
        }
        
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '350px';
        card.style.height = '410px';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        card.style.backgroundColor = '#810000';
        card.style.borderRadius = '10px';
        card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        
        const imageGrid = document.createElement('div');
        imageGrid.style.cssText = 'display: grid; grid-template-columns: 0.8fr 0.8fr; gap: 5px; padding: 4px; height: 250px;';
        
        // Create image slots
        for (let i = 0; i < 4; i++) {
            const imageDiv = document.createElement('div');
            imageDiv.style.cssText = 'height: 100px; border-radius: 5px; transition: opacity 0.3s ease; background-size: cover; background-position: center;';
            imageDiv.style.background = `url('${images[i]}') center/cover`;
            imageGrid.appendChild(imageDiv);
        }
        
        const nameContainer = document.createElement('div');
        nameContainer.style.cssText = 'position: absolute; bottom: 0; left: 0; right: 0; text-align: center; padding: 10px;';
        
        const name = document.createElement('h3');
        name.textContent = category;
        name.style.cssText = 'margin: 0; color: #EEEBDC; font-size: 16px; transition: all 0.3s ease;';
        
        nameContainer.appendChild(name);
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            name.style.color = '#EEEBDC';
            name.style.fontSize = '18px';
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            name.style.color = '#EEEBDC';
            name.style.fontSize = '16px';
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
        
        // Image shuffling function
        function shuffleImages() {
            const imageSlots = imageGrid.children;
            const shuffledImages = [...images].sort(() => Math.random() - 0.5);
            
            Array.from(imageSlots).forEach((slot, index) => {
                slot.style.opacity = '0';
                setTimeout(() => {
                    slot.style.background = `url('${shuffledImages[index]}') center/cover`;
                    slot.style.opacity = '1';
                }, 300);
            });
        }
        
        // Start shuffling for all categories
        const shuffleInterval = setInterval(shuffleImages, 2000);
        
        card.addEventListener('click', () => {
            clearInterval(shuffleInterval);
            displayRideDetails(category);
        });

        card.appendChild(imageGrid);
        card.appendChild(nameContainer);
        cardWrapper.appendChild(card);
    });

    mainContainer.appendChild(cardWrapper);
}

function displayRideDetails(category) {
    clearMainContainer();
    
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.style.marginTop = '250px';

    const rides = cardData.rides[category];
    
    if (!rides) {
        console.error(`No rides found for category: ${category}`);
        return;
    }

    rides.forEach(ride => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '400px';
        card.style.backgroundColor = '#810000';
        card.style.borderRadius = '10px';
        card.style.padding = '20px';
        card.style.margin = '15px';
        card.style.color = '#EEEBDD';

        let cardContent = `
            <img src="${ride.image}" alt="${ride.name}" 
                style="width: 100%; 
                height: 250px; 
                object-fit: cover; 
                border-radius: 10px; 
                margin-bottom: 15px;">
            <h3 style="margin: 10px 0;">${ride.name}</h3>
            <p style="margin-bottom: 15px;">${ride.description}</p>
            <div class="button-container" style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
        `;

        // Add appropriate buttons based on available information
        if (category === 'Taxi' && ride.name === 'Uber') {
            cardContent += `
                <button onclick="window.open('https://www.uber.com/lb/en/', '_blank')" 
                    style="background: #EEEBDD; color: #810000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                    🌐 Book Uber
                </button>`;
        } else if (category === 'Taxi' && ride.name === 'Taxif') {
            cardContent += `
                <button onclick="window.open('https://taxif.com/en', '_blank')" 
                    style="background: #EEEBDD; color: #810000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                    🌐 Book Taxif
                </button>`;
        } else {
            if (ride.phone) {
                cardContent += `
                    <button onclick="window.location.href='tel:${ride.phone}'" 
                        style="background: #EEEBDD; color: #810000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                        📞 Call
                    </button>`;
            }
            if (ride.url) {
                cardContent += `
                    <button onclick="window.open('${ride.url}', '_blank')" 
                        style="background: #EEEBDD; color: #810000; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                        🌐 Website
                    </button>`;
            }
            if (ride.whatsapp) {
                cardContent += `
                    <button onclick="window.open('${ride.whatsapp}', '_blank')" 
                        style="background: #25D366; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                        💬 WhatsApp
                    </button>`;
            }
        }

        cardContent += `</div>`;
        card.innerHTML = cardContent;
        cardWrapper.appendChild(card);
    });

    mainContainer.appendChild(cardWrapper);
}

document.getElementById('ride-btn').addEventListener('click', (e) => {
    e.preventDefault();
    displayRideCategories();
});

rideBtn.addEventListener('click', () => {
    clearMainContainer();
    const rides = ['Bus', 'Taxi', 'Bike'];
    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');

    rides.forEach(ride => {
        const card = createCard({ name: ride, image: '', description: '', phone: '' }, () => displayRideDetails(ride));
        cardWrapper.appendChild(card);
    });

    mainContainer.appendChild(cardWrapper);
});

homeBtn.addEventListener('click', () => {
    clearMainContainer();
    displayMainCards();
});

recentlyViewedBtn.addEventListener('click', () => {
    clearMainContainer();
    showRecentlyViewed();
});

bookBtn.addEventListener('click', () => {
    if (!window.isLoggedIn) { 
        alert('Please log in or sign up to book.');
        return;
    }

    let bookingModal = document.querySelector('.booking-modal');
    let bookingOverlay = document.querySelector('.booking-overlay');
    
    if (!bookingModal) {
        bookingModal = document.createElement('div');
        bookingModal.className = 'booking-modal';
        document.body.appendChild(bookingModal);
    }
    
    if (!bookingOverlay) {
        bookingOverlay = document.createElement('div');
        bookingOverlay.className = 'booking-overlay';
        document.body.appendChild(bookingOverlay);
    }

    bookingModal.style.display = 'block';
    bookingOverlay.style.display = 'block';
    document.body.classList.add('modal-open');

    if (!bookingModal.querySelector('script')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://form.jotform.com/jsform/243342530088453';
        bookingModal.appendChild(script);
    }

    bookingOverlay.addEventListener('click', () => {
        bookingModal.style.display = 'none';
        bookingOverlay.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
});

function handleVisibilityChange() {
    if (!pauseWhenNotActive) return;

    isTabActive = !document.hidden;
    if (isTabActive) {
        generateSnowflakes();
    } else {
        clearInterval(snowflakeInterval);
    }
}

function loadLoginSignup(isSignup = false) {
    fetch('html/login-signup.html')
        .then(response => response.text())
        .then(data => {
            loginSignupContainer.innerHTML = data; 
            loginSignupContainer.style.display = 'block'; 

            const container = loginSignupContainer.querySelector('.container');
            const signUpButton = loginSignupContainer.querySelector('#signUp'); // Ghost button for Sign Up
            const logInButton = loginSignupContainer.querySelector('#logIn'); // Ghost button for Log In
            const normalSignUpBtn = loginSignupContainer.querySelector('.sign-up-container button:not(.ghost)'); // Normal Sign Up button
            const normalLogInBtn = loginSignupContainer.querySelector('.log-in-container button:not(.ghost)'); // Normal Log In button

            if (signUpButton && container) {
                signUpButton.addEventListener('click', () => {
                    container.classList.add("right-panel-active");
                });
            }

            if (logInButton && container) {
                logInButton.addEventListener('click', () => {
                    container.classList.remove("right-panel-active");
                });
            }

            if (normalSignUpBtn) {
                normalSignUpBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const emailInput = document.querySelector('.sign-up-container input[type="email"]');
                    if (emailInput && emailInput.value) {
                        handleUserLogin(emailInput.value);
                        loginSignupContainer.style.display = 'none';
                        isLoggedIn = true;
                        alert("Now you can book a service with us.");
                        bookBtn.click();
                    }
                });
            }

            if (normalLogInBtn) {
                normalLogInBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    const emailInput = document.querySelector('.log-in-container input[type="email"]');
                    if (emailInput && emailInput.value) {
                        handleUserLogin(emailInput.value);
                        loginSignupContainer.style.display = 'none';
                        isLoggedIn = true;
                        alert("Now you can book a service with us.");
                        bookBtn.click();
                    }
                });
            }

            if (container) {
                if (isSignup) {
                    container.classList.add("right-panel-active"); 
                } else {
                    container.classList.remove("right-panel-active"); 
                }
            }
        })
        .catch(error => console.error('Error loading the login/signup form:', error));
}

loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadLoginSignup(false);
});

signupBtn.addEventListener("click", (event) => {
    event.preventDefault();
    loadLoginSignup(true);
});


generateSnowflakes();

window.addEventListener("resize", () => {
    clearInterval(snowflakeInterval);
    setTimeout(generateSnowflakes, 1000);
});

document.addEventListener("visibilitychange", handleVisibilityChange);

displayMainCards();  
});

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const cachedElements = {
    mainContainer: document.querySelector('main'),
    cardWrapper: document.querySelector('.card-wrapper'),
};

function removeCard(card) {
    card.removeEventListener('click', cardClickHandler);
    card.remove();
}

function cleanupAnimations() {
    if (snowflakeInterval) {
        clearInterval(snowflakeInterval);
        snowflakeInterval = null;
    }
}

const cache = new Map();

async function fetchData(url) {
    if (cache.has(url)) {
        return cache.get(url);
    }
    
    const response = await fetch(url);
    const data = await response.json();
    cache.set(url, data);
    return data;
}

function renderCards(cards) {
    const fragment = document.createDocumentFragment();
    cards.forEach(card => {
        const cardElement = createCard(card);
        fragment.appendChild(cardElement);
    });
    cachedElements.cardWrapper.appendChild(fragment);
}

function smoothScroll(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    function animateScroll() {
        currentTime += increment;
        const val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    }
    animateScroll();
}

window.addEventListener('error', function(e) {
    console.error('Global error:', e);
});

function loadFeature(featureName) {
    try {
    } catch (error) {
        console.error(`Feature ${featureName} failed to load:`, error);
    }
}

const images = document.querySelectorAll('img');
images.forEach(img => {
    img.loading = "lazy";  
    if (!img.width || !img.height) {
        img.setAttribute('width', '300');  
        img.setAttribute('height', '200');  
    }
});

function sanitizeId(text) {
    return text
        .replace(/[^a-zA-Z0-9]/g, '-') 
        .replace(/-+/g, '-')           
        .replace(/^-|-$/g, '')         
        .toLowerCase();                 
}

function createCard(data, onClick, isMainCard = false) {
    const card = document.createElement('div');
    card.classList.add('card', 'flip-card');
    
    const imageHTML = !isMainCard && data.image ? `<img src="${data.image}" alt="${data.name}" />` : '';
    const sanitizedId = sanitizeId(data.name);  

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                ${imageHTML}
                <h3>${data.name}</h3>
                <p>${data.description}</p>
                ${data.phone ? `<p><span style="margin-right: 100px; font-weight: bold;">📞 ${data.phone}</span><span style="margin-left: 100px; font-weight: bold;"> <button class="marker-icon"onclick="showMap(event, ${data.lat}, ${data.lng})">📍</button></span></p>` : ''}
            </div>
            <div class="card-back">
                <h3>${data.name} - Map</h3>
                <div id="map-${sanitizedId}" class="map-container" style="width: 100%; height: 100%;"></div>
                <button class="close-map" onclick="closeMap(event)">Close Map</button>
            </div>
        </div>
    `;

    // Add click event listener
    card.addEventListener('click', (event) => {
        if (onClick) {
            onClick(event);
        }
        // Only add to recently viewed if it's a detailed card (has image, description, and phone)
        if (!isMainCard && data.image && data.description && data.phone) {
            addRecentlyViewed(data);
        }
    });

    return card;
}

function animateSanta() {

    setTimeout(() => {
        santa.style.display = 'none';
        
        const santaCompleteEvent = new CustomEvent('santaAnimationComplete');
        document.dispatchEvent(santaCompleteEvent);
        
    }, santaDuration); 
}

function onLostPresentDisappear() {
    
    const lostPresentEvent = new CustomEvent('lostPresentDisappeared');
    document.dispatchEvent(lostPresentEvent);
}

let recentlyViewed = [];

function addToRecentlyViewed(item) {
    const exists = recentlyViewed.some(viewed => viewed.name === item.name);
    if (!exists) {
        recentlyViewed.unshift(item);
        if (recentlyViewed.length > 6) {
            recentlyViewed.pop();
        }
        localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
    }
}

function showRecentlyViewed() {
    clearMainContainer();
    
    if (recentlyViewed.length === 0) {
        const message = document.createElement('div');
        message.style.textAlign = 'center';
        message.style.marginTop = '200px';
        message.style.color = '#EEEBDD';
        message.innerHTML = '<h2>No Recently Viewed Items</h2><p>Start exploring to see your history!</p>';
        mainContainer.appendChild(message);
        return;
    }

    const cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    cardWrapper.style.marginTop = '200px';
    
    recentlyViewed.forEach(item => {
        const card = createCard(item);
        card.style.width = '400px';
        card.style.backgroundColor = '#810000';
        card.style.borderRadius = '10px';
        card.style.padding = '20px';
        card.style.margin = '15px';
        card.style.color = '#EEEBDD';
        
        const cardImage = card.querySelector('img');
        if (cardImage) {
            cardImage.style.width = '100%';
            cardImage.style.height = 'auto';
            cardImage.style.maxHeight = '250px';
            cardImage.style.objectFit = 'cover';
        }
        
        cardWrapper.appendChild(card);
    });

    mainContainer.appendChild(cardWrapper);
}

document.addEventListener('DOMContentLoaded', () => {
    const recentlyViewedBtn = document.getElementById('recently-viewed-btn');
    if (recentlyViewedBtn) {
        recentlyViewedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showRecentlyViewed();
        });
    }
});

window.addEventListener('load', () => {
    localStorage.removeItem('recentlyViewed');
    recentlyViewed = [];
});

document.addEventListener('click', (e) => {
    const stars = 3;
    for (let i = 0; i < stars; i++) {
        const star = document.createElement('div');
        star.className = 'click-effect';
        star.innerHTML = '⭐';
        star.style.left = e.clientX + 'px';
        star.style.top = e.clientY + 'px';
        star.style.position = 'fixed';
        star.style.animation = `starBurst 0.5s ease-out forwards`;
        star.style.transform = `rotate(${Math.random() * 360}deg) translate(${Math.random() * 50}px, ${Math.random() * 50}px)`;
        document.body.appendChild(star);
                
        const angle = (i * 120) + Math.random() * 30; 
        const distance = 30 + Math.random() * 50; 
        
        star.style.transform = `rotate(${angle}deg) translate(${distance}px)`;
        
        setTimeout(() => star.remove(), 500);
    }
});
function handleUserLogin(email) {
    const userName = email.split('@')[0];
    const navbarRight = document.querySelector('.navbar-right');
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    
    const userNameDisplay = document.createElement('span');
    userNameDisplay.id = 'user-name';
    userNameDisplay.textContent = userName;
    
    if (loginBtn) loginBtn.remove();
    if (signupBtn) signupBtn.remove();
    
    navbarRight.insertBefore(userNameDisplay, navbarRight.firstChild);
}

document.addEventListener('DOMContentLoaded', () => {
    const normalLogInBtn = document.querySelector('.log-in-container button');
    const normalSignUpBtn = document.querySelector('.sign-up-container button');

    if (normalLogInBtn) {
        normalLogInBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('login-email');
            if (emailInput && emailInput.value) {
                handleUserLogin(emailInput.value);
                document.querySelector('#login-signup-container').style.display = 'none';
                window.isLoggedIn = true;
                alert("Now you can book a service with us.");
                document.getElementById('book-btn').click();
            }
        });
    }

    if (normalSignUpBtn) {
        normalSignUpBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('signup-email');
            if (emailInput && emailInput.value) {
                handleUserLogin(emailInput.value);
                document.querySelector('#login-signup-container').style.display = 'none';
                window.isLoggedIn = true;
                alert("Now you can book a service with us.");
                document.getElementById('book-btn').click();
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const portfolioText = document.getElementById("portfolio-text");
    let intervalId;

    function showPortfolioText() {
        portfolioText.style.display = "block";
    }

    function hidePortfolioText() {
        portfolioText.style.display = "none";
    }

    function togglePortfolioText() {
        if (portfolioText.style.display === "none") {
            showPortfolioText();
        } else {
            hidePortfolioText();
        }
    }

    // Show the text after 1 minute
    setTimeout(showPortfolioText, 60000);

    // Set an interval to toggle the text every 20 seconds
    intervalId = setInterval(togglePortfolioText, 20000);

    // Stop the interval if the user clicks the text
    portfolioText.addEventListener("click", function() {
        clearInterval(intervalId);
        hidePortfolioText();
    });
});
