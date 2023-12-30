class BMW {
  make: string;
  model: string;
  year: string;

  constructor(make: string, model: string, year: string) {
    (this.make = make), (this.model = model), (this.year = year);
  }

  commonEngineFunc() {
    console.log("common func");
  }

  start() {
    console.log("Start");
  }

  stop() {
    console.log("Stop");
  }
}

class ThreeSeries extends BMW {
  cruiseControlEnable: boolean;

  constructor(
    make: string,
    model: string,
    year: string,
    cruiseControlEnable: boolean
  ) {
    super(make, model, year);
    this.cruiseControlEnable = cruiseControlEnable;
  }

  cruiseControl(){
    this.cruiseControlEnable = true;
    console.log("cruising");
  }

  start() {
    console.log("botton Start");
  }

  stop() {
    console.log("botton Stop");
  }
}

class FiveSeries extends BMW {
  parkingAssistEnable: boolean;

  constructor(
    make: string,
    model: string,
    year: string,
    parkingAssistEnable: boolean
  ) {
    super(make, model, year);
    this.parkingAssistEnable = parkingAssistEnable;
  }

  parkingAssist(){
    this.parkingAssistEnable = true;
    console.log("parking");
  }

  start() {
    console.log("remote Start");
  }

  stop() {
    console.log("remote Stop");
  }
}

var threeSeries = new ThreeSeries("BMW", "328i", "2018", false);
console.log(threeSeries.cruiseControlEnable);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);
threeSeries.commonEngineFunc();
threeSeries.start()
threeSeries.stop()
threeSeries.cruiseControl()

var fiveSeries = new FiveSeries("BMW", "535", "2018", false);
console.log(fiveSeries.parkingAssistEnable);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);
fiveSeries.commonEngineFunc();
fiveSeries.start()
fiveSeries.stop()
fiveSeries.parkingAssist()

