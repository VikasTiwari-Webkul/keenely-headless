import {Suspense} from 'react';
import {Await, Link, NavLink, useMatches} from '@remix-run/react';
import type {
  FooterQuery,
  HeaderQuery,
  ParentMenuItemFragment,
} from 'storefrontapi.generated';
import {MobileHeader} from './Header';
import {isValidArray} from '~/utils/helper';
import EmailInputForm from './elements/EmailInputForm';
import {FaceBookIcon, LinkedinIcon, XIcon} from './elements/Icons';
import Typography from './elements/Typography';
import {Accordion} from './elements/Accordion';
import { TrustBanner } from './homepage/TrustBanner';

interface FooterProps {
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  publicStoreDomain: string;
}

export function Footer({
  footer: footerPromise,
  header,
  publicStoreDomain,
}: FooterProps | any) {
  return (
    <>
      <Suspense>
        <Await resolve={footerPromise}>
          {(footer) => (
            <footer className="footer">
              {footer?.menu && header.shop.primaryDomain?.url && (
                <>
                  <FooterMenu
                    menu={footer.menu}
                    primaryDomainUrl={header.shop.primaryDomain.url}
                    publicStoreDomain={publicStoreDomain}
                    copyRight={<CopyRight />}
                  />
                </>
              )}
            </footer>
          )}
        </Await>
      </Suspense>

      <Suspense>
        <Await resolve={footerPromise}>
          {(footer) => (
            <footer className="footer">
              {footer?.menu && header.shop.primaryDomain?.url && (
                <>
                  <MobileFooterMenu
                    menu={footer.menu}
                    primaryDomainUrl={header.shop.primaryDomain.url}
                    publicStoreDomain={publicStoreDomain}
                    copyRight={<CopyRight />}
                  />
                </>
              )}
            </footer>
          )}
        </Await>
      </Suspense>

      <MobileHeader />
    </>
  );
}

function MobileFooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
  copyRight,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
  copyRight: React.ReactNode;
}) {
  
  return (
    <div className="flex-col h-full pb-14 hidden mobile:flex">
      <div className="flex flex-col h-full pt-2 pb-4">
        <div
          className={`h-full flex justify-between flex-col px-4 mobile:hidden`}
        >
          {/* Links Section */}
          <div className="flex flex-col gap-y-6">
            <div className="h-full">
              {isValidArray(menu?.items) &&
                menu?.items.map((item) => {
                  return (
                    <Accordion
                      title={item.title}
                      accordionSummary={
                        <div className="flex flex-col gap-y-3">
                          <ChildMenuItems items={item.items} />
                        </div>
                      }
                      key={item.id}
                    />
                  );
                })}
            </div>

            <div className="flex flex-col gap-y-[9px]">
              <NavTitle title={'Subscribe to our newsletter'} />
              <EmailInputForm />
            </div>

            <div className="flex flex-col justify-center items-center pb-8">
              <GetInTouch />
            </div>
          </div>

          {/* Copy Right Section */}
          <div className="">
            <CopyRight />
          </div>
        </div>
      </div>
    </div>
  );
}

const ChildMenuItems = ({items}: {items: any[]}) => {
  return (
    <>
      {isValidArray(items) &&
        items.map((res) => {
          return (
            <div className="" key={res.id}>
              <Link to={'/'}>
                <Typography variant="p2" className="text-gray-800 font-normal">
                  {res.title}
                </Typography>
              </Link>
            </div>
          );
        })}
    </>
  );
};

function FooterMenu({
  menu,
  primaryDomainUrl,
  publicStoreDomain,
  copyRight,
}: {
  menu: FooterQuery['menu'];
  primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
  publicStoreDomain: string;
  copyRight: React.ReactNode;
  }) {
  

  return (
    <nav role="navigation" className="tablet:pb-16 mobile:hidden">
      <div className={`w-full`}>
        <TrustBanner />
        <div className="h-85 w-full py-10 desk-pri:px-20 desk-pri:pt-10 desk-pri:pb-0 tablet:h-[25.06rem] tablet:pt-2 tablet:pb-4">
          <div className="h-62 px-40 w-full desk-pri:px-0 desk-pri:h-[12.56rem] flex flex-col gap-y-10 justify-center tablet:h-[23.56rem] tablet:px-4 tablet:gap-y-6">
            <div className="h-[12.56rem] grid grid-cols-4 tablet:grid-cols-3 tablet:h-[20.5rem]">
              {isValidArray(menu?.items) &&
                menu?.items.map((item) => {
                  return (
                    <div key={item.id} className="h-full tablet:h-[12.56rem]">
                      <NavTitle title={item.title || ''} />
                      {isValidArray(item.items) && (
                        <ChildNavLinks links={item.items} />
                      )}
                    </div>
                  );
                })}
              <div className="flex flex-col justify-between h-[13.62rem] tablet:flex-row tablet:h-[6.43rem] tablet:gap-x-4 tablet:col-start-1 tablet:col-end-4">
                <div className="flex flex-col gap-y-[9px] h-[103px] w-full">
                  <NavTitle title={'Subscribe to our newsletter'} />
                  <EmailInputForm />
                </div>
                <GetInTouch />
              </div>
            </div>
            <div className="pb-4 pt-2">{copyRight}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export const NavTitle = ({title}: {title: string}) => {
  return (
    <Typography
      variant="h5"
      className="h-[51px] flex items-center text-gray-600"
    >
      {title}
    </Typography>
  );
};

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}

const ChildNavLinks = ({links}: {links: [ParentMenuItemFragment]}) => {
  if (isValidArray(links)) {
    return (
      <div className="flex flex-col items-start gap-y-3">
        {links.map((item) => {
          return (
            <Link key={item.id} to={item.url || '/'}>
              <Typography variant="p2" className="text-gray-800 line-clamp-1">
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </div>
    );
  }
  return '';
};

const GetInTouch = () => {
  return (
    <div className="flex flex-col w-full h-[5.68rem] justify-between tablet:ml-2">
      <div className="h-[51px] flex items-center py-4 mobile:justify-center">
        <h4 className="font-semibold text-gray-600 text-body1">Get in touch</h4>
      </div>
      <div className="flex h-10 gap-x-2.5 mobile:justify-center">
        <div className="p-2">
          <FaceBookIcon />
        </div>
        <div className="p-2">
          <XIcon />
        </div>
        <div className="p-2">
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};

export const CopyRight = () => {
  return (
    <Typography variant="p2" className="text-center text-gray-600">
      Copyright © 2013-present Magento, Inc. All rights reserved. Theme © by
      Webkul
    </Typography>
  );
};
