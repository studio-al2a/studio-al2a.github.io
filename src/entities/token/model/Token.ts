export interface Token {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  token_name: string;
  description?: string | null;
  image_url?: string | null;
  url?: string | null;
  exchange_icon_url?: string | null;
  website_url?: string | null;
}

export interface TokensListResponse {
  data: Token[];
  limit: number;
  nextCursor?: string;
}
