import {Module} from '@nestjs/common';
import {AppController} from '../controllers/app.controller';
import {AppService} from '../services/app.service';
import {WinnersModule} from './winners.module';
import {GameSettingsModule} from "./game-settings.module";

@Module({
  imports: [WinnersModule,GameSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
}
