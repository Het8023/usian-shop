import { useUserStore } from '@/stores/user'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    // 非http请求开头需要拼接地址
    if (!config.url.startsWith('http')) {
      config.url = baseURL + config.url
    }
    // 超时时间
    config.timeout = 10000
    // 合并单个请求的header参数
    config.header = {
      ...config.header,
      'source-client': 'miniapp',
    }

    // 通过请求头发送token
    const store = useUserStore()
    if (store.token) {
      config.header.Authorization = store.token
    }

    return config
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('upload', httpInterceptor)

type dataType<T> = {
  code: number
  msg: string
  result: T
}

export function http<T>(options: UniApp.RequestOptions) {
  return new Promise<dataType<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success: (res) => {
        if (res.statusCode == 200) {
          if ((res.data as dataType<T>).code == 1) {
            _showToast(res.data as dataType<T>)
            return resolve(res.data as dataType<T>)
          }
        }

        // token过期，清空token，重新跳转登录页
        if (res.statusCode === 401) {
          const store = useUserStore()
          store.token = ''

          //   跳转到登录页
          uni.navigateTo({
            url: '/pages/login/index',
          })

          //   将错误返回出去
          return reject(res)
        }
        _showToast(res.data as dataType<T>)
        reject(res)
      },
      fail: (err) => {
        uni.showToast({
          icon: 'none',
          title: '网络请求失败',
        })
        reject(err)
      },
    })
  })
}

const _showToast = (res: dataType<any>) => {
  uni.showToast({
    icon: 'none',
    title: res.msg || '请求错误',
  })
}
