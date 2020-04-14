import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import TabBar from '../../components/TabBar';
import './index.scss';

function Index() {
    return (
        <View className='rank'>
            <TabBar
              pageCurrent={1}
            ></TabBar>
        </View>
    )
}

Index.config = {
    navigationBarTitleText: '排行'  
}

export default Index;
