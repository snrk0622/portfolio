import MainColumn from "@/app/_components/_top/main-column";
import SideColumn from "@/app/_components/_top/side-column";

const TopPage: React.FC = () => {
  return (
    <div className="md:flex md:flex-row-reverse">
      <SideColumn>side</SideColumn>
      <MainColumn>main</MainColumn>
    </div>
  );
}

export default TopPage;
