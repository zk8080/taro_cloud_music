/*
 * @Author: your name
 * @Date: 2020-01-09 22:58:11
 * @LastEditTime: 2020-04-11 22:30:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/actions/home.ts
 */
import {
    CHANGE_BANNER,
    CHANGE_LOADING
} from '../constants/home';
import { getBannerRequest } from '../api/request';
import { HomeStateType } from '../commonType';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface changeBannerType {
    type: typeof CHANGE_BANNER,
    data: HomeStateType
}

export const changeBanner = (data: HomeStateType): changeBannerType => ({
    type: CHANGE_BANNER,
    data
})

export const changeLoading = (data: boolean) => ({
    type: CHANGE_LOADING,
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