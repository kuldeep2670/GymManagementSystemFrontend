import { GymAdmin } from "./GymAdmin";
import { Packages } from "./Packages";
import { Trainer } from "./Trainer";

export class User{
    id: any;
    name: any;
    email: any;
    phoneNo: any;
    packageExpiryDate!: Date;
    trainer: Trainer = new Trainer();
    packages: Packages = new Packages();
    gymAdmin: GymAdmin = new GymAdmin();

    
}