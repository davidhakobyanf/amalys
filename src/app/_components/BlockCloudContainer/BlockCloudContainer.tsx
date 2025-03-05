import React, { ElementType } from 'react';
import Image, { StaticImageData } from 'next/image';
import cloudIcon from '../../../../public/images/cloudsGrey.png';
import styles from './BlockCloudContainer.module.scss';

interface BlockCloudContainerProps {
    as?: ElementType;
    cloudCount?: number;
    width?: number;
    text?: string;
    version: 'block' | 'miniblock';
    img?: StaticImageData | string;
}

const BlockCloudContainer: React.FC<BlockCloudContainerProps & React.HTMLAttributes<HTMLElement>> = ({
    as: Component = 'div',
    cloudCount = 1,
    width = 250,
    text = '',
    img = cloudIcon,
    version = 'block',
    ...props
    }) => {
    return (
        <Component className={`${styles.block__cloud__container} ${styles[version]}`} {...props}>
            {Array.from({ length: cloudCount }).map((_, index) => (
                <Image
                    key={index}
                    src={img}
                    alt={`cloudIcon-${index}`}
                    width={width}
                />
            ))}
            <p>{text}</p>
        </Component>
    );
};

export default BlockCloudContainer;
