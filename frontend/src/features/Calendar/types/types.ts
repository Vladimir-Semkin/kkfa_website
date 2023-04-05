export type Race = {
  id?: number;
  title: string;
  date: string;
  photo:string;
  'Participants.raceEventId'?: number;
};
export type State = {
  racesArr: Race[];
  error: undefined | string;
};
export type IdRace = Race['id'];
export type Message = { message: string };
