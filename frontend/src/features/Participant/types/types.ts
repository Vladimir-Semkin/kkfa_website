import { IdRace } from '../../LK/types/types';
import { IdApplication } from '../../RegApplication/types/types';

export type Participant = {
  id?: number;
  applicationId: number;
  raceEventId: number;
  groupListId: number;
  startNomer: number;
};
export type ApplInPApproved = {
  id?: number;
  name: string;
  email: string;
  familiya: string;
  otchestvo?: string;
  datarojdeniya: string;
  gorod: string;
  phone: string;
  udostovorenieVoditel: string;
  licenseRAFNAF: string;
  medicalReport: string;
  markaModelAuto: string;
  gosNomer?: string;
  objemDvigatelya: string;
  tipPrivoda?: string;
  markaModelPokryshek?: string;
  nalichieNadduva?: string;
  mnogodresselnyVpusk?: string;
  izmFazyGazoraspredeleniya?: string;
  nestandartnyVpusk?: string;
  izmKuzova?: string;
  groupListId?: number;
  team?: string;
  ispolzovanieAutoDrugimi?: string;
  startNomer?: string;
  raceEventId?: number;
};
export type ApprovedParticipant = {
  Application: ApplInPApproved;
};

export type State = {
  participantsArr: Participant[];
  approvedPartArr: ApprovedParticipant[];
  error: undefined | string;
};
export type ObjAddPart = {
  id: IdRace;
  applicationId: IdApplication;
};
export type IdParticipant = Participant['id'];
export type ObjDelPart = {
  id: IdRace;
  participantId: IdParticipant;
};
export type Message = { message: string };
