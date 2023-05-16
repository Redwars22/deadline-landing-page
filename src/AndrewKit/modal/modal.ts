export interface IModal {
    children: React.ReactNode;
    onClose?: () => void;
    isOpen: boolean;
}