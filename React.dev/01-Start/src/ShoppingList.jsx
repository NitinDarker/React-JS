// Integrating lists with jsx
function ShoppingList() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];

  // Using map function to create list of these js objects
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "green",
        listStyle: "none",
      }}
    >
      {product.title}
    </li>
  ));

  // Rendering List through jsx
  return (
    <>
      <h3>Shopping List</h3>
      <ul>{listItems}</ul>
    </>
  );
}

export default ShoppingList;