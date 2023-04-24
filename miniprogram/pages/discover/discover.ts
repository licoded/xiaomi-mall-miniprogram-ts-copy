import type { ICategory } from '../../types/category';
import type { IProduct } from '../../types/product';
import { getCategoryList, getProductByCategory } from '../../api/discover/index';

Page({

  /**
   * Page initial data
   */
  data: {
    categoryList: [] as ICategory[],
    currentCategoryId: 0,
    productList: [] as IProduct[],
  },

  async updateProductList() {
    const productList = await getProductByCategory({
      pageSize: 10,
      currentPage: 1,
      categoryID: [this.data.currentCategoryId],
    });
    this.setData({ productList });
  },

  async handleTabChange(e) {
    this.setData({
      currentCategoryId: e.detail.key,
    });
    
    console.log('tab has been changed!');
    this.updateProductList();
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    const categoryList = await getCategoryList();
    // const categoryAll = {
    //   category_id: 0,
    //   category_name: "全部"
    // };
    // categoryList.unshift(categoryAll);
    this.setData({ categoryList });

    // set currentCategoryId
    this.setData({
      currentCategoryId: categoryList[0].category_id,
    });
    this.updateProductList();
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})