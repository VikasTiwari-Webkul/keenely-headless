import Typography from './Typography';

export interface IMobileBackDrop {
  children: React.ReactNode;
  show: boolean;
  title: string;
  setShow: (e:boolean) => void;
}

const MobileBackDrop = ({children, show, title,setShow}: IMobileBackDrop) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className={`overlay ${show ? 'expanded' : ''}`}
      onClick={() => setShow(false)}
    >
      <div className="w-screen  absolute bottom-0">
        <div className="w-full h-64 rounded-t-3xl bg-white overlay_backdrop">
          <>
            <div className="w-full border-b border-gray-200 flex items-center justify-center">
              <Typography variant="h4" className="px-5 py-4 text-gray-950">
                {title}
              </Typography>
            </div>
            <div className="p-4 w-full h-52 overflow-auto overflow-x-hidden">{children}</div>
          </>
        </div>
      </div>
    </div>
  );
};

export default MobileBackDrop;
