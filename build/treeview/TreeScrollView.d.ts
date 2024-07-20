import React, { MutableRefObject } from 'react';
import { IFunction, ISize } from 'react-perfect-scrollbar-z/build/components/Interfaces';
interface ITreeContextProps {
    notifyToggle: (data: any[]) => void;
    flagHeight: number;
}
export interface IScrollbarEvent extends IFunction {
}
export interface IScrollbarSize extends ISize {
}
export interface ITreeScrollViewProps extends IFunction, ISize {
    children: React.ReactNode | string;
    className?: string;
    effectData?: any;
    always?: boolean;
    refScroll?: MutableRefObject<any>;
}
export declare const useTreeContext: () => ITreeContextProps;
declare const TreeScrollView: React.FC<ITreeScrollViewProps>;
export default TreeScrollView;
