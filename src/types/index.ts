export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  currenciesFavorite?: string[];
}

export type BaseSignProps = {
  content: React.ReactNode
}

export type CurrencyProps = {
  code: string;
  name: string;
  high: number;
  low: number;
  bid: number;
  ask: number;
  varBid: number;
  pctChange: number;
  favorite: boolean;
  timestamp?: number;
};
