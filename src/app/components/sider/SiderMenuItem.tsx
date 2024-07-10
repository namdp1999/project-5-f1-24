import { IMenuLink } from "@/app/interfaces/IMenuLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiderMenuItem(props: { item: IMenuLink, isShow: boolean }) {
  const { item, isShow = false } = props;

  const pathname = usePathname();

  return (
    <>
      {isShow && (
        <li className="mb-[30px]">
          <Link 
            href={item.link} 
            className={
              "flex items-center hover:text-primary capitalize " + 
              (item.link === pathname ? "text-primary" : "text-white")
            }
          >
            <span className="text-[22px] mr-[20px]">
              {item.icon}
            </span>
            <span className="text-[16px] font-[700]">
              {item.title}
            </span>
          </Link>
        </li>
      )}
    </>
  )
}