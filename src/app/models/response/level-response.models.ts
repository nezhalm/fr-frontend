import {FishRequest} from "../request/recipient-request.models";

export interface LevelResponse {
  code: number;
  description: string;
  points: number;
  fish: FishRequest[];
}
