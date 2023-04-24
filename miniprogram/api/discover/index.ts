import { post } from '../../utils/request';
import { ICategory } from '../../types/category';

interface IGetcategoryListResp { 
  code: number;
  category: ICategory[];
}

export async function getCategoryList() {
  const categoryListResp = await post<{}, IGetcategoryListResp>('/product/getCategory', {});
  return categoryListResp.category;
}