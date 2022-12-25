class Car{
    constructor(model,year){
        this.model=model;
        this.year=year;
    }
    brand="BMW"
    start(){
        console.log(`${this.model} from ${this.brand} starts`)
    }
}

const modela=new Car("A",2002)
modela.start()