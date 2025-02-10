import React from 'react';
interface IFTreeItemDataProps {
    children: any;
}
interface IFTreeSubItemProps {
    children: React.ReactNode;
    isActive?: boolean;
}
export interface IFTreeItemProps {
    id?: string;
    nodeContent?: any;
    className?: string;
    iconClassName?: string;
    checkboxName?: string;
    isOpen?: boolean;
    disabled?: boolean;
    selected?: boolean;
    fullRowSelection?: boolean;
    selectedWhenToggle?: boolean;
    selectedColor?: string;
    selectedBgColor?: string;
    lineColor?: string;
    showXLine?: boolean;
    showYLine?: boolean;
    hideNodeIcon?: boolean;
    showCheckbox?: boolean;
    checkboxClassName?: string;
    labelCheckboxText?: any;
    labelCheckboxClassName?: string;
    selfData?: any;
    onClick?: (evt: any, isActive: boolean, selfData?: any) => any;
    onToggle?: (isActive: boolean, selfData?: any) => any;
}
export declare const TreeItemData: React.FC<IFTreeItemDataProps>;
export declare const TreeSubItem: React.FC<IFTreeSubItemProps>;
declare const TreeItem: React.FC<IFTreeItemProps>;
export default TreeItem;
