import animal from "./animal.js"
class dog extends animal{
    constructor(name,img,numberOfLegs,age){
        super(name,img,numberOfLegs);
        this.age=age;
    }
}
export default dog;