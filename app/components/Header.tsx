import {Suspense} from 'react';
import {Await, Link, NavLink, useMatches} from '@remix-run/react';
import {type CartViewPayload, Image, useAnalytics} from '@shopify/hydrogen';
import type {HeaderQuery, CartApiQueryFragment} from 'storefrontapi.generated';
import {useAside} from '~/components/Aside';
import {
  AppIcon,
  CategoryIcon,
  HamburgerIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBag,
  UserIcon,
} from './elements/Icons';
import {CountrySelector} from './elements/CountrySelector';
import {isValidArray} from '~/utils/helper';

interface HeaderProps {
  header: HeaderQuery;
  cart: Promise<CartApiQueryFragment | null>;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
}

type Viewport = 'desktop' | 'mobile';

export function Header(data: HeaderProps) {
  return (
    <>
      <header>
        <DesktopHeader {...data} />
      </header>
    </>
  );
}

export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}: {
  menu: HeaderProps['header']['menu'];
  primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
  viewport: Viewport;
  publicStoreDomain: HeaderProps['publicStoreDomain'];
}) {
  const className = `header-menu-${viewport}`;

  function closeAside(event: React.MouseEvent<HTMLAnchorElement>) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : 'Sign in')}
          </Await>
        </Suspense>
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}

function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
}

function CartBadge({count}: {count: number}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        } as CartViewPayload);
      }}
    >
      Cart {count}
    </a>
  );
}

function CartToggle({cart}: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
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
    color: isPending ? 'grey' : 'black',
  };
}

const DesktopHeader = ({header}: HeaderProps) => {
  const {shop} = header;

  const appLogoUrl =
    'https://cdn.shopify.com/s/files/1/0738/0408/7585/files/app_logo.png?v=1720178691';

  return (
    <div
      className="justify-between w-full overflow-hidden bg-white items-center md:flex desk-sec:h-head-ph desk-sec:py-5 desk-sec:px-40 opacity-90
     desk-pri:h-head-sh desk-pri:py-2.5 desk-pri:px-20 mobile:opacity-100
     tablet:flex-col
    "
    >
      {/* Banner Separator used at the mobile screen size */}
      <div className="bg-div-col h-7 w-screen hidden tablet:block mobile:block" />

      {/* Left Side Nav */}
      <div className="flex items-center justify-between tablet:hidden mobile:hidden">
        <div className="w-12 h-12 flex items-center justify-center">
          <div className="w-10 h-10 p-2 flex items-center justify-center">
            <HamburgerIcon />
          </div>
        </div>
        <div className="flex items-center w-[4.56rem] h-12">
          <CountrySelector />
        </div>
      </div>

      {/* Logo section */}
      <div
        className="flex items-center relatives desk-sec:w-logo-con desk-sec:h-12 desk-sec:pl-[4.4375rem] desk-sec:gap-2.5 justify-center
      desk-pri:w-logo-con-desk-pri desk-pri:h-12 py-1 desk-pri:pl-[1.125rem] tablet:py-0 tablet:h-12 mobile:h-12 mobile:py-0"
      >
        <span className="flex items-center overflow-hidden  w-logo tablet:h-10 mobile:h-10 justify-center">
          <Link to="/">
            <Image
              src={appLogoUrl}
              alt="app_logo"
              className="object-contain mobile:h-6 tablet:h-6"
            />
          </Link>
        </span>
      </div>

      {/* Right Side Nav */}
      <div className="flex items-center justify-between tablet:hidden mobile:hidden">
        <div className="w-12 h-12 flex justify-center items-center">
          <Link to="/" className="h-10 w-10 flex items-center p-2">
            <SearchIcon />
          </Link>
        </div>
        <div className="w-12 h-12 flex justify-center items-center">
          <Link to="/account/login" className="h-10 w-10 flex items-center p-2">
            <UserIcon view="mobile" />
          </Link>
        </div>
        <div className="w-12 h-12 flex justify-center items-center">
          <Link to="/" className="h-10 w-10 flex items-center p-2">
            <ShoppingBag view="mobile" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const MobileHeader = () => {
  const routeMatcher = useMatches();
  const route = routeMatcher?.[1]?.pathname || null;

  const links = [
    {
      id: 0,
      name: 'Home',
      url: '/',
      icon: <HomeIcon type={route === '/' ? 'fill' : 'outline'} />,
    },
    {
      id: 1,
      name: 'Category',
      url: '/collections',
      icon: (
        <CategoryIcon
          type={route?.includes('/collections') ? 'fill' : 'outline'}
        />
      ),
    },

    {
      id: 2,
      name: 'Cart',
      url: '/cart',
      icon: (
        <ShoppingBag
          view="mobile"
          type={route?.includes('/cart') ? 'fill' : 'outline'}
        />
      ),
    },

    {
      id: 1,
      name: 'User',
      url: '/accounts',
      icon: (
        <UserIcon
          view="mobile"
          type={route?.includes('/account') ? 'fill' : 'outline'}
        />
      ),
    },
  ];

  return (
    <>
      <div className=" bg-white opacity-90 w-screen border-common fixed bottom-0  h-[55px] items-center desk-pri:hidden desk-sec:hidden grid grid-cols-4 z-50">
        {isValidArray(links) &&
          links.map((item) => {
            return (
              <div
                className="flex justify-center items-center h-[46px]"
                key={item.id}
              >
                <div className="flex flex-col items-center gap-y-1">
                  <div className="flex justify-center">
                    <Link to={item.url}>{item.icon}</Link>
                  </div>
                  <div className="font-inter text-gray-950 font-medium text-label text-center no-underline h-[14px]">
                    <Link to={item.url}>{item.name}</Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
