/*
 * @Author: your name
 * @Date: 2020-04-13 16:01:54
 * @LastEditTime: 2020-04-14 17:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/actions/rank.ts
 */
import { CHANGE_RANK } from '../constants/rank';
import { getRankListRequest } from '../api/request';
import { changeLoading } from '../actions/loading';

export const changeRank = (data) => ({
    type: CHANGE_RANK,
    data
})

export const getRankList = () => {
    return async(dispatch) => {
        const res: any = await getRankListRequest();
        try{
            const {list} = res.data;
            dispatch(changeRank(list))
            dispatch(changeLoading(false))
        }catch(e) {
            console.log(e);
        }
            
    }
}