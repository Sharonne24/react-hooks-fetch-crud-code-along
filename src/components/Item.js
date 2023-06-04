import React from "react";


  function Item({ item, onUpdateItem, onDeleteItem  }) {
    // Add function to handle button click
    function handleAddToCartClick() {
      // function handleDeleteClick() {
      //   console.log(item);
      // }

      // function handleDeleteItem(deletedItem) {
      //   const updatedItems = item.filter((item) => item.id !== deletedItem.id);
      //   setItems(updatedItems);
      // }
      // add fetch request
      fetch(`http://localhost:4000/items/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isInCart: !item.isInCart,
        }),
      })
        .then((r) => r.json())
        .then((updatedItem) => onUpdateItem(updatedItem));
    }
  
    // Deconstruct the onDeleteItem prop

  function handleDeleteClick() {
    // Call onDeleteItem, passing the deleted item
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteItem(item));
  }

    return (
      <li className={item.isInCart ? "in-cart" : ""}>
        <span>{item.name}</span>
        <span className="category">{item.category}</span>
        {/* add the onClick listener */}
        <button
          className={item.isInCart ? "remove" : "add"}
          onClick={handleAddToCartClick}
        >
          {item.isInCart ? "Remove From" : "Add to"} Cart
        </button>
        <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
      </li>
    );
  }

export default Item;
