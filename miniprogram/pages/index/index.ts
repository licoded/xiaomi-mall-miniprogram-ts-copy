// index.ts
import type { ICategory } from '../../types/category';
import { getCategoryList } from '../../api/discover/index';

Page({
  data: {
    categoryListArr: [] as ICategory[][],
  },
  async onLoad() {
    const categoryList = await getCategoryList();
    const categoryListArr = [];
    categoryListArr.push(categoryList.slice(0, categoryList.length/2));
    categoryListArr.push(categoryList.slice(categoryList.length/2));
    this.setData({ categoryListArr });
  },
})
