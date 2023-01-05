import Link from 'next/link';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { stack as Menu } from 'react-burger-menu';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { SetStateAction, useState } from 'react';

const Navbar = () => {
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  let baseUrl = 'http://localhost:3001';
  if (process.env.production && process.env.production !== 'false') baseUrl = 'https://find.world';

  const [open, setOpen] = useState(0);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  // @ts-ignore
  function Icon({ id, open }) {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={`${
          id === open ? 'rotate-90' : ''
        } h-7 w-7 transition-transform`}
        viewBox='0 0 24 24'
        stroke={'currentColor'}
        strokeWidth={2}
      >
        <polyline points='10,6 16,12 10,18' fill='none' />
      </svg>
    );
  }

  // @ts-ignore
  function background({ id, open }) {
    return (
      `${
        id === open ? 'bg-[#f8f9fd] dark:bg-[#2c2c2c]' : ''
      }`
    );
  }

  if (isWaitlist === false)
    return (
      <nav
        className={classNames(
          'flex justify-around relative h-12 w-full pt-10 pb-20 sticky top-0 z-50 bg-white dark:bg-[#262626]',
          theme
        )}
      >
        <Link href={'/'}>
          <div className='cursor-pointer hidden sm:flex hidden'>
            <Image
              src={theme === 'light' ? '/find-logo-black.svg' : '/find-logo-white.svg'}
              width={96}
              height={40}
              alt=''
            />
          </div>
          <div className='flex sm:hidden'>
            <Image
              src={theme === 'light' ? '/findlabs-logo-black.svg' : '/findlabs-logo-white.svg'}
              width={128}
              height={32}
              alt=''
            />
          </div>
        </Link>
        <div className='hidden sm:flex ml-auto sm:ml-0 my-auto '>
          <Link href={`${baseUrl}`}>
            <div className='mr-10 cursor-pointer dark:text-gray-100'>Mission</div>
          </Link>
          <Link href={`${baseUrl}/docs`}>
            <div className='mr-10 cursor-pointer dark:text-gray-100'>Product</div>
          </Link>
          <label htmlFor='modal' className='cursor-pointer dark:text-gray-100'>
            Docs
          </label>
          <input type='checkbox' id='modal' className='modal-toggle' />
          <label htmlFor='modal' className='modal cursor-pointer'>
            <label
              className='modal-box w-11/12 max-w-7xl dark:bg-[#2C2C2C] md:-mt-16 lg:-mt-60 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 gap-4'>
                <div className='pl-5 text-sm'>GUIDE TO FIND</div>
                <div className='hidden lg:block' />
                <div className='hidden md:block' />
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/getting-started.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Getting Started
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/browser-extension.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Browser Extension
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/generated-results.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Generated Results
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/privacy-and-security.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Privacy and Security
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/perspectives.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Perspectives
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/sessions.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>Sessions</div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image
                    src={'/assets/billing-and-subscriptions.svg'}
                    width={24}
                    height={24}
                    alt=''
                  />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Billing and Subscriptions
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/searching-connected-apps.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Searching Connected Apps
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/briefings-and-alerts.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Briefings and Alerts
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/searching.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>Searching</div>
                    <div className='text-xs text-[#757685]  cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
              </div>
              <div className='flex flex-col gap-4'>
                <div className='pl-5 text-sm'>DEVELOPERS</div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/api-reference.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      API Reference
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/enabling-your-app-for-find-search.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Enabling Your App for Find Search
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
                <div className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
                  <Image src={'/assets/contributing-to-find.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
                    <div className='text-[#151515] dark:text-white cursor-pointer'>
                      Contributing to Find
                    </div>
                    <div className='text-xs text-[#757685] cursor-pointer'>
                      Learn more about app
                    </div>
                  </span>
                </div>
              </div>
            </label>
          </label>
        </div>
        <Link href='https://find.new/login' className='hidden sm:flex'>
          <button
            className='bg-gray-700 dark:bg-gray-200-dark hover:bg-gray-400 text-white dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto'>
            Log in
          </button>
        </Link>
        <div className='flex sm:hidden'>
          <Menu
            customBurgerIcon={<div>
              <Image src={theme === 'light' ? '/assets/light/hamburger.svg' : '/assets/dark/hamburger.svg'} width={96}
                     height={96} alt='' />
            </div>}
            customCrossIcon={<div>
              <Image src={theme === 'light' ? '/assets/light/cross.svg' : '/assets/dark/cross.svg'} width={96}
                     height={96} alt='' />
            </div>}
            className='left-0 top-0' width={'100%'}
            menuClassName={'bg-white dark:bg-[#212121]'}
          >
            <Image
              src={theme === 'light' ? '/findlabs-logo-black.svg' : '/findlabs-logo-white.svg'}
              width={128} height={32} alt='' className='absolute top-10' />
            <span className='w-full mt-16 p-0.5 bg-[#E8E8EB] lg:w-1/3'/>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
              <AccordionHeader className={classNames(background({
                id: 1,
                open
              }), 'mt-3 pl-8 pr-11 py-3 text-2xl dark:text-white rounded-lg')} onClick={() => handleOpen(1)}>
                Mission
              </AccordionHeader>
              <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>
                <div className='pl-5 text-sm'>GUIDE TO FIND</div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/getting-started.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Getting Started
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/privacy-and-security.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Privacy and Security
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/billing-and-subscriptions.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Billing and Subscriptions
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/searching-connected-apps.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Searching
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/browser-extension.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Browser Extension
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/perspectives.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Perspectives
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/searching.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>Searching Connected Apps</div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/generated-results.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Generated Results
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/sessions.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>Sessions</div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/briefings-and-alerts.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Briefings and Alerts
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='pl-5 text-sm'>DEVELOPERS</div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/api-reference.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              API Reference
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/enabling-your-app-for-find-search.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Enabling Your App for Find Search
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
                <div className='flex flex-row pl-3'>
                  <Image src={'/assets/contributing-to-find.svg'} width={24} height={24} alt='' />
                  <span className='m-3'>
            <div className='text-[#151515] dark:text-white'>
              Contributing to Find
            </div>
            <div className='text-xs text-[#757685]'>
              Learn more about app
            </div>
          </span>
                </div>
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
              <AccordionHeader className={classNames(background({
                id: 2,
                open
              }), 'mt-3 pl-8 pr-11 py-3 text-2xl dark:text-white rounded-lg')} onClick={() => handleOpen(2)}>
                Products
              </AccordionHeader>
              <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
              <AccordionHeader className={classNames(background({
                id: 3,
                open
              }), 'mt-3 pl-8 pr-11 py-3 text-2xl dark:text-white rounded-lg')} onClick={() => handleOpen(3)}>
                Docs
              </AccordionHeader>
              <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

              </AccordionBody>
            </Accordion>
            <Link href='https://find.new/waitlist'
                  className='absolute bg-primary text-white dark:text-gray-700-dark font-semibold bottom-4 left-4 px-4 py-2 rounded-xl w-40 text-center'>
              Join
            </Link>
            <Link href='https://find.new/login'
                  className='absolute bg-gray-700 dark:bg-gray-200-dark text-white dark:text-gray-700-dark font-semibold px-4 py-2 bottom-4 w-40 right-4 text-center rounded-xl'>
              Log in
            </Link>
          </Menu>
        </div>
      </nav>
    );
  else
    return (
      <nav className={classNames('relative top-5 lg:top-8', theme)}>
        <div className='flex lg:justify-center cursor-pointer ml-5'>
          <Link href={'/'}>
            <Image src='/find-logo.svg' width={96} height={40} alt='' />
          </Link>
        </div>
        <Link href='https://find.new/login' className='flex justify-end -mt-10 mr-5 lg:mr-8'>
          <button
            className='bg-white dark:bg-gray-200-dark hover:bg-gray-400 dark:hover:bg-gray-600 dark:text-gray-700-dark font-semibold px-4 py-2.5 rounded-xl my-auto'>
            Log in
          </button>
        </Link>
      </nav>
    );
};

export default Navbar;
