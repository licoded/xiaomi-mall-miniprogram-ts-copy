import { getCategoryList, ICategory } from '../../api/discover/index';

Page({

  /**
   * Page initial data
   */
  data: {
    categoryList: [] as ICategory[],
  },

  async handleTabChange() {
    console.log('tab has been changed!');
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad() {
    const categoryList = await getCategoryList();
    const categoryAll = {
      category_id: 0,
      category_name: "全部"
    };
    categoryList.unshift(categoryAll);
    this.setData({ categoryList });
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