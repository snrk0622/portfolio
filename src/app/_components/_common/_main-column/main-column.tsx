const MainColumn: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="lg:w-3/4 lg:pr-6">{ children }</div>
  );
}

export default MainColumn;