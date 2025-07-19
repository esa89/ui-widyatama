import { default as React } from 'react';
type MenuItem = {
    key: string;
    label: string;
    icon?: React.ReactNode;
};
type TopbarProps = {
    menus?: MenuItem[];
    activeMenu?: string;
    onChangeMenu?: (key: string) => void;
    userName?: string;
    avatarUrl?: string;
    showNotification?: boolean;
    onNotificationClick?: () => void;
    profileMenu?: {
        label: string;
        onClick: () => void;
    }[];
};
export declare const Topbar: React.FC<TopbarProps>;
export {};
