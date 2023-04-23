const baseURL = "https://licoded.site";

function request<IParams, IResponse>(
  api: string,
  params: IParams,
  type: 'POST' | 'GET'
): Promise<IResponse> {
  const url = baseURL + api;
  return new Promise((resolve) => {
    // open/set 'loading' modal
    wx.showLoading({
      title: 'loading...',
    });
    wx.request({
      header: {
        'content-type': 'application/json',
      },
      url,
      method: type,
      data: params,
      success: function(res) {
        resolve(res.data as IResponse);
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function() {
        // close/hide 'loading' modal
        wx.hideLoading();
      }
    })
  });
}

export function post<IParams, IResponse>(
  url: string,
  params: IParams,
): Promise<IResponse> {
  return request(url, params, "POST");
}

export function get<IParams, IResponse>(
  url: string,
  params: IParams,
): Promise<IResponse> {
  return request(url, params, "GET");
}