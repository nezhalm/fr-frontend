import {HuntingRequest} from "../request/offer-request.models";
import {RankingRequest} from "../request/ranking-request.models";

export interface CompetitionResponse {
  code: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfParticipants: number;
  location: string;
  huntings: HuntingRequest[];
  rankings: RankingRequest[];
}
