import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <div className="py-10 text-center">
        <img src="/assets/_author/snrk_transparent.png" className="w-10 h-10 mx-auto mb-5" alt="snrk cat" />
        <Link
          href="https://github.com/snrk0622/portfolio"
          className="mx-3 hover:underline"
        >
          View code on <span className="font-bold">GitHub</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
