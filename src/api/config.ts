/*
 * @Author: your name
 * @Date: 2020-04-10 15:06:22
 * @LastEditTime: 2020-04-14 17:18:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/api/config.ts
 */
import Taro from '@tarojs/taro';

const baseUrl = 'http://localhost:8000';

function interceptor(chain: any) {
    const requestParams = chain.requestParams
    const { url } = requestParams
    // console.log(`http ${method || 'GET'} --> ${url} data: `, data)
    const newUrl = url.indexOf('http') !== -1 ? url : baseUrl + url
    return chain.proceed({ ...requestParams, url: newUrl })
            .then(res => {
                // console.log(`http <-- ${url} result:`, res)
                
                return res
            })
    
}

Taro.addInterceptor(interceptor);

export const get = (req) => {
    const { url, data, ...rest } = req;
    return new Promise((resolve, reject) => {
        Taro.request({
            url: url,
            method: 'GET',
            data: data,
            ...rest,
            success: function (res) {
                resolve(res)
            },
            fail: function (res) {
                reject(res)
            }
        })
    })
}

export const post = (req) => {
    const { url, data, ...rest } = req;
    return new Promise((resolve, reject) => {
        Taro.request({
            url: url,
            method: 'POST',
            data: data,
            ...rest,
            success: function (res) {
                resolve(res)
            },
            fail: function (res) {
                reject(res)
            }
        })
    })
}
