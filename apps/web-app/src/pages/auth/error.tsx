import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import WarnIcon from '../../assets/icon/warn.svg';
import MailIcon from '../../assets/mail.png';

const Error = () => {
  const router = useRouter();
  const { error } = router.query;
  return (
    <div className="max-w-lg mx-auto w-full">
      <div className="w-36 h-36 mx-auto">
        <Image src={MailIcon} alt="mail" />
      </div>
      <h1 className="font-semibold text-4xl mb-3">Unable to join</h1>
      <p className="text-gray-400 text-sm mb-12 font-semibold">
        The verification link is no longer valid. It may have been used already or it may have
        expired
      </p>
      <div className="bg-gray-100 dark:bg-gray-100-dark text-gray-500 dark:text-gray-500-dark py-3 px-4 text-center rounded text-sm flex mt-3">
        <Link href="/join">
          <div className="mx-auto cursor-pointer hover:text-primary">Please, join again!</div>
        </Link>
      </div>
    </div>
  );
};

Error.layout = 'Auth';

export default Error;
