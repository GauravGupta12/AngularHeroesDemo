export  interface Appconfig1{
    [index:number]: string;
}
export  interface Appconfig2{
    [index:string]: number;
}

export class Myclass{
     obj1: Appconfig1 = ["s1","s2","s3"];
     obj2: Appconfig2;
    constructor(private config: Appconfig1){
        this.obj1[2] = "sdbshjd";
        this.obj2
    }
}