import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const DocLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-5 max-w-[1368px] mx-auto'>
      <div className='col-span-1'>
        <input placeholder=' Search' className='rounded mb-8 pl-6 py-2'/>
        <ul>
          GUIDE TO FIND
          <li>
            <Link href='/docs/getting-started'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/getting-started.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
              <div className='text-[#151515] dark:text-white cursor-pointer'>
                Getting Started
              </div>
              <div className='text-xs text-[#757685] cursor-pointer'>
                Learn more about app
              </div>
            </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/privacy-security'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/privacy-and-security.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Privacy and Security
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/billing-subscription'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
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
            </Link>
          </li>
          <li>
            <Link href='/docs/searching'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/searching.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>Searching</div>
                <div className='text-xs text-[#757685]  cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/browser-extension'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/browser-extension.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Browser Extension
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/perspectives'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/perspectives.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Perspectives
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/searching-connected-apps'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image
                src={'/assets/searching-connected-apps.svg'}
                width={24}
                height={24}
                alt=''
              />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Searching Connected Apps
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/generated-results'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/generated-results.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Generated Results
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/sessions'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/sessions.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>Sessions</div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/briefing-alerts'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/briefings-and-alerts.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Briefings and Alerts
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
        </ul>
        <ul>
          DEVELOPERS
          <li>
            <Link href='/docs/api-references'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/api-reference.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  API Reference
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/enabling-your-app-for-find-search'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image
                src={'/assets/enabling-your-app-for-find-search.svg'}
                width={24}
                height={24}
                alt=''
              />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Enabling Your App for Find Search
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/docs/contributions-to-find'
                  className='flex flex-row hover:bg-[#f8f9fd] dark:hover:bg-[#383838] pl-3 rounded-xl'>
              <Image src={'/assets/contributing-to-find.svg'} width={24} height={24} alt='' />
              <span className='m-3'>
                <div className='text-[#151515] dark:text-white cursor-pointer'>
                  Contributing to Find
                </div>
                <div className='text-xs text-[#757685] cursor-pointer'>
                  Learn more about app
                </div>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='col-span-4'>{children}</div>
    </div>
  );
};

export default DocLayout;
