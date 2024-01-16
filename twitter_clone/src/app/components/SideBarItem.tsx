import { IconType } from "react-icons";
interface SideBarItemProps {
    label: string;
    href?: string;
    icon: IconType
    onClick?: () => void;
}

const SideBarItem: React.FC<SideBarItemProps> = ({label, href, icon:Icon, onClick}) => {
    return (
        <div className="flex felx-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-opacity-10 cursor-pointer lg:hidden">
            <Icon size={28} color="white"  ></Icon>
            </div>
            <div className="realtive hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:opacity-10 cursor-pointer">
                <Icon size={28} color="white"></Icon>
                <p className="hiddenn lg:block text-white text-lg">
                {label}
                </p>
            </div>
        </div>
    );
}

export default SideBarItem;