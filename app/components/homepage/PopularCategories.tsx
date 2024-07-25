import {isValidArray} from '~/utils/helper';
import SectionHeader from '../elements/SectionHeader';
import PopularCategoryCard from './PopularCategoryCard';
import {PopularCategoriesData} from '~/utils/contant';
const PopularCategories = () => {
  return (
    <div className="w-full">
      <div className="w-full pt-4 pb-8 px-2 flex flex-col gap-y-2 justify-center tablet:pt-2 tablet:px-4 tablet:pb-4 desk-pri:px-20 desk-pri:py-10 desk-sec:py-10 desk-sec:px-40 ">
        <div className="">
          <SectionHeader title="Popular Categories" url="/" />
        </div>
        <div
          className="w-full grid grid-cols-4 gap-2.5 tablet:grid-cols-6 tablet:gap-x-2.5 tablet:gap-y-4 desk-pri:grid-cols-6 desk-pri:gap-x-[30px] desk-pri:gap-y-4 desk-sec:grid-cols-6 
        desk-sec:gap-x-[30px] desk-sec:gap-y-4
        "
        >
          {isValidArray(PopularCategoriesData) &&
            PopularCategoriesData.map((item) => {
              return (
                <PopularCategoryCard
                  title={item.title}
                  image={item.image}
                  url={item.url}
                  key={item.id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
