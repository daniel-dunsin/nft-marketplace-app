export interface Bid {
  id: string;
  name: string;
  price: number;
  image: string;
  date: string;
}

export interface NFT {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  image: string;
  bids: Bid[];
}
