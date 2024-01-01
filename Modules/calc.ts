// export default function add(x: number, y: number): number {
//   return x + y;
// }
// export function sub(x: number, y: number): number {
//   return x - y;
// }
// export {add, sub}


class Calculator {
    add(x: number, y: number): number {
        return x + y;
      }
      
      sub(x: number, y: number): number {
        return x - y;
      }
}

export {Calculator}