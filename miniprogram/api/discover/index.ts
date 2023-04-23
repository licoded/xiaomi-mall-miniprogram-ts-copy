import { post } from '../../utils/request';

export interface ICategory {
  category_id: number;
  category_name: string;
}

interface IGetcategoryListResp { 
  code: number;
  category: ICategory[];
}

export async function getCategoryList() {
  const categoryListResp = await post<{}, IGetcategoryListResp>('/product/getCategory', {});
  return categoryListResp.category;
}