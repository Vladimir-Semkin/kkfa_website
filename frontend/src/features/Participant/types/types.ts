export type Participant = {
  applicationId: number;
  raceEventId: number;
  groupListId: number;
  startNomer: number;
};
export type State = {
  participantsArr: Participant[];
  error: undefined | string;
};
export type Message = { message: string };
