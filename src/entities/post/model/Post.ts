import type { HateoasLinks } from '@shared/types/Hateoas';
import type { PaginationMeta } from '@shared/types/Pagination';

export interface Post {
  id: string;
  name: string;
  price: number;
  category: string;
  _links: HateoasLinks;
}

export interface PostsListData {
  posts: Post[];
  pagination: PaginationMeta;
}

export interface PostsListResponse {
  data: PostsListData;
}
