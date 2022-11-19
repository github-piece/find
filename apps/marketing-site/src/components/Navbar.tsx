import Link from 'next/link';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const Navbar = () => {
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist === false)
    return (
      <nav
        className={classNames('flex justify-around relative h-12 w-full pt-10 pb-20 sticky top-0 z-50 bg-white dark:bg-[#262626]', theme)}>
        <Link href={'/'}>
          <div className='flex cursor-pointer sm:flex hidden'>
            <Image
              src={theme === 'light' ? '/find-logo-black.svg' : '/find-logo-white.svg'}
              width={96}
              height={40}
              alt='logo'
            />
          </div>
        </Link>
        <div className='flex ml-auto sm:ml-0 my-auto'>
          <Link href={'https://findlabs.org'}>
            <div className='mr-10 cursor-pointer dark:text-gray-100'>Mission</div>
          </Link>
          <Link href={'https://findlabs.org/docs'}>
            <div className='mr-10 cursor-pointer dark:text-gray-100'>Product</div>
          </Link>
          <label htmlFor="modal" className='cursor-pointer dark:text-gray-100'>
            Docs
          </label>
          <input type="checkbox" id="modal" className="modal-toggle"/>
          <label htmlFor="modal" className="modal cursor-pointer">
            <label className="modal-box w-11/12 max-w-7xl dark:bg-[#2C2C2C] -mt-60">
              <div className="grid justify-items-start mb-8 grid-cols-4">
                <div className="pl-5 text-sm">GUIDE TO FIND</div>
                <div/>
                <div/>
                <div className="pl-5 text-sm">DEVELOPERS</div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/getting-started.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Getting Started</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/browser-extension.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Browser Extension</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/generated-results.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Generated Results</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/api-reference.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">API Reference</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/privacy-and-security.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Privacy and Security</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/perspectives.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Perspectives</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/sessions.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Sessions</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/enabling-your-app-for-find-search.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Enabling Your App for Find Search</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/billing-and-subscriptions.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Billing and Subscriptions</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/searching-connected-apps.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Searching Connected Apps</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/briefings-and-alerts.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Briefings and Alerts</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/contributing-to-find.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Contributing to Find</div>
                    <div className="text-xs text-[#757685]">Learn more about app</div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/searching.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className="text-[#151515] dark:text-white">Searching</div>
                    <div className="text-xs text-[#757685] dark:">Learn more about app</div>
                  </span>
                </div>
              </div>
            </label>
          </label>
        </div>
        <Link href='https://find.new/login' className='flex'>
          <button
            className='bg-gray-700 dark:bg-gray-200-dark hover:bg-gray-400 text-white dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto'
          >
            Log in
          </button>
        </Link>
      </nav>
    );
  else
    return (
      <nav className={classNames('relative top-5 lg:top-8', theme)}>
        <div className='flex lg:justify-center cursor-pointer ml-5'>
          <Link href={'/'}>
            <Image src='/find-logo.svg' width={96} height={40} alt='logo' />
          </Link>
        </div>
        <Link href='https://find.new/login' className='flex justify-end -mt-10 mr-5 lg:mr-8'>
          <button
            className='bg-white dark:bg-gray-200-dark hover:bg-gray-400 dark:hover:bg-gray-600 dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto'
          >
            Log in
          </button>
        </Link>
      </nav>
    );
};

export default Navbar;
