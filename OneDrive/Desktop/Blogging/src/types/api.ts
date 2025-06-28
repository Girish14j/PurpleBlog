// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Error types
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// Request types
export interface CreateBlogRequest {
  title: string;
  content: string;
  category: string;
  tags?: string[];
}

export interface UpdateBlogRequest extends Partial<CreateBlogRequest> {
  id: string;
}
