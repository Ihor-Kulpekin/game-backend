import {Injectable} from "@nestjs/common";
import {WinnersDto} from "./dto/WinnersDto";

@Injectable()
export class WinnersService {
  private winnersDto:WinnersDto[] = [];

  async findAll():Promise<any>{
    return this.winnersDto;
  }

  async createWinner(winner:WinnersDto):Promise<any>{
    return this.winnersDto.push(winner);
  }

}