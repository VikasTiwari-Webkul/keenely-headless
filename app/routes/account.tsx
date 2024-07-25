import AccountInfoSection from '@keenly/components/accounts/AccountInfo';
import AccountNavMenuTab from '@keenly/components/accounts/AccountNavMenuTab';
import {TabButton} from '@keenly/components/elements/Buttons';
import MobileBackDrop from '@keenly/components/elements/MobileBackDrop';
import Typography from '@keenly/components/elements/Typography';
import {Outlet} from '@remix-run/react';
import {useState} from 'react';

export default function AccountLayout() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="w-full flex p-4 gap-y-4 flex-col">
          <TabButton
            title={'Account'}
            onClick={() => {
              setShow((show) => !show);
            }}
          />
          <Outlet />
        </div>
      </div>
      <MobileBackDrop
        title="Account"
        show={show}
        children={<AccountNavMenuTab />}
        setShow={setShow}
      />
    </>
  );
}
