export type Race = {
  id?: number;
  title: string | undefined;
  date: string | undefined;
  'Participants.raceEventId'?: number;
};
export type State = {
  racesArr: Race[];
  error: string | undefined;
};
export type IdRace = Race['id'];
export type Message = { message: string };
