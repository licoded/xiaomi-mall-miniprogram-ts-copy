// index.ts
import type { ICategory } from '../../types/category';
import { getCategoryList } from '../../api/discover/index';

Page({
  data: {
    categoryList: [] as ICategory[],
  },
  async onLoad() {
    const categoryList = await getCategoryList();
    this.setData({ categoryList });
  },
})
