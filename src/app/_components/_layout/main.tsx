const Main: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="container min-h-screen mx-auto pt-16">
      <div className="p-5 pb-20">{ children }</div>
    </div>
  );
};

export default Main;
