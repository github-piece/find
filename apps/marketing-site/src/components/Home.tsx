import Image from 'next/image';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { SetStateAction, useEffect, useState } from 'react';


const Home = () => {
  const { resolvedTheme: theme } = useTheme();

  const [open, setOpen] = useState(1);
  const [items, setItems] = useState(Array);
  const [images, setImages] = useState<NodeListOf<Element>>();

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
        stroke={id === open ? '#2876f8' : 'gray'}
        strokeWidth={2}
      >
        <circle cx='12' cy='12' r='10' fill='none' />
        <polygon points='10 8 16 12 10 16 10 8' fill={id === open ? '#2876f8' : 'gray'} />
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

  function detectIntersection(entries: any) {
    for (let e of entries) {
      let i = items.indexOf(e.target);
      if (e.isIntersecting) {
        requestAnimationFrame(ts => {
          e.target.classList.add('visible');
          if (images) {
            images[i].classList.add('visible');
          }
        });
      } else {
        e.target.classList.remove('visible');
        if (images) {
          images[i].classList.remove('visible');
        }
      }
    }
  }

  const options = {
    threshold: 0.25
  };

  const observer = new IntersectionObserver(
    detectIntersection, options
  );

  // @ts-ignore
  items.forEach(i => observer.observe(i));

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('section > span > div'));
    setItems(items);
  }, [])

  useEffect(() => {
    const images = document.querySelectorAll('section > aside > img');
    setImages(images);
  }, [])

  return (
    <main>
      <section className='text-center'>
        <h1 className='mt-24 text-gray-700 dark:text-gray-700-dark mb-5 text-6xl'>
          A new era for search
        </h1>
        <div className="bg-no-repeat bg-right-bottom bg-[url('/assets/vector2.svg')]">
          <div className="bg-no-repeat bg-left-top bg-[url('/assets/vector1.svg')]">
            <p className='text-gray-600 dark:text-gray-600-dark text-xl max-w-[800px] mx-auto px-12'>
              Our mission is to build the future of search, discovery, and exploration on the internet
              through privacy-first, open-source, and ad-free tools.
            </p>
            <button className='rounded-2xl bg-primary hover:bg-blue-700 text-xl px-10 py-4 text-white mt-10'>
              Join
            </button>
            <div className='flex justify-center'>
              <Image src={theme === 'light' ? '/assets/figma.svg' : '/assets/figma-dark.svg'} width={1440}
                     height={935.5} alt=''/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='max-w-[700px] mx-auto text-center'>
          <h2 className='text-gray-700 dark:text-gray-700-dark mb-5 text-6xl'>
            A fast, accurate, and private search service
          </h2>
          <p className='text-gray-600 dark:text-gray-600-dark text-xl mb-14'>
            Find Search is a new way to explore the internet. Use the address bar or find.new to
            search the web, news, shopping, and your own connected apps without ads or distraction.
          </p>
          <div className='text-primary text-lg mb-16'>&#123; Core Principles &#125;</div>
        </div>
        <div className='mt-1 grid grid-cols-3 gap-4 max-w-[1368px] mx-auto'>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/privacy.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>Privacy-first</div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              No ad tracking, no unnecessary data collection, and end-to-end encryption of sensitive data
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/ad-free.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>Ad-free</div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              No in-product ads, no integration with ad networks, and no building of customer
              profiles for advertising purposes
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/customer.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>
              Our users are our only customers
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              No business deals that sell or provide any access to customer data and no selling user
              or search analytics to third parties.
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/design.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>Great design</div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              Software you use every day should be beautiful, minimalist, intuitive, and highly
              effective.
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/unlock.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>
              Trust-driven community building
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              Transparent product decision making, community engagement, and adherence to high
              privacy, security and integrity standards is paramount
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/braces.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>Open-source</div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              All our product code is open-source, so developers can run it themselves and the
              community can build trust in the security and ranking logic of Find Search.
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/power.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>
              Power users first
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              We design extremely fast and easy to use keyboard-first experiences intended to
              support power users first and empower new users to become power users.
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/filter.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-xl mb-4'>
              Optimize for both filtering and discovery
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              Our products don’t build or amplify destructive viral loops. We aren’t building social
              media nor media publishing. Users can customize how our algorithms provide search,
              discovery, and exploration results.
            </p>
          </div>
          <div>
            <div className='p-5 w-fit bg-radial-primary'>
              <Image src={'/assets/target.svg'} width={64} height={64} alt='' />
            </div>
            <div className='text-primary text-xl mb-4 flex'>
              More about Find{' '}
              <svg
                width='28'
                height='28'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_519_2019)'>
                  <path
                    d='M18.6787 12.833V10.733C18.6787 10.2197 19.3087 9.95135 19.6703 10.3247L22.9137 13.5797C23.1353 13.813 23.1353 14.1747 22.9137 14.408L19.6703 17.663C19.3087 18.0364 18.6787 17.7797 18.6787 17.2547V15.1664H5.26699C4.93562 15.1664 4.66699 14.8977 4.66699 14.5664V13.433C4.66699 13.1016 4.93562 12.833 5.26699 12.833H18.6787Z'
                    fill='#2876F8'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_519_2019'>
                    <rect width='28' height='28' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              How does Find generate search results?
            </p>
          </div>
        </div>
      </section>
      <section className='max-w-[1368px] mx-auto grid grid-cols-2 mt-48'>
        <span className='overflow-auto h-96'>
          <div className='h-full mt-20'>
            <div className='flex flex-row'>
              <Image src={'/assets/location.svg'} width={40} height={40} alt='' />
              <span className='text-primary text-base m-2.5'>FUTURE OF SEARCH</span>
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-4xl mt-4'>
              Fast and accurate search results free of ads and SEO-bait.
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg mt-7'>
              No in-product ads, no integration with ad networks, and no building of customer profiles for advertising
              purposes
            </p>
          </div>
          <div className='h-full'>
            <div className='mb-4 flex flex-row'>
              <Image src={'/assets/extension.svg'} width={40} height={40} alt='' />
              <span className='text-primary m-2.5'>CHROME EXTENSION</span>
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-4xl mb-7'>
              Use the web privately across devices.
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              End-to-end encrypted search and browser history through our Chrome extension and unique Sessions feature
            </p>
          </div>
          <div className='h-full'>
            <div className='mb-4 flex flex-row'>
              <Image src={'/assets/star.svg'} width={40} height={40} alt='' />
              <span className='text-primary m-2.5'>FILTER AND EXPLORE</span>
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-4xl mb-7'>
              Customizable Perspectives and Briefings
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              You can customize how our algorithms find search, discovery, and exploration results.
              Go back in time, travel around the world, and prioritize sources.
            </p>
          </div>
          <div className='h-72'>
            <div className='mb-4 flex flex-row'>
              <Image src={'/assets/star.svg'} width={40} height={40} alt='' />
              <span className='text-primary m-2.5'>SEARCH YOUR APPS</span>
            </div>
            <div className='text-gray-700 dark:text-gray-700-dark text-4xl mb-7'>
              Connected apps allow fast and private access to your cloud data
            </div>
            <p className='text-gray-600 dark:text-gray-600-dark text-lg'>
              Not sure where you took that note or added that task?
              Search across all of your apps simply and securely - we can’t access your data.
            </p>
          </div>
        </span>
        <aside className='relative'>
          <Image src={theme === 'light' ? '/assets/search.svg' : '/assets/search-dark.svg'} width={800} height={500}
                 alt='' className='absolute top-0 opacity-0'/>
          <Image src={theme === 'light' ? '/assets/bes.svg' : '/assets/bes-dark.svg'} width={704} height={342} alt=''
                 className='absolute top-0 opacity-0'/>
          <Image src={theme === 'light' ? '/assets/perspective.svg' : '/assets/perspective-dark.svg'} width={800}
                 height={520} alt='' className='absolute top-0 opacity-0'/>
          <Image src={theme === 'light' ? '/assets/time.svg' : '/assets/time-dark.svg'} width={833.5} height={468}
                 alt='' className='absolute top-0 opacity-0'/>
        </aside>
      </section>
      <section className='mt-48 text-center max-w-[1840px] mx-auto'>
        <div
          className="bg-no-repeat bg-cover bg-[url('/assets/coming-soon-light-bg.svg')] dark:bg-[url('/assets/coming-soon-dark-bg.svg')]">
          <h1 className='text-8xl pt-80 pb-10'>
            Ready <br />
            to Explore?
          </h1>
          <div className='flex flex-row justify-center'>
            <div className='flex mx-5'>
              <Image src={'/assets/check.svg'} width={20} height={20} alt='' />
              $5 a month
            </div>
            <div className='flex mx-5'>
              <Image src={'/assets/check.svg'} width={20} height={20} alt='' />
              Cancel any time
            </div>
            <div className='flex mx-5'>
              <Image src={'/assets/check.svg'} width={20} height={20} alt='' />
              Unlimited connected devices
            </div>
            <div className='flex mx-5'>
              <Image src={'/assets/check.svg'} width={20} height={20} alt='' />
              Private data end-to-end encrypted
            </div>
          </div>
          <div className='pt-10 pb-40'>
            <button className='btn btn-primary bg-primary text-white text-xl px-10 pt-5 pb-12 rounded-2xl'>
              Get started
            </button>
          </div>
        </div>
      </section>
      <section className='mt-48 flex justify-between max-w-[1368px] mx-auto'>
        <div className='max-w-[500px]'>
          <div className='text-gray-700 dark:text-gray-700-dark text-6xl mb-5'>
            Frequently Asked
            Questions
          </div>
          <p className='text-gray-600 dark:text-gray-600-dark text-xl'>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Can't find the answer you're looking for? <a href='/' className='text-blue-500'>Docs </a>
          </p>
          <div className='mt-56'>
            <Image src={theme === 'light' ? '/assets/vector.svg' : '/assets/vector-dark.svg'} width={486} height={486}
                   alt={'vector'} />
          </div>
        </div>
        <div className='max-w-[673px] text-gray-700 dark:text-gray-700-dark'>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}
                     className={classNames(background({ id: 1, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl' onClick={() => handleOpen(1)}>
              How does Find generate search results?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}
                     className={classNames(background({ id: 2, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl' onClick={() => handleOpen(2)}>
              How do I know Find is secure?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>
              The Find source code is public, so the developer community can validate our approach to security.
              We do not sell user data and never will.
              Your private search data is end-to-end encrypted,
              so your password is needed to access that data – not even Find Labs can see it.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}
                     className={classNames(background({ id: 3, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl' onClick={() => handleOpen(3)}>
              Can I delete my personal Find data?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}
                     className={classNames(background({ id: 4, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl' onClick={() => handleOpen(4)}>
              Is Find open-source?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}
                     className={classNames(background({ id: 5, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl text-left' onClick={() => handleOpen(5)}>
              If Find is open-source, why should I pay to be a member?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}
                     className={classNames(background({ id: 6, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl text-left' onClick={() => handleOpen(6)}>
              Why should I use Find instead of other search services?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
          <Accordion open={open === 7} icon={<Icon id={7} open={open} />}
                     className={classNames(background({ id: 7, open }), 'rounded-lg')}>
            <AccordionHeader className='flex justify-between p-8 text-2xl text-left' onClick={() => handleOpen(7)}>
              What data is end-to-end encrypted? Do you track what I search?
            </AccordionHeader>
            <AccordionBody className='text-gray-600 dark:text-gray-600-dark text-lg px-8'>

            </AccordionBody>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default Home;
