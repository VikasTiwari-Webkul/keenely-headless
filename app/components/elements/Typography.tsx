import '../../styles/tailwind.css';

// Defining the HTML tag that the component will support
export const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p1: 'p',
  p2: 'p',
  p3: 'p',
  'h1-mob': 'h1',
  'h2-mob': 'h2',
  'h3-mob': 'h3',
  'h4-mob': 'h4',
  'h5-mob': 'h5',
  'p1-mob': 'p',
  'p2-mob': 'p',
  'p3-mob': 'p',
  label: 'h5',
  'label-mob': 'h5',
  'banner-txt': 'h1',
};

const stylesMapping = {
  h1: 'text-h1 font-roboto font-medium',
  h2: 'text-h2 font-inter font-bold',
  h3: 'text-h3 font-inter font-semibold',
  h4: 'text-h4 font-inter font-semibold',
  h5: 'text-h5 font-inter font-semibold',
  h6: 'text-h6 font-inter font-semibold',
  p1: 'text-p1 font-inter font-inter font-normal',
  p2: 'text-p2 font-inter font-normal',
  p3: 'text-p3 font-inter font-normal',
  'h1-mob': 'text-h1-mob font-roboto font-normal',
  'h2-mob': 'text-h2-mob font-inter font-semibold',
  'h3-mob': 'text-h3-mob font-inter font-semibold',
  'h4-mob': 'text-h4-mob font-inter font-semibold',
  'h5-mob': 'text-h5-mob font-inter font-semibold',
  'p1-mob': 'text-p1-mob font-inter font-normal',
  'p2-mob': 'text-p2-mob font-inter font-normal',
  'p3-mob': 'text-p3-mob font-inter font-normal',
  label: 'text-label font-inter font-medium',
  'label-mob': 'text-label-mob font-inter font-medium',
  'banner-txt': 'text-banner-txt font-roboto font-medium',
};


// Create a functional component that take
// variant: the selected html tag
// color: the selected color
// children: the node passed inside the Component
// ...props: the default attribute of the Component

interface ITypographyProps {
  variant?: keyof typeof variantsMapping;
  color?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}


const Typography = ({
  variant = 'label',
  color,
  children,
  className,
  onClick,
  ...props
}: ITypographyProps) => {
  // If the variant exists in variantsMapping, we use it.
  // Otherwise, use p tag instead.
  const Component: any =  variant ? variantsMapping[variant] :'p';
  const style = variant ? stylesMapping[variant] : '';

  return (
    <Component onClick={onClick} className={`${style}  ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
