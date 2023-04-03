export type Result = {
  id?: number;
  familiya: string;
  name: string;
  otchestvo: string;
  'Participant.startNomer': number;
  'Participant.Results.time': string;
  'Participant.Results.attempt': string;
  'Participant.raceEventId': number;
};
export type State = {
  resultsArr: Result[];
  error: undefined | string;
};
export type IdResult = Result['id'];
export type Message = { message: string };
