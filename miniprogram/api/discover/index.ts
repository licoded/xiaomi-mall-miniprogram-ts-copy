import { post } from '../../utils/request';
import { ICategory } from '../../types/category';
import { IProduct } from '../../types/product';

interface IGetcategoryListResp { 
  code: number;
  category: ICategory[];
}

interface IGetProductByCategoryResp { 
  code: number;
  Product: IProduct[];
}

interface categoryIDPageParams {
  pageSize: number;
  currentPage: number;
  categoryID: number[];
}

export async function getCategoryList() {
  const categoryListResp = await post<{}, IGetcategoryListResp>('/product/getCategory', {});
  return categoryListResp.category;
}

export async function getProductByCategory(params: categoryIDPageParams) {
  const categoryListResp = await post<{}, IGetProductByCategoryResp>('/product/getProductByCategory', params);
  return categoryListResp.Product;
}