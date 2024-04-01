import {Sender} from "./sender.model";
import {Recipient} from "./recipient-request.models";
import {Offer} from "./offer-request.models";

export interface Chat {
  sender: Sender;
  recipient: Recipient;
  message: string;
  recruitmentOffer: Offer;
  sentAt: string;

}
