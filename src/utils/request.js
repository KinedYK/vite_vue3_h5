import axios from 'axios';
import { isArray } from "@/utils/validate";

const config = {
  baseURL: '/api',
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 最长请求时间
  requestTimeout: 30000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, '200', '0'],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'message',
};

const successCode = config.successCode

const statusName = config.statusName

const messageName = config.messageName

// 操作正常Code数组
const codeVerificationArray = isArray(successCode)
  ? [...successCode]
  : [...[successCode]];

const CODE_MESSAGE = {
  200: "服务器成功返回请求数据",
  201: "新建或修改数据成功",
  202: "一个请求已经进入后台排队(异步任务)",
  204: "删除数据成功",
  400: "发出信息有误",
  401: "用户没有权限(令牌失效、用户名、密码错误、登录过期)",
  402: "令牌过期",
  403: "用户得到授权，但是访问是被禁止的",
  404: "访问资源不存在",
  406: "请求格式不可得",
  410: "请求资源被永久删除，且不会被看到",
  500: "服务器发生错误",
  502: "网关错误",
  503: "服务不可用，服务器暂时过载或维护",
  504: "网关超时",
};


/**
 * axios响应拦截器
 * @param config 请求配置
 * @param data response数据
 * @param status HTTP status
 * @param statusText HTTP status text
 * @returns {Promise<*|*>}
 */
const handleData = async ({ config, data, status, statusText }) => {
  // if (loadingInstance) loadingInstance.close()
  // 若data.code存在，覆盖默认code
  let code = data && data[statusName] ? data[statusName] : status;
  // 若code属于操作正常code，则status修改为200
  if (codeVerificationArray.indexOf(data[statusName]) + 1) code = 200;
  switch (code) {
    case 200:
      // 业务层级错误处理，以下是假定restful有一套统一输出格式(指不管成功与否都有相应的数据格式)情况下进行处理
      // 例如响应内容：
      // 错误内容：{ code: 1, msg: '非法参数' }
      // 正确内容：{ code: 200, data: {  }, msg: '操作正常' }
      // return data
      return data;
    //   case 401:
    //     break
    //   case 402:
    //     return await tryRefreshToken(config)
    //   case 403:
    //     window.router.push({ path: '/403' }).then(() => {})
    //     break
  }
  // 异常处理
  // 若data.msg存在，覆盖默认提醒消息
  const errMsg = `${
    data && data[messageName]
      ? data[messageName]
      : CODE_MESSAGE[code]
      ? CODE_MESSAGE[code]
      : statusText
  }`;
  // 是否显示高亮错误(与errorHandler钩子触发逻辑一致)
  // gp.$baseMessage(errMsg, 'error', 'vab-hey-message-error')
  // if (needErrorLog())
  //   addErrorLog({ message: errMsg, stack: data, isRequest: true })
  return Promise.reject(data);
};

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL: config.baseURL,
  timeout: config.requestTimeout,
  headers: {
    "Content-Type": config.contentType,
  },
});

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  (response) => handleData(response),
  (error) => {
    console.log(error);
    //   const { response } = error
    //   if (response === undefined) {
    //     if (loadingInstance) loadingInstance.close()
    //     gp.$baseMessage(
    //       '未可知错误，可能是因为后端不支持跨域CORS、接口地址不存在等问题引起',
    //       'error',
    //       'vab-hey-message-error'
    //     )
    //     return {}
    //   } else return handleData(response)
  }
);

export default instance;


