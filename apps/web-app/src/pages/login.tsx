import { useRouter } from 'next/router';
import Login from '../components/screen/auth/login';
import Error from '../components/screen/auth/error';

const LoginPage = () => {
  const router = useRouter();
  const { error } = router.query;

  return error ? <Error type={error as string} /> : <Login />;
};

LoginPage.layout = 'Auth';

export default LoginPage;
