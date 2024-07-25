import {useState} from 'react';
import {ArrowIcon} from './Icons';
import Typography from './Typography';

interface IProps {
  languages: [];
}

export const CountrySelector = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button
        className="flex-shrink-0 z-10 inline-flex items-center text-sm font-medium text-center text-gray-900  rounded-e-lg focus:outline-none outline-none justify-between desk-sec:h-12 desk-sec:w-[4.56rem] "
        type="button"
        onClick={() => setToggle((toggle) => !toggle)}
      >
        <Typography className="w-12 h-12 flex items-center !text-h3-mob desk-sec:ml-3 font-semibold">EN</Typography>
        <div
          className={` overflow-hidden transform  desk-sec:w-6 desk-sec:h-12  desk-sec:py-2 flex  items-center ${
            toggle ? 'rotate-180' : 'rotate-0'
          } transition duration-500 ease-in-out `}
        >
          <div className=''>
          <ArrowIcon />
          </div>
        </div>
      </button>

      <div
        className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-28 dark:bg-gray-700 absolute top-12  ${
          toggle ? 'block' : 'hidden'
        }`}
      >
        
      </div>
    </>
  );
};
