import { HttpException, Injectable } from '@nestjs/common';
import { CarDto, UpdateCarDto } from './car.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CarService {
    constructor(private Carslist: PrismaService){};

    create(createCarDTO: CarDto){
        return 'this creates a new Car';

    }

    getCar(){
        return this.Carslist.car.findMany();
    }

    postCar(arg: CarDto){
        return this.Carslist.car.create({data: arg});
    }  

    getbyID(id:number){
        let result = this.Carslist.car.findMany({where: {id}});
        let mutex = true;
        return result.then(
            (value) => {
                if(value.length === 0 ){
                    throw new HttpException("CAR NOT FOUND", 404);
                }
                return result;
            }
        );
    }

    deletebyID(id: number){

        let result = this.Carslist.car.delete({where: {id}});
        return result;
    }
    
    patchbyID(id: number, updatevalue: UpdateCarDto){
        return this.Carslist.car.update({
            where: {id},
            data: updatevalue,
        });
    }
}
