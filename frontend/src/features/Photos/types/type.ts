export type GroupPhotos = {
  id?: number;
  raceeventId?: number;
  photo: string;
};

export type State = {
  photoArr: GroupPhotos[];
  error: undefined | string;
};

export type RaceEventPhotoId = GroupPhotos['id'];
export type RaceEventIdPhoto = GroupPhotos['raceeventId'];
