import Link from "next/link";

import { ThemeSwitcher } from "@/app/_components/_layout/_header/theme-switcher";
import { BLOG_NAME } from "@/lib/constants";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-16 px-5 z-50 bg-white dark:bg-dark-base border-b border-light-sub dark:border-dark-sub">
      <div className="grow">
        <Link href="/">&gt;_ { BLOG_NAME}</Link>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
