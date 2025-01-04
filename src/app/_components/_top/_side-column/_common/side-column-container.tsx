type Props = {
  title?: string;
  children: React.ReactNode;
};

const SideColumnContainer: React.FC<Props> = ({ title, children }) => {
  return (
    <div>
      {title && <div className="text-lg font-bold mb-1">{title}</div>}
      <div className="border p-4 mb-4 border-light-sub dark:border-dark-sub">{children}</div>
    </div>
  );
}

export default SideColumnContainer;