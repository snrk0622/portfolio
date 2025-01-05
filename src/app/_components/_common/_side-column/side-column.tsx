const SideColumn: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="md:w-1/4">{ children }</div>
  );
}

export default SideColumn;