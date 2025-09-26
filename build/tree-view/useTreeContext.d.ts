/// <reference types="react" />
interface IFTreeContextProps {
    notifyToggle: (data: any[]) => void;
    flagHeight: number;
}
export declare const TreeContext: import("react").Context<IFTreeContextProps>;
export declare const useTreeContext: () => IFTreeContextProps;
export {};
