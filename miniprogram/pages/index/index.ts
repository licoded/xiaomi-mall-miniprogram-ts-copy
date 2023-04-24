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
  handleCategoryTap(e: WechatMiniprogram.CustomEvent<
    {key: string},
    any,
    {category_item: ICategory}
  >) {
    const categoryItem = e.currentTarget.dataset.category_item;
    wx.setStorageSync('categoryId', categoryItem.category_id);    
    wx.switchTab({ url: '/pages/discover/discover'})
  },
})
