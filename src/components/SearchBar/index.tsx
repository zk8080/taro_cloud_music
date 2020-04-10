import Taro, { useState, useCallback, memo } from '@tarojs/taro';
import { AtSearchBar } from 'taro-ui';

interface Props {
    [propName: string]: any;
}

function SearchBar(props: Props) {

    const { handleSearch, ...rest } = props;

    const [value, setValue] = useState('');

    const handleSearchCallback = useCallback(handleSearch, [handleSearch])

    const onValueChange = (val) => {
        setValue(val);
    }

    const onActionClick = () => {
        handleSearchCallback(value)
    }

    return (
        <AtSearchBar
            {...rest}
            value={value}
            onChange={onValueChange}
            onActionClick={onActionClick}
            onConfirm={onActionClick}
        ></AtSearchBar>
    )
}

export default memo(SearchBar);
