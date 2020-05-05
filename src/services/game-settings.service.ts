import {Injectable} from '@nestjs/common';

import {GAME_SETTINGS} from './mockData/game-settings.mock';

@Injectable()
export class GameSettingsService {

  private gameSettings = GAME_SETTINGS;

  async getGameSettings(nameGameMode): Promise<Object> {
    return this.gameSettings[nameGameMode];
  }

}