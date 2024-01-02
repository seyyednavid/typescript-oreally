let cell:string = "123456789"
let re:any = /[0-9]{10}/
if (cell.match(re)) {
    console.log("cell is a valid number");
} else {
    console.log("cell is not valid number");
}