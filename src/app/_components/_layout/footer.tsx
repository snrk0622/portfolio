import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <div className="py-10 text-center">
        <Link
          href="https://github.com/snrk0622/portfolio"
          className="mx-3 font-bold hover:underline"
        >
          View code on GitHub
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
