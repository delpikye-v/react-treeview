/// <reference types="react" />
interface IStyledTreeItemProps {
    id?: string;
    className?: string;
    showXLine: boolean;
    showYLine: boolean;
    lineColor: string;
}
interface IStyledTreeItemSubProps {
    nodeSelected: boolean;
    fullRowSelection: boolean;
    selectedBgColor: string;
    selectedColor: string;
}
interface IStyledTreeItemIconProps {
    className: string;
    nodeSelected: boolean;
    selectedColor: string;
    disabled: boolean;
    active: boolean;
}
export declare const StyledTreeItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IStyledTreeItemProps>> & string;
export declare const StyledTreeItemContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, IStyledTreeItemSubProps>> & string;
export declare const StyledTreeItemIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, IStyledTreeItemIconProps>> & string;
export declare const StyledTreeContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
