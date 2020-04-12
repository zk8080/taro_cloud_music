/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-12 22:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/actions/home.ts
 */
import { CHANGE_BANNER, CHANGE_LOADING, CHNAGE_RECOMMEND } from '../constants/home';
import { getBannerRequest, getRecommendListRequest } from '../api/request';
import { HomeStateType } from '../commonType';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface changeBannerType {
    type: typeof CHANGE_BANNER,
    data: HomeStateType
}
export interface changeLoadingType {
    type: typeof CHANGE_LOADING,
    data: boolean
}

export interface changeRecommendListType {
    type: typeof CHNAGE_RECOMMEND,
    data: HomeStateType
}

export const changeBanner = (data: HomeStateType): changeBannerType => ({
    type: CHANGE_BANNER,
    data
})

export const changeLoading = (data: boolean): changeLoadingType => ({
    type: CHANGE_LOADING,
    data
})

export const changeRecommendList = (data: HomeStateType): changeRecommendListType => ({
    type: CHNAGE_RECOMMEND,
    data
})

export const getBannerList = () => {
    return async (dispatch) => {
        const res: any = await getBannerRequest();
        try{
            dispatch(changeBanner(res.data.banners));
            dispatch(changeLoading(false))
        }catch(e){
            console.log(e)
        }
    }
}

export const getRecommendList = () => {
    return async (dispatch) => {
        const res: any = await getRecommendListRequest();
        try{
            dispatch(changeRecommendList(res.data.result));
            dispatch(changeLoading(false))
        }catch(e){
            console.log(e);
        }
    }
}
