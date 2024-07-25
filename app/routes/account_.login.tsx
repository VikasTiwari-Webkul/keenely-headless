import {Link, useFetcher} from '@remix-run/react';
import type {LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useEffect} from 'react';
import {AccountCreateButton} from '~/components/accounts/AccountCreateButton';
import {AccountLoginForm} from '~/components/accounts/AccountLoginForm';
import CollectionListAtAccount from '~/components/accounts/FeaturedCollections';
import Thumbnails from '~/components/elements/Thumbnail';
import Typography from '~/components/elements/Typography';

export async function loader({request, context}: LoaderFunctionArgs) {
  return null;
}

export const AccountLoginCompAtMobileScreen = () => {
  return (
    <div className="w-full flex flex-col desk-pri:hidden desk-sec:hidden">
      <div className="w-full p-4 justify-center gap-y-4 flex flex-col">
        <Typography
          variant="h2-mob"
          className="text-center text-gray-950 block"
        >
          Login
        </Typography>
        <AccountLoginForm />
      </div>
      <AccountCreateButton />
    </div>
  );
};

export const AccountLoginAtDesktopScreen = () => {
  return (
    <div className="w-full px-20 py-10 tablet:hidden mobile:hidden desk-sec:px-40 desk-sec:py-8 flex mt-8">
      <div className="w-full flex gap-x-16 flex-1">
        <div className="rounded-2xl w-full h-full min-h-full flex-1">
          <Thumbnails
            src="https://cdn.shopify.com/s/files/1/0642/3868/2266/files/placeholder_login_banner_1399x.png"
            alt="login_pages"
            className="object-cover h-full w-full rounded-2xl min-h-full"
          />
        </div>
        <div className="flex gap-y-6 flex-col w-1/3">
          <Typography variant="h1" className="text-gray-800">
            Login
          </Typography>
          <AccountLoginForm />
          <AccountCreateButton />
        </div>
      </div>
    </div>
  );
};

export default function AccountLogin() {
  const {load, data} = useFetcher();

  useEffect(() => {
    load('/api/collections');
  }, []);

  return (
    <>
      <CollectionListAtAccount data={data} />
      <AccountLoginAtDesktopScreen />
      <AccountLoginCompAtMobileScreen />
    </>
  );
}
