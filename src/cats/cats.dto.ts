/**
 *@author LiFu
 *@date 2020/3/10 17:33
 *@description DTO file for cats controller
 */
import { IsInt, IsOptional, IsString } from 'class-validator';

class Cat {
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsOptional()
  @IsString()
  readonly breed: string;
}

class CreateCatDto extends Cat {}

class UpdateCatDto extends Cat {}

class ListAllEntities {
  readonly limit: number;
}

export { CreateCatDto, UpdateCatDto, ListAllEntities, Cat };
