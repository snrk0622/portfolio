import Link from "next/link";

import { ThemeSwitcher } from "@/app/_components/_layout/_header/theme-switcher";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center h-16 px-6 z-50 bg-white dark:bg-slate-900">
      <div className="grow">
        <Link href="/">&gt;_ snrk</Link>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
