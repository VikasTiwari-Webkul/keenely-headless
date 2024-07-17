import SectionHeader from '@keenly/components/elements/SectionHeader';
import {DiscoverStyleSectionCard} from './DiscoverStyleCard';

const DiscoverStyleBanner = () => {
  return (
    <div className="w-full">
      <div
        className="w-full py-4 px-2 flex flex-col gap-y-4 tablet:px-4 tablet:py-0 desk-pri:pt-10 desk-pri:px-20 desk-sec:pt-10 desk-sec:px-40 desk-pri:gap-y-2.5 desk-pri:pb-0"
      >
        <SectionHeader
          title="Discover your Style"
          url={'/'}
          subHeading="Step into a world of fashion at Keenly!"
          titleStyle="desk-pri:text-h3"
          subHeadingStyle="desk-pri:text-p3"
        />
        <div className="flex flex-col rounded-lg gap-y-4 tablet:flex-row tablet:justify-between tablet:gap-x-6 desk-pri:flex-row  desk-pri:gap-x-6 desk-sec:flex-row desk-sec:gap-x-6">
          <DiscoverStyleSectionCard />
          <DiscoverStyleSectionCard />
        </div>
      </div>
    </div>
  );
};

export default DiscoverStyleBanner;
