import { default as default_2 } from 'react';

declare const InfiniteSlide: default_2.FC<IProps>;
export default InfiniteSlide;

declare interface IProps {
    slidesToScroll?: number;
    children: React.ReactNode;
    gap?: number;
    leftArrow?: React.ReactNode;
    rightArrow?: React.ReactNode;
    auto?: boolean;
    interval?: number;
    responsive?: IResponsiveSetting[];
    arrowsOverlay?: boolean;
    arrowsAlwaysVisible?: boolean;
}

declare interface IResponsiveSetting {
    breakpoint: number;
    slidesToScroll: number;
}

export { }
