import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import TabBar from '../../components/TabBar';

function Index() {
    return (
        <View>
            <Text>我的</Text>
            <TabBar
              pageCurrent={2}
            ></TabBar>
        </View>
    )
}

Index.config = {
    navigationBarTitleText: '我的'
}

export default Index;