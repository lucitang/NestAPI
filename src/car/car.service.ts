import { HttpException, Injectable } from '@nestjs/common';
import { Car } from './car';


@Injectable()
export class CarService {
    Carslist: Car[] = [];

    getCar(){
        return this.Carslist;
    }
    postCar(arg: Car){
        this.Carslist.push(arg);
    }  
    getbyID(arg:number){
        let result = this. Carslist.find((elem) =>elem.id == arg);
        if(result){
            return result;
        }
        throw new HttpException("CAR NOT FOUND", 404);
    }
    deletebyID(arg: number){
        let index = this. Carslist.findIndex((elem) =>elem.id == arg);
        if(index === -1){
            throw new HttpException("CAR NOT FOUND", 404);
        }
        this.Carslist.splice(index, 1);
        return this.Carslist;
    }
    putbyID(arg: number, propName: string, propValue: string){
        let index = this. Carslist.findIndex((elem) =>elem.id == arg);
        if(index === -1){
            throw new HttpException("CAR NOT FOUND", 404);
        }
        this.Carslist[index][propName] = propValue;
        return this.Carslist;

    }
}
