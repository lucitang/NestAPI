import {PartialType} from "@nestjs/mapped-types";
export class CarDto{
    id: number;
    brand: string;
    color: string;
    model: string;
}

export class UpdateCarDto extends PartialType(CarDto) {};