import Image from 'next/image';

export default function Web() {
  return (
    <div className="text-center">
      <section>
        <h1 className="mt-24 text-gray-700 dark:text-gray-700-dark mb-5 text-6xl">
          A new era for search
        </h1>
        <p className="text-gray-600 dark:text-gray-600-dark text-xl max-w-[800px] mx-auto px-12">
          Our mission is to build the future of search, discovery, and exploration on the internet
          through privacy-first, open-source, and ad-free tools.
        </p>
        <button className="rounded-2xl bg-primary hover:bg-blue-700 text-xl px-10 py-4 text-white mt-10">
          Join
        </button>
        <div className="relative">
          <img src={'/assets/figma.png'} alt="figma" />
        </div>
      </section>

      <section>
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-gray-700 dark:text-gray-700-dark mb-5 text-6xl">
            A fast, accurate, and private search service
          </h2>
          <p className="text-gray-600 dark:text-gray-600-dark text-xl mb-14">
            Find Search is a new way to explore the internet. Use the address bar or find.new to
            search the web, news, shopping, and your own connected apps without ads or distraction.
          </p>
          <div className="text-primary text-lg mb-16">&#123; Core Principles &#125;</div>
        </div>
        <div className="mt-1 grid grid-cols-3 gap-4 text-left">
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/privacy.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">Privacy-first</div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              No ad tracking, no unnecessary data collection, and end-to-end encryption of sensitive
              data
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/ad-free.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">Ad-free</div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              No in-product ads, no integration with ad networks, and no building of customer
              profiles for advertising purposes
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/customer.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">
              Our users are our only customers
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              No business deals that sell or provide any access to customer data and no selling user
              or search analytics to third parties.
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/design.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">Great design</div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              Software you use every day should be beautiful, minimalist, intuitive, and highly
              effective.
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/unlock.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">
              Trust-driven community building
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              Transparent product decision making, community engagement, and adherence to high
              privacy, security and integrity standards is paramount
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/braces.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">Open-source</div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              All our product code is open-source, so developers can run it themselves and the
              community can build trust in the security and ranking logic of Find Search.
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/power.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">
              Power users first
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              We design extremely fast and easy to use keyboard-first experiences intended to
              support power users first and empower new users to become power users.
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/filter.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-xl mb-4">
              Optimize for both filtering and discovery
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              Our products don’t build or amplify destructive viral loops. We aren’t building social
              media nor media publishing. Users can customize how our algorithms provide search,
              discovery, and exploration results.
            </p>
          </div>
          <div>
            <div className="p-5 w-fit bg-radial-primary">
              <Image src={'/assets/target.svg'} width={64} height={64} alt="privacy" />
            </div>
            <div className="text-primary text-xl mb-4 flex">
              More about Find{' '}
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_519_2019)">
                  <path
                    d="M18.6787 12.833V10.733C18.6787 10.2197 19.3087 9.95135 19.6703 10.3247L22.9137 13.5797C23.1353 13.813 23.1353 14.1747 22.9137 14.408L19.6703 17.663C19.3087 18.0364 18.6787 17.7797 18.6787 17.2547V15.1664H5.26699C4.93562 15.1664 4.66699 14.8977 4.66699 14.5664V13.433C4.66699 13.1016 4.93562 12.833 5.26699 12.833H18.6787Z"
                    fill="#2876F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_519_2019">
                    <rect width="28" height="28" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              How does Find generate search results?
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex">
          <div className="max-w-[400px] text-left">
            <div>
              <Image src={'/assets/location.svg'} width={20} height={20} alt="location" />
              <span className="text-primary capitalize">Chrome Extension</span>
            </div>
            <div className="text-gray-700 dark:text-gray-700-dark text-4xl">
              Use the web privately across devices.
            </div>
            <p className="text-gray-600 dark:text-gray-600-dark text-lg">
              You can customize how our algorithms find search, discovery, and exploration results.
              Go back in time, travel around the world, and prioritize sources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
