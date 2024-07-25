import {useState} from 'react';
import AccountInfoSection from '@keenly/components/accounts/AccountInfo';
import {TabButton} from '@keenly/components/elements/Buttons';
import MobileBackDrop from '@keenly/components/elements/MobileBackDrop';
import AccountNavMenuTab from '@keenly/components/accounts/AccountNavMenuTab';

export default function AccountOverView() {
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
          <AccountInfoSection />
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
