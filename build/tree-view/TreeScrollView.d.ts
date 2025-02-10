import React, { MutableRefObject } from 'react';
import { IFScrollFn, IFSize } from 'react-perfect-scrollbar-z';
import './styles.scss';
interface IFTreeContextProps {
    notifyToggle: (data: any[]) => void;
    flagHeight: number;
}
export interface IScrollbarEvent extends IFScrollFn {
}
export interface IScrollbarSize extends IFSize {
}
export interface IFTreeScrollViewProps extends IFScrollFn, IFSize {
    children: React.ReactNode | string;
    className?: string;
    effectData?: any;
    always?: boolean;
    refScroll?: MutableRefObject<any>;
}
export declare const useTreeContext: () => IFTreeContextProps;
declare const TreeScrollView: React.FC<IFTreeScrollViewProps>;
export default TreeScrollView;
