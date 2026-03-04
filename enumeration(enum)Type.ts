enum Dirction {
  up, // 0
  down, // 1
  left, // 2
  right, // 3
}

const moveDirection: Dirction = Dirction.up;
console.log(moveDirection); // Output: 0

enum Status {
  success = "SUCCESS",
  error = "ERROR",
  pending = "PENDING",
}
const currentStatus: Status = Status.success;
console.log(currentStatus); // Output: "SUCCESS"

enum price {
  base = 55,
  normal = 2200,
  high = 6666,
}

const currentPrice: price = price.normal;
console.log(currentPrice); // Output: 2200
