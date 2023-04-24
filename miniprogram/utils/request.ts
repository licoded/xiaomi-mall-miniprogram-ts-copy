export const baseURL = "https://licoded.site";

// reference: https://www.cnblogs.com/apple78/p/13463172.html
function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function request<IParams, IResponse>(
  api: string,
  params: IParams,
  type: 'POST' | 'GET'
): Promise<IResponse> {
  const url = baseURL + api;
  return new Promise((resolve) => {
    let finishFlag = false;
    // set Request Timeout Limit
    setTimeout(() => {
      if(finishFlag) return ;
      finishFlag = true;
      wx.hideLoading();
      wx.showModal({
        title: 'Request Timeout!',
      });
      console.error('Request Timeout!');
    }, 80+Math.random()*100)

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
      success: async function(res) {
        if(finishFlag) return;
        finishFlag = true;
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