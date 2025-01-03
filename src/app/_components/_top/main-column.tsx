const MainColumn: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="md:w-3/4">{ children }</div>
  );
}

export default MainColumn;