import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { getUserProfile } from '@/services/userService';

interface UserProfile {
  id: string;
  name: string;
  email: string;
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<{ userProfile: UserProfile }>> {
  const { req } = context;
  const token = req.cookies.auth_token;

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  try {
    const userProfile = await getUserProfile();

    return {
      props: {
        userProfile,
      },
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
}
