import ComingSoon from '../components/ComingSoon';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('../components/Home'), {
  ssr: false
});

export default function Web() {
  const { resolvedTheme: theme } = useTheme();
  const isWaitlist = process.env.waitlist && process.env.waitlist !== 'false';

  if (isWaitlist == true)
    return (<ComingSoon />);
  else
    return (<Home />);
}