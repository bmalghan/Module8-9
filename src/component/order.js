import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import { OrderItem } from "../component";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import "./order.css";

function Order() {
  const [open, setOpen] = React.useState(false);

  const [veg, setVeg] = React.useState(false);
  const [gf, setgf] = React.useState(false);

  const [page, setPage] = React.useState(1);

  const [first, setFirst] = React.useState("");

  const [firstE, setFirstE] = React.useState(false);

  const [creditNum, setCreditNum] = React.useState("");

  const [creditNumE, setCreditNumE] = React.useState(false);

  const [exp, setExp] = React.useState("");

  const [expE, setExpE] = React.useState(false);

  const [pn, setPn] = React.useState("");

  const [pnE, setPnE] = React.useState(false);

  const [cvv, setCvv] = React.useState(" ");

  const [cvvE, setCvvE] = React.useState(false);


  const handleNameChange = (event) => {
    const {value} = event.target;
    const fE = first.length > 0;
    setFirstE(!fE);
    setFirst(value);
  }

  const handleCreditChange = (event) => {
    const {value} = event.target;
    setCreditNum(value);
    var filter = /^\d{15}$/;
    const cE = filter.test(creditNum);
    setCreditNumE(!cE);
  }

  const handleCvvChange = (event) => {
    const {value} = event.target;
    setCvv(value);
    
    var filter2 = /^\d{2}$/;
    const ccE = filter2.test(cvv);
    setCvvE(!ccE);
  }

  const handlepnChange = (event) => {
    const {value} = event.target;
    setPn(value);
    
    var filter3 = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    const pn1E = filter3.test(pn);
    setPnE(!pn1E);
  }

  const handleExpChange = (event) => {
    const {value} = event.target;
    setExp(value);
    
  }
  const handleClickOpen = () => {
    setPage(1);
    setOpen(true);
    setVeg(false);
    setgf(false);
  };

  const handleClose = () => {
    const fE = first.length > 0;
    setFirstE(!fE);

    var filter = /^\d{16}$/;
    const cE = filter.test(creditNum);
    setCreditNumE(!cE);

    var filter2 = /^\d{2}$/;
    const ccE = filter2.test(cvv);

    var filter3 = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    const pn1E = filter3.test(pn);
    setPnE(!pn1E);

    setCvvE(!ccE);

    console.log(firstE);
    console.log(creditNumE);

    console.log(cvvE);
    console.log(expE);
    if (!(firstE || creditNumE || cvvE || expE || pnE)) {
      setOpen(false);
      setPage(1);
    }

  };

  const handleCloseI = () => {
      setOpen(false);
      setPage(1);
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

  const handleVeg = () => {
    setVeg(!veg);
  };

  const handleGf = () => {
    setgf(!gf);
  };

  const subt = ["Appetizers", "Main Course", "Drinks and Dessert"]


  return (
    <div>
      <Button onClick={handleOrderOpen} variant="contained" color="secondary" onClick={handleClickOpen}>
        Order
      </Button>
      <Dialog open={open} fullWidth={true} maxWidth={'md'} style={{ padding: "5%" }} className="dialog-main">
        <DialogTitle style={{ fontSize: "32px" }} id="form-dialog-title">
          {(page < 4) ? <img src="https://img.icons8.com/small/32/000000/purchase-order.png"/> : <img src="https://img.icons8.com/ios-filled/32/000000/bank-card-back-side.png"/>} 
        
        
        {(page < 4) ? "Order" : "Payment"}
          <IconButton style={{ float: "right" }} color="inherit" onClick={handleCloseI} aria-label="close">
            <CloseIcon />
          </IconButton>
          
          </DialogTitle>

        {
          (page < 4) ?
            (
              <div className="row-one-modal">
                <div className="row-one-modal-c">
                  <h6 style={{ fontSize: "18px", margin: "0" }}>Select the {subt[page - 1]} you would like to order.</h6>
                </div>
                <div className="row-one-modal-c">
                  Filters: &nbsp;&nbsp; &nbsp; Vegetarian:
                  <Checkbox
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleVeg}
                  />
                    &nbsp;&nbsp;&nbsp; Gluten Free:
                    <Checkbox
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    onChange={handleGf}
                  />
                </div>

              </div>
            ) : <></>}
        <DialogContent style={{ minWidth: "600px" }}>
          {

            (page === 1) ?
              <DialogContentText>
                {
                  apps.map(x => {

                    if ((!veg || x.vegetarian === veg) && (!gf || x.glutenFree === gf)) {
                      return <OrderItem
                        key={x.name.replace(/\s/g, '')}
                        name={x.name}
                        vegetarian={x.vegetarian}
                        price={x.price}
                        description={x.description}
                      />
                    }
                  }
                  )
                }
              </DialogContentText> :
              (page === 2) ?
                <DialogContentText>
                  {
                    mainCourse.map(x => {

                      if ((!veg || x.vegetarian === veg) && (!gf || x.glutenFree === gf)) {
                        return <OrderItem
                          key={x.name.replace(/\s/g, '')}
                          name={x.name}
                          vegetarian={x.vegetarian}
                          glutenFree={x.glutenFree}
                          price={x.price}
                          spice={x.spice}
                          description={x.description}
                        />
                      }
                    }
                    )
                  }
                </DialogContentText> :
                (page === 3) ?
                  <DialogContentText>
                    {
                      desserts.map(x => {

                        if ((!veg || x.vegetarian === veg) && (!gf || x.glutenFree === gf)) {
                          return <OrderItem
                            key={x.name.replace(/\s/g, '')}
                            name={x.name}
                            vegetarian={x.vegetarian}
                            glutenFree={x.glutenFree}
                            price={x.price}
                            spice={x.spice}
                            description={x.description}
                          />
                        }
                      })
                    }

                    {
                      drinks.map(x =>
                        <OrderItem
                          key={x.name.replace(/\s/g, '')}
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
                  <div>
                    <div class="container">
                      <div class="inline">
                        <InputLabel>Name</InputLabel>
                        <TextField error={firstE} id="cc" placeholder="John Doe" defaultValue={first} type="quantity" onChange={handleNameChange} helperText="Enter your name"
                          maxlength="16" />
                      </ div>
                      <div class="inline">
                        <InputLabel>Phone Number</InputLabel>
                        <TextField error={pnE} id="cc" placeholder="123-123-1234" defaultValue={pn} type="quantity" onChange={handlepnChange} helperText="Enter your phone number"/>
                      </ div>
                      <div class="inline">
                        <InputLabel>Credit Card Number:</InputLabel>
                        <TextField error={creditNumE} id="cc" placeholder="xxxx xxxx xxxx xxxx" defaultValue={creditNum} onChange={handleCreditChange} type="quantity" helperText="Enter a 16 digit number"
                          />
                      </ div>
                      <div class="inline">
                        <InputLabel>CVV Number</InputLabel>
                        <TextField error={cvvE} helperText="Enter the 3-digit CVV Number" id="cvc" defaultValue={cvv} placeholder="123" type="quantity" onChange={handleCvvChange} />
                      </div>

                      <div class="inline">
                        <InputLabel>Expiry Date</InputLabel>

                        <Input helperText="Select a valid Date" id="exp" placeholder="MMYY"defaultValue={exp} type="month" maxlength="4" min="2020-06" onChange={handleExpChange} />
                      </div>
                    </div>

                  </ div>
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
    </div >
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
  name: "Veggie Burger",
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
  name: "Jalapeno Mac n Cheese",
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