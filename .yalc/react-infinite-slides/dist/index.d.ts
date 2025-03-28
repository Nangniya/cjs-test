import { default as default_2 } from 'react';

declare const InfiniteSlide: default_2.FC<IProps>;
export default InfiniteSlide;

declare interface IProps {
    slidesToScroll?: number;
    children: React.ReactNode;
    leftArrow?: React.ReactNode;
    rightArrow?: React.ReactNode;
    auto?: boolean;
    interval?: number;
    responsive?: IResponsiveSetting[];
}

declare interface IResponsiveSetting {
    breakpoint: number;
    slidesToScroll: number;
}

export { }
