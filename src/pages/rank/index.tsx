import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import TabBar from '../../components/TabBar';

function Index() {
    return (
        <View>
            <Text>排行</Text>
            <TabBar
              pageCurrent={1}
            ></TabBar>
        </View>
    )
}

export default Index;
