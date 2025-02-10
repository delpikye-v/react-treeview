/// <reference types="react" />
interface IFStyledTreeItemProps {
    id?: string;
    className?: string;
    showXLine: boolean;
    showYLine: boolean;
    lineColor: string;
}
interface IFStyledTreeItemSubProps {
    nodeSelected: boolean;
    fullRowSelection: boolean;
    selectedBgColor: string;
    selectedColor: string;
}
interface IFStyledTreeItemIconProps {
    className: string;
    nodeSelected: boolean;
    selectedColor: string;
    disabled: boolean;
    active: boolean;
}
export declare const StyledTreeItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, IFStyledTreeItemProps>> & string;
export declare const StyledTreeItemContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, IFStyledTreeItemSubProps>> & string;
export declare const StyledTreeItemIcon: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, IFStyledTreeItemIconProps>> & string;
export declare const StyledTreeContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export {};
