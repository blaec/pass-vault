import React, {useEffect} from 'react';

import IconVisibility from "../../../UI/IconButtons/IconVisibility";
import ItemDataRow from "./ItemDataRow";


const SecretItemDataRow = (props) => {
    const {id, description, value, showDetails} = props;
    const [isShow, setIsShow] = React.useState(false);

    const onShowHideCardPin = () => {
        setIsShow(!isShow);
    }
    const showHideCardPin = (
        <IconVisibility
            isShow={isShow}
            onAction={onShowHideCardPin}
        />
    );
    useEffect(() => {
        setIsShow(false);
    }, [showDetails])


    return (
        <ItemDataRow
            id={id}
            description={description}
            value={value}
            isHidden={!isShow}
            icon={showHideCardPin}
        />
    );
};

export default SecretItemDataRow;