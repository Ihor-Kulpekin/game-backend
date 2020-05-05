import {Body, Controller, Get, Post} from "@nestjs/common";
import {WinnersService} from "./winners.service";
import {WinnersDto} from "./dto/WinnersDto";


@Controller('winners')
export class WinnersController{
  constructor(private winnersService:WinnersService) {
  }

  @Get()
  async findAll(){
    return await this.winnersService.findAll();
  }

  @Post()
  async createWinner(@Body() winnerDto:WinnersDto){
    return await this.winnersService.createWinner(winnerDto);
  }

}