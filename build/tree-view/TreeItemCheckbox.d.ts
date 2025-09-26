import React, { type MouseEvent } from "react";
interface ITreeItemCheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    className?: string;
    label?: React.ReactNode;
    labelClassName?: string;
    onChange?: (evt: MouseEvent | React.ChangeEvent<HTMLInputElement>) => void;
    onLabelClick?: (evt: MouseEvent) => void;
}
declare const TreeItemCheckbox: React.FC<ITreeItemCheckboxProps>;
export default TreeItemCheckbox;
