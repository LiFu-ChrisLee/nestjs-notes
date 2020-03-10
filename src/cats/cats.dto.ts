/**
 *@author LiFu
 *@date 2020/3/10 17:33
 *@description DTO file for cats controller
 */

class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

class UpdateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

class ListAllEntities {
  readonly limit: number;
}

export { CreateCatDto, UpdateCatDto, ListAllEntities };
