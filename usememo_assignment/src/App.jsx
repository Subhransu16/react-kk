import React from "react";
import { useMemo, useState } from "react";

// Task 1: The expensive loop is intentionally kept outside the component.
function calculateDouble(number) {
  console.log("Task 1: calculateDouble() is running");
  let result = Number(number) * 2;

  // Simulate an expensive calculation.
  for (let i = 0; i < 1000000; i++) {
    result += 0;
  }

  return result;
}

// Task 2: Filtering logic is kept outside the component.
function filterProducts(products, searchText) {
  console.log("Task 2: filterProducts() is running");
  const search = searchText.toLowerCase();

  return products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );
}

// Task 3: Total calculation is kept outside the component.
function calculateTotal(cartProducts) {
  console.log("Task 3: calculateTotal() is running");
  return cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
}

const products = [
  { id: 1, name: "Laptop", price: 55000 },
  { id: 2, name: "Phone", price: 25000 },
  { id: 3, name: "Headphones", price: 2500 },
  { id: 4, name: "Keyboard", price: 1800 },
  { id: 5, name: "Monitor", price: 12000 },
];

const initialCart = [
  { id: 1, name: "Notebook", price: 100, quantity: 2 },
  { id: 2, name: "Pen", price: 20, quantity: 3 },
  { id: 3, name: "Bag", price: 800, quantity: 1 },
];

function Task1() {
  const [number, setNumber] = useState("0");
  const [dark, setDark] = useState(false);

  const doubledNumber = useMemo(() => calculateDouble(number), [number]);

  return (
    <section>
      <h2>Task 1 – Number Multiplication</h2>
      <p>Enter a number to calculate its double.</p>
      <label>
        Number:{" "}
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
      </label>
      <p>Result: {doubledNumber}</p>
      <button onClick={() => setDark((current) => !current)}>
        Switch to {dark ? "Light" : "Dark"} theme
      </button>
      <p>Theme: {dark ? "Dark" : "Light"}</p>
      <p>Open the browser console to see when the calculation runs.</p>
    </section>
  );
}

function Task2() {
  const [searchText, setSearchText] = useState("");
  const [counter, setCounter] = useState(0);

  const filteredProducts = useMemo(
    () => filterProducts(products, searchText),
    [searchText]
  );

  return (
    <section>
      <h2>Task 2 – Product Search</h2>
      <label>
        Search by name:{" "}
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="e.g. phone"
        />
      </label>

      <h3>Products</h3>
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              {product.name} — ₹{product.price.toLocaleString("en-IN")}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}

      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((current) => current + 1)}>
        Increment
      </button>
      <p>Open the browser console: incrementing the counter should not rerun filtering.</p>
    </section>
  );
}

function Task3() {
  const [cart, setCart] = useState(initialCart);
  const [dark, setDark] = useState(false);

  const totalAmount = useMemo(() => calculateTotal(cart), [cart]);

  function updateQuantity(productId, change) {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  }

  return (
    <section>
      <h2>Task 3 – Shopping Cart Total</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} — ₹{product.price} each — Quantity: {product.quantity}{" "}
            <button
              onClick={() => updateQuantity(product.id, -1)}
              disabled={product.quantity === 0}
              aria-label={`Decrease ${product.name} quantity`}
            >
              −
            </button>{" "}
            <button
              onClick={() => updateQuantity(product.id, 1)}
              aria-label={`Increase ${product.name} quantity`}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <p>Total amount: ₹{totalAmount.toLocaleString("en-IN")}</p>
      <button onClick={() => setDark((current) => !current)}>
        Switch to {dark ? "Light" : "Dark"} theme
      </button>
      <p>Theme: {dark ? "Dark" : "Light"}</p>
      <p>Open the browser console to see when the total calculation runs.</p>
    </section>
  );
}

export default function App() {
  const [selectedTask, setSelectedTask] = useState("1");

  return (
    <main>
      <h1>React useMemo Assignment</h1>
      <p>Choose a task to try it. No CSS is used; only basic HTML elements.</p>
      <nav aria-label="Assignment tasks">
        <button onClick={() => setSelectedTask("1")}>Task 1</button>{" "}
        <button onClick={() => setSelectedTask("2")}>Task 2</button>{" "}
        <button onClick={() => setSelectedTask("3")}>Task 3</button>
      </nav>
      <hr />
      {selectedTask === "1" && <Task1 />}
      {selectedTask === "2" && <Task2 />}
      {selectedTask === "3" && <Task3 />}
    </main>
  );
}