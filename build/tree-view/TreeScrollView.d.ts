import React, { type MutableRefObject } from "react";
import type { IFScrollFn, IFSize } from "react-perfect-scrollbar-z";
export type IScrollbarEvent = IFScrollFn;
export type IScrollbarSize = IFSize;
export interface IFTreeScrollViewProps extends IFScrollFn, IFSize {
    children: React.ReactNode | string;
    className?: string;
    effectData?: any;
    always?: boolean;
    refScroll?: MutableRefObject<any>;
}
declare const TreeScrollView: React.FC<IFTreeScrollViewProps>;
export default TreeScrollView;
