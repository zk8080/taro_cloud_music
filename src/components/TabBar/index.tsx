import Taro, { memo, useState, useEffect } from '@tarojs/taro';
import { AtTabBar } from 'taro-ui';

type Props = {
    pageCurrent: number
}

function TabBar(props: Props) {

    const { pageCurrent } = props;
    
    const [ current, setCurrent ] = useState(0);

    const tabBarArr = [
        { title: '首页', iconType: 'home'},
        { title: '排行', iconType: 'filter'},
        { title: '我的', iconType: 'user'}
    ];

    const currentUrl = {
        0: '/pages/index/index',
        1: '/pages/rank/index',
        2: '/pages/my/index'
    }

    const handleClick = (value) => {
        setCurrent(value);
        if( value != pageCurrent ){
            Taro.redirectTo({
                url: currentUrl[value]
            })
        }
    }

    useEffect(() => {
        setCurrent(pageCurrent)
    }, [pageCurrent])

    return (
        <AtTabBar
          fixed
          tabList={tabBarArr}
          onClick={handleClick}
          current={current}
        />
      )
}

export default memo(TabBar);