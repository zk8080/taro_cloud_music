/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-13 23:12:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/actions/home.ts
 */
import { CHANGE_BANNER, CHNAGE_RECOMMEND } from '../constants/home';
import { getBannerRequest, getRecommendListRequest } from '../api/request';
import { HomeStateType } from '../commonType';
import { changeLoading } from './loading';


// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface changeBannerType {
    type: typeof CHANGE_BANNER,
    data: HomeStateType
}

export interface changeRecommendListType {
    type: typeof CHNAGE_RECOMMEND,
    data: HomeStateType
}

export const changeBanner = (data: HomeStateType): changeBannerType => ({
    type: CHANGE_BANNER,
    data
})


export const changeRecommendList = (data: HomeStateType): changeRecommendListType => ({
    type: CHNAGE_RECOMMEND,
    data
})

export const getBannerList = () => {
    return async (dispatch) => {
        dispatch(changeLoading(true));
        const res: any = await getBannerRequest();
        try{
            dispatch(changeBanner(res.data.banners));
            dispatch(changeLoading(false));
        }catch(e){
            console.log(e)
        }
    }
}

export const getRecommendList = () => {
    return async (dispatch) => {
        dispatch(changeLoading(true));
        const res: any = await getRecommendListRequest();
        try{
            dispatch(changeRecommendList(res.data.result));
            dispatch(changeLoading(false));
        }catch(e){
            console.log(e);
        }
    }
}
