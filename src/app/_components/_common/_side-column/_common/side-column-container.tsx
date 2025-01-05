type Props = {
  title?: string;
  border: boolean;
  children: React.ReactNode;
};

const SideColumnContainer: React.FC<Props> = ({ title, border= true, children }) => {
  return (
    <div className="mb-6">
      {title && <div className="text-5xl font-bold md:text-lg md:font-bold mb-1">{title}</div>}
      <div className={`${border && 'border p-4'} border-light-sub dark:border-dark-sub`}>{children}</div>
    </div>
  );
}

export default SideColumnContainer;