import Taro, { memo, useCallback, useEffect } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import TabBar from '../../components/TabBar';
import './index.scss';
import { AppState } from '../../store';
import { getRankList } from '../../actions/rank';

function Index() {

    const { rankList } = useSelector((state: AppState) => state.rank)

    const dispatch = useDispatch();

    const getRankDispatch = useCallback(() => {
        return dispatch(getRankList())
    }, [dispatch]);

    useEffect(() => {
        getRankDispatch();
    }, [getRankDispatch])



    return (
        <View className='rank'>
            <View className='official'>
                <View className='title'>
                    <Text>官方榜</Text>
                </View>
                <View className='official_content'>

                </View>
            </View>
            <View className='global'>
                <View className='title'>
                    <Text>全球榜</Text>
                </View>
            </View>
            <TabBar
              pageCurrent={1}
            ></TabBar>
        </View>
    )
}

Index.config = {
    navigationBarTitleText: '排行'  
}

export default memo(Index);
