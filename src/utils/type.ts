export type MessageType = {
  id: string;
  text: string;
  rating?: Rating | null;
};

export type Rating = 'good' | 'bad' | 'neutral';
