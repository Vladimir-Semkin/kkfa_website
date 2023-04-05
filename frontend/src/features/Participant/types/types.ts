import { IdRace } from '../../LK/types/types';
import { IdApplication } from '../../RegApplication/types/types';

export type Participant = {
  id?: number;
  applicationId: number;
  raceEventId: number;
  groupListId: number;
  startNomer: number;
};
export type State = {
  participantsArr: Participant[];
  error: undefined | string;
};
export type ObjAddPart = {
  id: IdRace;
  applicationId: IdApplication;
};
export type Message = { message: string };
export type IdParticipant = Participant['id'];
