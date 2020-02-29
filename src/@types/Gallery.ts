export type PhotoType = {
  albumId: string;
  id: number;
  title?: string;
  url: string;
  thumbnailUrl: string;
};

export interface Album {
  userId?: number;
  id: string;
  title: string;
}

export interface Gallery {
  gallery: Album[];
}
