import {Controller, Get, Param} from '@nestjs/common';

import {GameSettingsService} from './game-settings.service';

@Controller('game-settings')
export class GameSettingsController {
  constructor(private gameSettingsService: GameSettingsService) {
  }

  @Get(':gameMode')
  async getGameSettings(@Param('gameMode') gameMode) {
    return await this.gameSettingsService.getGameSettings(gameMode);
  }
}