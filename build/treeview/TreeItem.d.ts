import React from 'react';
interface ITreeItemDataProps {
    children: any;
}
interface ITreeSubItemProps {
    children: React.ReactNode;
    isActive?: boolean;
}
export interface ITreeItemProps {
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
export declare const TreeItemData: React.FC<ITreeItemDataProps>;
export declare const TreeSubItem: React.FC<ITreeSubItemProps>;
declare const TreeItem: React.FC<ITreeItemProps>;
export default TreeItem;
