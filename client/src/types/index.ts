export interface Joy {
  id: number;
  name: string;
  date: string;
  youtube: {
    id: string;
    title: string;
    artist: string;
  };
  quote: {
    message: string;
    name?: string;
  };
  message: string;
}
