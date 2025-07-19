import { default as React } from 'react';
type MenuItem = {
    key: string;
    label: string;
    icon?: React.ReactElement<{
        size?: number;
    }>;
};
type MenuGroup = {
    group: string;
    items: MenuItem[];
};
type SidebarProps = {
    title: string;
    titleIcon?: React.ReactElement<{
        size?: number;
    }>;
    menu: MenuGroup[];
    activeKey?: string;
    onMenuClick?: (key: string) => void;
    iconSize?: number;
    showFooter?: boolean;
    footerLabel?: string;
    footerIcon?: React.ReactElement<{
        size?: number;
    }>;
    onFooterClick?: () => void;
};
export declare const Sidebar: React.FC<SidebarProps>;
export {};
