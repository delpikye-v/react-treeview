import React from "react";
interface IFTreeItemDataProps {
    children: React.ReactNode | (() => React.ReactNode);
}
declare const TreeItemData: React.FC<IFTreeItemDataProps>;
export default TreeItemData;
