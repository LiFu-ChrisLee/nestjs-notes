/**
 *@author LiFu
 *@date 2020/3/10 17:33
 *@description DTO file for cats controller
 */

class Cat {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

class CreateCatDto extends Cat {}

class UpdateCatDto extends Cat {}

class ListAllEntities {
  readonly limit: number;
}

export { CreateCatDto, UpdateCatDto, ListAllEntities, Cat };
