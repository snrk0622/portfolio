const MainColumn: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="md:w-3/4 md:pr-6">{ children }</div>
  );
}

export default MainColumn;