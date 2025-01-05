import SideColumnContainer from "@/app/_components/_common/_side-column/_common/side-column-container";

const Alert: React.FC = () => {
  return (
    <div className="bg-light-sub dark:bg-dark-sub text-light-base dark:text-dark-base">
      <SideColumnContainer border={true}>This page is a preview.</SideColumnContainer>
    </div>
  );
};

export default Alert;
