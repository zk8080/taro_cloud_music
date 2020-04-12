import Taro, { memo } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtIcon } from 'taro-ui'
import './index.scss';

interface RecommendType {
    picUrl: string,
    name: string,
    playCount: number,
    id: number | string | undefined
}

type Props = {
    recommendList: RecommendType[]
}

function List(props: Props) {
    const { recommendList } = props;

    return (
        <View className='list_content'>
            {
                recommendList.map((item) => {
                    return (
                        <View className='list_item' key={item.id}>
                            <View></View>
                            <Image src={item.picUrl + '?param=300x300'}></Image>
                            <View className='list_play'>
                                <View className='at-icon at-icon-sound'></View>
                                {
                                    item.playCount < 10000 ?
                                    item.playCount : 
                                    `${Number(item.playCount/10000).toFixed(0)}万`
                                }
                            </View>
                            <View className='list_name'>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}


export default memo(List);