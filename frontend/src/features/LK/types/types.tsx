export type Race = {
  id?: number;
  title: string | undefined;
  date: string | undefined;
  photo: string | undefined;
  description: string | undefined;
  link?: string | undefined;
  'Participants.raceEventId'?: number;
  GroupPhotos?: GroupPhotos[] | undefined;
};
export type GroupPhotos = {
  id?: number;
  raceeventId?: number;
  photo: string;
};

export type State = {
  racesArr: Race[];
  photoArr: string[];
  error: string | undefined;
};
export type IdRace = Race['id'];
export type Message = { message: string };
