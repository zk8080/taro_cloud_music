import Taro, { useCallback, memo, useEffect } from '@tarojs/taro';
import { View, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import { useSelector, useDispatch } from '@tarojs/redux';
import {AppState} from '../../store';
import { HomeStateType } from '../../commonType';
import SearchBar from '../../components/SearchBar';
import TabBar from '../../components/TabBar';
import Loading from '../../components/Loading';
import RecommendList from '../../components/RecommendList';
import './index.scss'
import { getBannerList, getRecommendList } from '../../actions/home';



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

    const { bannerList, loading, recommendList } = useSelector((state: AppState): HomeStateType => state.home)

    const dispatch = useDispatch();

    const getBannerListDispatch = useCallback(() => {
        return dispatch(getBannerList())
    }, [dispatch]);

    const getRecommendListDispatch = useCallback(() => {
        return dispatch(getRecommendList())
    }, [dispatch])

    const goSearch = () => {
        console.log('跳转搜索！')
    }

    useEffect(() => {
        getBannerListDispatch();
        getRecommendListDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <View className='home'>
            <View onClick={goSearch}>
                <SearchBar
                    disabled
                    onClick={goSearch}
                ></SearchBar>
            </View>
            <Swiper
                className='banner_list'
                indicatorColor='#999'
                indicatorActiveColor='#d44439'
                circular
                indicatorDots
                autoplay
            >
                {
                    bannerList.map((item) => {
                        return (
                            <SwiperItem key={item.targetId}>
                                <Image className='banner_item_img' src={item.imageUrl} />
                            </SwiperItem>
                        )
                    })
                    
                }
            </Swiper>
            <View className='title'>
                <Text>推荐歌单</Text>
            </View>
            <RecommendList 
                recommendList={recommendList}
            ></RecommendList>
            <Loading hide={!loading}></Loading>
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