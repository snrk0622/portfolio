import Link from 'next/link';

type Props = {
  title?: string;
  category?: string;
  border: boolean;
  children: React.ReactNode;
};

const MainColumnContainer: React.FC<Props> = ({ title, category, border= true, children }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {category && <Link href={`/categories/${category}`} className='hover:underline'>see more ...</Link>}
      </div>
      <div className={`${border && 'border p-4'} border-light-sub dark:border-dark-sub`}>{children}</div>
    </div>
  );
}

export default MainColumnContainer;