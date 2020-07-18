import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { OrderItem } from "../component";
import "./order.css";

function Order() {
  const [open, setOpen] = React.useState(false);

  const [page, setPage] = React.useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleBack = () => {
    setPage(page - 1);
  };

  const handleOrderOpen = () => {
    console.log(page);
    setPage(1);
  };



  return (
    <div>
      <Button onClick={handleOrderOpen} variant="contained" color="secondary" onClick={handleClickOpen}>
        Order
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth={'md'} style={{ padding: "5%" }} className="dialog-main">
        <DialogTitle id="form-dialog-title">{(page < 4) ? "Order" : "Payment"}</DialogTitle>
        <DialogContent style={{ minWidth: "600px" }}>

          {

            (page === 1) ?
              <DialogContentText>
                {
                  apps.map(x =>
                    <OrderItem
                      name={x.name}
                      vegetarian={x.vegetarian}
                      glutenFree={x.glutenFree}
                      price={x.price}
                      spice={x.spice}
                      description={x.description}
                    />
                  )
                }
              </DialogContentText> :
              (page === 2) ?
                <DialogContentText>
                  {
                    mainCourse.map(x =>
                      <OrderItem
                        name={x.name}
                        vegetarian={x.vegetarian}
                        glutenFree={x.glutenFree}
                        price={x.price}
                        spice={x.spice}
                        description={x.description}
                      />
                    )
                  }
                </DialogContentText> :
                (page === 3) ?
                  <DialogContentText>
                    {
                      desserts.map(x =>
                        <OrderItem
                          name={x.name}
                          vegetarian={x.vegetarian}
                          glutenFree={x.glutenFree}
                          price={x.price}
                          spice={x.spice}
                          description={x.description}
                        />
                      )}
                    {
                      drinks.map(x =>
                        <OrderItem
                          name={x.name}
                          vegetarian={x.vegetarian}
                          glutenFree={x.glutenFree}
                          price={x.price}
                          spice={x.spice}
                          description={x.description}
                        />
                      )
                    }
            </DialogContentText> :
                  <>Payment</>
          }
        </DialogContent>
        <DialogActions>
          {
            (page !== 1) ?
              <Button onClick={handleBack} variant="contained" style={{ backgroundColor: "grey" }} color="primary">
                {"<<"} Back
            </Button> :
              <></>
          }
          {
            (page < 3) ?
              <Button onClick={handleNext} variant="contained" style={{ backgroundColor: "green" }} color="primary">
                Next {">>"}
              </Button>
              : <></>
          }
          {
            (page === 3) ?
              <Button onClick={handleNext} variant="contained" style={{ backgroundColor: "green" }} color="primary">
                Payment
            </Button>
              : <></>
          }
          {
            (page === 4) ?
              <Button onClick={handleClose} variant="contained" style={{ backgroundColor: "green" }} color="primary">
                Submit
            </Button>
              : <></>
          }
        </DialogActions>
      </Dialog>
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

export default Order;