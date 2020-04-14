/*
 * @Author: your name
 * @Date: 2020-04-11 21:52:56
 * @LastEditTime: 2020-04-13 17:52:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/commonType.d.ts
 */
export interface bannerType {
    targetId: string | number | undefined;
    imageUrl: string;
    url: string;
}
export interface recommendType {
    name: string;
    picUrl: string;
    trackCount: number;
    playCount: number;
    id: string | number | undefined;
}

export interface HomeStateType {
    bannerList: bannerType[];
    recommendList: recommendType[]
}

export interface LoadingStateType {
    loading: boolean
}