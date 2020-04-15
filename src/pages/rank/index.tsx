import Taro, { memo, useCallback, useEffect } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { useSelector, useDispatch } from '@tarojs/redux';
import TabBar from '../../components/TabBar';
import './index.scss';
import { AppState } from '../../store';
import { getRankList } from '../../actions/rank';
import { filterIndex } from '../../utils';
import { RankStateType, RankType, TracksType } from '../../commonType';

function Index() {

    const { rankList } = useSelector((state: AppState): RankStateType => state.rank)

    const dispatch = useDispatch();

    const getRankDispatch = useCallback(() => {
        return dispatch(getRankList())
    }, [dispatch]);

    useEffect(() => {
        getRankDispatch();
    }, [getRankDispatch])

    const globalStartIndex = filterIndex(rankList);
    const officialArr = rankList.slice(0, globalStartIndex);
    const globalArr = rankList.slice(globalStartIndex)

    // eslint-disable-next-line react/no-multi-comp
    const renderSongList = (list: TracksType[] ) => {
        return (
            <View className='song_list'>
                {
                    list.map((item: TracksType, index) => {
                        return (<View className='song_item' key={index}>
                        <Text>{index+1}. {item.first} - {item.second}</Text>
                    </View>)
                    })
                }
            </View>
        )
    }

    return (
        <View className='rank'>
            <View className='official'>
                <View className='title'>
                    <Text>官方榜</Text>
                </View>
                <View className='official_content'>
                    {
                       officialArr.map((item: RankType) => {
                           return (
                            <View className='official_item' key={item.id}>
                                <View className='official_img_wrapper'>
                                    <Image className='official_img' src={item.coverImgUrl}></Image>
                                    <View className='decorate'></View>
                                    <View className='updateFrequency'><Text>{item.updateFrequency}</Text></View>
                                </View>
                                {
                                    renderSongList(item.tracks)
                                }
                            </View>
                           )
                       }) 
                    }
                </View>
            </View>
            <View className='global'>
                <View className='title'>
                    <Text>全球榜</Text>
                </View>
                <View className='global_content'>
                    {
                        globalArr.map((item: RankType) => {
                            return (
                                <View className='global_item' key={item.id}>
                                    <View className='global_img_wrapper'>
                                        <Image className='global_img' src={item.coverImgUrl}></Image>
                                        <View className='decorate'></View>
                                        <View className='updateFrequency'><Text>{item.updateFrequency}</Text></View>
                                    </View>
                                </View>
                            )
                        })
                    }
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
