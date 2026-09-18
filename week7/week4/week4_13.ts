import { GST_RATE, CONVENIENCE_FEE } from "./week4_11";
import { Passenger } from "./week4_12";
export class Ticket{
    constructor(public passenger:Passenger,public baseFare:number,public TrainNumber:number){
}
public calculateTotalFare():number{
    const taxAmount=this.baseFare*GST_RATE;
    return this.baseFare+taxAmount+CONVENIENCE_FEE;
}
public printTicket():void{
    console.log(`-----E-Ticket Confrimed---`);
    console.log(`Passeneger: ${this.passenger.name}(${this.passenger.age} years)`);
    console.log(`Train Number: ${this.TrainNumber}`);
    console.log(`Total Fare: ${this.calculateTotalFare()}`);
    console.log(`----------------------`);
}
}