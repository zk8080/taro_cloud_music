/*
 * @Author: your name
 * @Date: 2020-04-09 14:45:22
 * @LastEditTime: 2020-04-11 22:32:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taro-music-redux/src/components/Loading/loading.ts
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import './index.scss';

type Props = {
    hide: boolean
}

function Loading(props: Props): any {

    const {hide} = props;

    const loadingCls = classnames({
        loadingWrapper: true,
        hide: hide
    })
    return (
        <View className={loadingCls}>
            <View></View>
            <View></View>
        </View>
    )
}

export default Loading;