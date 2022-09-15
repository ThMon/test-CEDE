export interface NftQuery {
  amount: string;
  animation_url: string;
  block_number: string;
  block_number_minted: string;
  description: string;
  last_metadata_sync: string;
  last_token_uri_sync: string;
  logo: string;
  metadata: string;
  name: string;
  owner_of: string;
  token_address: string;
  token_hash: string;
  token_id: string;
  token_uri: string;
}

export interface NftState {
  nfts: NftQuery[];
  myFavorites: NftQuery[];
  error: string;
  currentIndex: number;
}
