export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
  currencies: string[];
}

export type BaseSignProps = {
  content: React.ReactNode
}