
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const SideBarLogo = () => {


    return (
        <Link href={"/"}>
        <div  className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-sky-500 cursor-pointer transition">
            <BsTwitter size={28} color="white" />
        </div>
        </Link>
    )
}

export default SideBarLogo;