import SectionHeader from '@keenly/components/elements/SectionHeader';
import ProductSlider from '@keenly/components/elements/ProductSlider';

const PopularProduct = ({product}: {product: any}) => {
  return (
    <div className="w-full">
      <div
        className="w-full bg-gray-50 pt-4 pb-8 pl-2 flex flex-col gap-y-2
      tablet:pt-2 tablet:px-4 tablet:pb-4 desk-pri:px-20 desk-pri:py-10
      desk-sec:px-40 desk-sec:py-10
     "
      >
        <SectionHeader title="Popular Products" url={'/'} />
        <ProductSlider products={product} />
      </div>
    </div>
  );
};

export default PopularProduct;
