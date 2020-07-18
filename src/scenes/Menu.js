import React from "react";
import "./Menu.css";
import { Header, MenuItem } from "../component";

const Menu = () => {
    return (

        <div className='Menu'>
            <Header className="" />
            <div className="main-menu">
                <div className="pic-right">
                    <div className="pic-right-content">
                        <h1>Appetizers</h1>
                        <div className="pic-right-items">
                            {
                                apps.map(x =>
                                    <MenuItem
                                        name={x.name}
                                        vegetarian={x.vegetarian}
                                        glutenFree={x.glutenFree}
                                        price={x.price}
                                        spice={x.spice}
                                        description={x.description}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="pic-right-image">
                        <img src={require('./bruschetta.jpg')}></img>
                    </div>

                </div>
                <div className="pic-right">
                    <div className="pic-left-image">
                        <img src={require('./taco.jpg')}></img>
                    </div>
                    <div className="pic-right-content">
                        <h1>Main Course</h1>
                        <div className="pic-right-items">
                            {
                                mainCourse.map(x =>
                                    <MenuItem
                                        name={x.name}
                                        vegetarian={x.vegetarian}
                                        glutenFree={x.glutenFree}
                                        price={x.price}
                                        spice={x.spice}
                                        description={x.description}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>


                <div className="pic-right">
                    <div className="pic-right-content">
                        <h1>Dessert</h1>
                        <div className="pic-right-items">
                            {
                                desserts.map(x =>
                                    <MenuItem
                                        name={x.name}
                                        vegetarian={x.vegetarian}
                                        glutenFree={x.glutenFree}
                                        price={x.price}
                                        spice={x.spice}
                                        description={x.description}
                                    />
                                )
                            }
                        </div>
                    </div>
                    <div className="pic-right-image">
                        <img src={require('./cheesecake.jpg')}></img>
                    </div>
                </div>


                <div className="pic-right">
                    <div className="pic-left-image">
                        <img src={require('./margarita.jpg')}></img>
                    </div>
                    <div className="pic-right-content">
                        <h1>Drinks</h1>
                        <div className="pic-right-items">
                            {
                                drinks.map(x =>
                                    <MenuItem
                                        name={x.name}
                                        vegetarian={x.vegetarian}
                                        glutenFree={x.glutenFree}
                                        price={x.price}
                                        spice={x.spice}
                                        description={x.description}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const apps = [{

    name: "Nachos",
    vegetarian: true,
    glutenFree: true,
    price: 11.99,
    spice: 1,
    description: "Tortilla chips layered with beef and your choice of melted jalapeño cheese sauce or melted cheddar cheese."
},
{
    name: "Tomato Soup",
    vegetarian: true,
    glutenFree: true,
    price: 5.99,
    spice: 2,
    description: "Creamy, grill-roasted tomato soup."

},
{
    name: "Bruschetta",
    vegetarian: true,
    glutenFree: false,
    price: 8.99,
    spice: 0,
    description: "Grilled bread rubbed with garlic and topped with fresh tomatoes, olive oil and salt."
},
{
    name: "Chicken Wings",
    vegetarian: false,
    glutenFree: true,
    price: 12.99,
    spice: 3,
    description: "Breaded chicken wings, fried then tossed in our house-made sauce, served with celery and blue cheese."
},
{
    name: "Chicken Caesar Salad",
    vegetarian: false,
    glutenFree: true,
    price: 9.99,
    spice: 0,
    description: "Romaine lettuce and homemade croutons tossed with traditional Caesar dressing. Topped with grilled chicken and parmesan cheese."
}
];

const mainCourse = [{
    name: "Veggie burger",
    vegetarian: true,
    glutenFree: false,
    price: 14.99,
    spice: 0,
    description: "Black bean and brown rice patty, on a brioche bun with lettuce, tomato, red onion, pickle and avocado citrus ranch sauce."
},
{
    name: "Vegetable Lasagna",
    vegetarian: true,
    glutenFree: false,
    price: 14.99,
    spice: 2,
    description: "Lasagna noodles layered with fresh basil pesto, roasted vegetables, and mozzarella cheeses, served with marinara sauce"
},
{
    name: "Grilled Steak Tacos",
    vegetarian: false,
    glutenFree: true,
    price: 12.99,
    spice: 1,
    description: "Grilled steak served with corn torilla, red onion, avocado, cilantro, and queso fresco."
},
{
    name: "Jalapeño Mac n’ Cheese",
    vegetarian: true,
    glutenFree: true,
    price: 10.99,
    spice: 3,
    description: "4 cheese blend mixed with spicy jalapeños and topped with bread crumbs."
},
{
    name: "Chicken Parmesan",
    vegetarian: false,
    glutenFree: true,
    price: 15.99,
    spice: 0,
    description: "A fried buttermilk-breaded chicken breast, topped with our marinara sauce and pizza mozzarella."
}
];

const desserts = [
    {
        name: "Strawberry Cheesecake",
        vegetarian: true,
        glutenFree: true,
        price: 6.99,
        spice: 0,
        description: "Rich and creamy cheesecake with a graham cracker crust and a luscious strawberry topping."
    },
    {
        name: "Chocolate Fudge Cake",
        vegetarian: true,
        glutenFree: false,
        price: 6.99,
        spice: 0,
        description: "Three layers of chocolate fudge and chocolate cake topped with chocolate icing and chocolate ganache."
    },
    {
        name: "Chocolate Brownie",
        vegetarian: true,
        glutenFree: false,
        price: 4.99,
        spice: 1,
        description: "Dense, chocolatey brownie studded with dark chocolate chips"
    }

];

const drinks = [
    {
        name: "Margarita",
        vegetarian: false,
        glutenFree: false,
        price: 6.99,
        spice: 0,
        description: "Classic Margarita with Gold Tequila, Triple Sec and Fresh Sour."
        },
        {
        name: "Lemonade",
        vegetarian: false,
        glutenFree: false,
        price: 3.99,
        spice: 0,
        description: "Classic lemonade made with fresh lemon juice, cane sugar, and water"
        },
        {
        name: "Iced Tea",
        vegetarian: false,
        glutenFree: false,
        price: 3.99,
        spice: 0,
        description: "Freshly-brewed each day from a blend of tea leaves."
        }
];

export default Menu;