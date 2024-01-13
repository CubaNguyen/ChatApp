

import React, { useState } from 'react';
import FrameMiddle from '../container/FrameMiddle';
import FrameRight from '../container/FrameRight';
import './pathT.scss';

const PathT = () => {
    const [isClick, setIsClick] = useState("");

    const handleExtendFrameMiddle = (click) => {
        setIsClick(click);
    };

    return (
        <div className='containerPathT'>
            <div className={isClick === false ? 'frameMiddle' : 'frameMiddle Active'}>
                <FrameMiddle handleExtend={(param) => handleExtendFrameMiddle(param)} />
            </div>

            {isClick === false ? (
                <div className='frameRightPathT'>
                    <FrameRight />
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default PathT;
