// namespace in TypeScript is a way to organize code and avoid naming conflicts by grouping related code together. It allows you to create a logical grouping of classes, interfaces, functions, and variables under a single name. This can help improve code readability and maintainability.

namespace Products {
  interface Product {
    id: number;
    name: string;
    price: number;
  }

  const products: Product[] = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Mouse", price: 29.99 },
    { id: 3, name: "Keyboard", price: 79.99 },
  ];

  function listProducts(): String {
    return products
      .map((product) => `${product.name}: $${product.price}`)
      .join("\n");
  } //output: Laptop: $999.99
  //  Mouse: $29.99
  // Keyboard: $79.99
  console.log(listProducts());
}

namespace Orders {
  interface Order {
    orderId: number;
    productId: number;
    quantity: number;
  }

  const orders: Order[] = [
    { orderId: 1, productId: 1, quantity: 2 },
    { orderId: 2, productId: 2, quantity: 5 },
    { orderId: 3, productId: 3, quantity: 1 },
  ];

  export function listOrders(): String {
    return orders
      .map(
        (order) =>
          `Order ID: ${order.orderId}, Product ID: ${order.productId}, Quantity: ${order.quantity}`,
      )
      .join("\n");
  } //output: Order ID: 1, Product ID: 1, Quantity: 2
  //  Order ID: 2, Product ID: 2, Quantity: 5
  //  Order ID: 3, Product ID: 3, Quantity: 1

  console.log(listOrders());
}

console.log(Orders.listOrders());
