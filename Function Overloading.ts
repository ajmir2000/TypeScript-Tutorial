function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}
console.log(combine(5, 3)); // Output: 8
console.log(combine("Hello", " World")); // Output: "Hello World"
