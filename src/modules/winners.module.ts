import {Module} from "@nestjs/common";
import {WinnersController} from "./winners.controller";
import {WinnersService} from "./winners.service";


@Module({
  controllers: [WinnersController],
  providers: [WinnersService]
})

export class WinnersModule {}