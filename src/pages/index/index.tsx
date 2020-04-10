import Taro, { useCallback, memo } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter';
import TabBar from '../../components/TabBar';

import './index.scss'


// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
    counter: {
        num: number
    }
}

type PageDispatchProps = {
    add: () => void
    dec: () => void
    asyncAdd: () => any
}

type PageOwnProps = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
    props: IProps;
}

function Index() {

    const counter = useSelector((state: PageStateProps) => state.counter);
    
    const dispatch = useDispatch();

    const addClick = useCallback(() => {
        dispatch(add())
    }, [dispatch])

    const decClick = useCallback(() => {
        dispatch(minus())
    }, [dispatch])

    const asyncAddClick = useCallback(() => {
        dispatch(asyncAdd())
    }, [dispatch])

    return (
        <View className='index'>
            <Button className='add_btn' onClick={addClick}>+</Button>
            <Button className='dec_btn' onClick={decClick}>-</Button>
            <Button className='dec_btn' onClick={asyncAddClick}>async</Button>
            <View><Text>{counter.num}</Text></View>
            <View><Text>Hello, World</Text></View>
            {/* <Loading show></Loading> */}
            <TabBar
              pageCurrent={0}
            ></TabBar>
        </View>
    )
}

Index.config = {
    navigationBarTitleText: '首页'
}

export default memo(Index);