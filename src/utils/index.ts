/*
 * @Author: your name
 * @Date: 2020-04-14 17:54:14
 * @LastEditTime: 2020-04-14 17:59:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/utils/index.ts
 */

export const filterIndex = rankList => {
    for (let i = 0; i < rankList.length - 1; i++) {
        if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
            return i + 1;
        }
    }
};