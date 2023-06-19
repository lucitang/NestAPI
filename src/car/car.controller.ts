import { Controller, Param, Get, Body, Post, Delete, Patch } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto, UpdateCarDto } from './car.dto';

@Controller('car')
export class CarController {
    constructor(private carservice: CarService){
        
    };

    @Get()
    getCar(){
        return this.carservice.getCar();
    }
    @Post()
    postCar(@Body() car: CarDto){
        return this.carservice.postCar(car);
    }

    @Get(':arg')
    getbyID(@Param('arg') arg: string){
        return this.carservice.getbyID(+arg);
    }

    @Delete(':arg')
    deletebyID(@Param('arg') arg: string){
        return this.carservice.deletebyID(+arg);
    }

    @Patch(':id')
    putbyID(@Param('id') id: string, @Body() updatevalue: UpdateCarDto ){
        return this.carservice.patchbyID(+id, updatevalue);
    }

}
