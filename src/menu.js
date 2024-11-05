export function loadMenu() {
    const container = document.querySelector('#content');

    const menuCategories = createMenuItems();
    for(const category in menuCategories) {
        const menuItem = createMenuSection(category, menuCategories[category]);
        container.appendChild(menuItem);
    }
}

function createMenuSection(category, menuItems) {
    const div = document.createElement('div');
    div.classList.add('section');
    div.classList.add('menu');
    div.setAttribute('id', category.toLowerCase());
    
    const title = document.createElement('h2');
    div.appendChild(title);    
    title.textContent = category;

    const list = document.createElement('ul');
    
    for(let item of menuItems) {
        const listItem = document.createElement('li');
        listItem.classList.add("menu-item");
        
        const name = document.createElement('h3');
        name.textContent = item.itemName;
        name.classList.add("dish-name");

        const description = document.createElement('p');
        description.textContent = item.description;
        description.classList.add("dish-description");

        const price = document.createElement('p');
        price.textContent = item.price;
        price.classList.add("dish-price");

        listItem.appendChild(name);
        listItem.appendChild(description);
        listItem.appendChild(price);
    
        list.appendChild(listItem);
    }

    div.appendChild(list);

    return div;
}

class MenuItem {
    constructor(itemName, description, price) {
        this.itemName = itemName;
        this.description = description;
        this.price = price;
    }
}

function createMenuItems() {
    const appetizers = [
        new MenuItem("French onion soup", "Baked with parmesan and emmental", 16),
        new MenuItem("Jumbo Pawn Cocktail", "Horseradish cocktail sauce", 26),
        new MenuItem("Cold Smoked Atlantic Salmon", "Pickled red onion, capers, dill cream cheese on brioche", 32),
        new MenuItem("Tuna Tartare", "Hass avocado - taro chips - soy-honey emulsion", 27),
        new MenuItem("Fresh Oysters", "Market selection", 32),
        new MenuItem("Mixed Green Salad", "Red wine vinaigrette", 14),
        new MenuItem("Spinach Sald", "With mushroom, onion, bacon, hard cooked egg,vinaigrette dressing", 16),
        new MenuItem("Beefsteak Tomato & Red Onion", "Crumbled Stilton, buttermilk dressing", 17),
    ];

    const mains = [
        new MenuItem("Oven Roasted Chicken", "With basil lemon pan jus, wild rice pilaf, fresh seasonal vegetables", 34),
        new MenuItem("Baby Back Ribs", "BBQ glazed, french fries, fresh seasonal vegetables", 32),
        new MenuItem("Avocado & Shrimp Super Bowl", "Fresh greens, avocado, crispy chickpeas, candied pumpkin seeds, cauliflower rice, lime vinaigrett with shrimps", 28),
        new MenuItem("Chop Salad", "Bacon, boiled egg, crumbled blue cheese, avocado, basil, tomatoes, lemon vinaigrette", 26),
        new MenuItem("Chop Burger", "100% Canadian fresh ground chuck & brisket, crispy bacon, aged white cheddar, pickled red onions, toasted brioche bun, French fries", 25),
    ];

    const steaks = [
        new MenuItem("Top Sirloin", "7oz", 36),
        new MenuItem("Top Sirloin", "10oz", 41),
        new MenuItem("Filet Mignon", "7oz", 48),
        new MenuItem("Centre Cut New York", "11oz", 47),
        new MenuItem("Rib Eye", "13oz", 56),
        new MenuItem("Smoked Rib Eye", "13oz", 57),
        new MenuItem("Bone-in Rib Eye For Two", "32oz", 119),
    ];

    const plantBased = [
        new MenuItem("Grilled Tofu Steak", "Miso glazed, cauliflower rice, fresh seasonal vegetables", 26),
        new MenuItem("Beyond Meat Burger", "Aged cheddar, sautéed mushrooms, pickled red onions, toasted brioche bun, French fries", 24),
        new MenuItem("Avocado Bowl With Miso Tofu", "Fresh greens, cauliflower rice, crispy chickpeas, candied pumpkin seeds, avocado lime vinaigrette", 24),
        new MenuItem("Tomato Basil Linguine", "resh torn basil, capers, chilies, smoked tomato sauce", 23),
    ];

    const desserts = [
        new MenuItem("Pineapple Upside Down Cake", "Rum cake with caramelized pineapple, candied pecans, caramel sauce, vanilla gelato", 13),
        new MenuItem("Crème Brûlée", "Seasonal flavour, ask your server for today's creation", 11),
        new MenuItem("Flourless Chocolate Torte", "Amaretto mousse, chocolate ganache, vanilla anglaise", 12),
        new MenuItem("New York Cheesecake with Seasonal Fruit", "Slow-baked & infused with ice wine & ginger", 12),
        new MenuItem("Mini New York Cheesecake With Seasonal Fruit", "slow-baked & infused with ice wine & ginger", 6),
        new MenuItem("Dessert Trio", "Mini versions of our Crème Brûlée, Flourless Chocolate Torte & New York Cheesecake with Seasonal Fruit", 18),
    ];

    return {
        appetizers: appetizers,
        mains: mains,
        steaks: steaks,
        plantBased: plantBased,
        desserts: desserts,
    };
}

