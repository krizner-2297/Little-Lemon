// Menu.js
import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2'

function Menu() {

    const handleOrder = (recipe) => {
        console.log(recipe.id,"id is clicked");

        Swal.fire({
            title: "Confirm Order",
            text: recipe.title,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Proceed Order!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Order Confirmed!",
                text: "Your order has been confirmed.",
                icon: "success"
              });
            }
          });
    }


    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>Weekly Specials</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={() => handleOrder(recipe)}> Order Now </button>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
}

export default Menu;
