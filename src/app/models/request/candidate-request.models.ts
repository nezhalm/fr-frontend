export interface Candidate {
  fullname: string;
  email: string;
  phone: string;
  letter: string;
  role: string;
  date: string;
  password: string;
  cvUrl: string;
  offer: {
    id: number;
  };
  user: {
    id: number;
  };
}

