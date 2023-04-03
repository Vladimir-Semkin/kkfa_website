export type Result = {
  id?: number;
  familiya: string;
  name: string;
  otchestvo: string;
  'Participants.startNomer': number;
  'Participants.Results.time': string;
  'Participants.Results.attempt': string;
  'Participants.raceEventId': number;
};
export type State = {
  resultsArr: Result[];
  error: undefined | string;
};
export type IdResult = Result['id'];
export type Message = { message: string };
