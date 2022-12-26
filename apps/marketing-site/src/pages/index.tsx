import ComingSoon from '../components/ComingSoon';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/Home'), {
  ssr: false
});

export default function Web() {
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist == true)
    return (<ComingSoon />);
  else
    return (<Home />);
}