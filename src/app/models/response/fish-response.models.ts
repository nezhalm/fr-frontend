import {LevelRequest} from "../request/level-request.models";
import {HuntingRequest} from "../request/offer-request.models";

export interface FishResponse {
  name: string;
  averageWeight: number;
  level: LevelRequest
  huntings: HuntingRequest[];
}
