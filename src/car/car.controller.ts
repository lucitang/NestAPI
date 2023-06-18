import { Controller, Param, Get, Body, Post, Delete, Put, Query } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private carservice: CarService){
        
    };

    @Get()
    getCar(){
        return  this.carservice.getCar();
    }
    @Post()
    postCar(@Body() car: CarDto){
         this.carservice.postCar(car);
    }

    @Get(':arg')
    getbyID(@Param('arg') arg: number){
        return this.carservice.getbyID(arg);
    }

    @Delete(':arg')
    deletebyID(@Param('arg') arg: number){
        return this.carservice.deletebyID(arg);
    }

    @Put(':arg')
    putbyID(@Param('arg') arg: number, @Query() query){
        const propName = query.proeprty_name;
        const propValue = query.property_value;
        return this.carservice.putbyID(arg, propName, propValue);
    }

}
