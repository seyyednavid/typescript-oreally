interface Iflight {
    flightNo:number;
    from:string;
    to:string;
    display():void;
}

class Flight implements Iflight {
    flightNo:number;
    from:string;
    to:string;

    constructor(flightNo:number, from:string, to:string) {
        this.flightNo = flightNo,
        this.from = from,
        this.to = to
    }

    display(): void {
        console.log(this.flightNo + " " + this.from + " " + this.to + " ");
    }

}

var flight1 = new Flight(120, "London" , "Milton Keynes")
flight1.display()