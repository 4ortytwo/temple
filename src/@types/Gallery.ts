export type PhotoType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Gallery {
  gallery: Album[];
}
