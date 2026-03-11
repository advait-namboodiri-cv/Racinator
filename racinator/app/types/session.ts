export type Session = {
    session_key: number;
    session_name: string;
    session_type?: string;
    country_name: string;
    location: string;
    date_start: string;
    year?: number;
  };