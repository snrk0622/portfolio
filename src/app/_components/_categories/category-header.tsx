type Props = {
  category: string;
};

const CategoryHeader: React.FC<Props> = ({ category }) => {
  return (
    <div className="w-full sm:w-5/6 mx-auto mb-4 mt-0 sm:my-14 place-items-center">
      <h1 className="text-5xl leading-relaxed font-bold mb-5">{ category }s</h1>
    </div>
  );
}

export default CategoryHeader;