export type Result = {
  id?: number;
  familiya: string;
  name: string;
  otchestvo: string;
  'Participants.startNomer': number;
  'Participants.Results.time': string;
  'Participants.Results.attempt': string;
  'Participants.raceEventId': number;
  'Participants.Results.id': number;
};
export type State = {
  resultsArr: Result[];
  error: undefined | string;
};
export type IdResult = Result['id'];
export type Message = { message: string };
