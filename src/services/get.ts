import { getUserProfile } from '@/services/userService'; // Your service to get user data

export async function getServerSideProps(context) {
  const { req } = context;
  const token = req.cookies.auth_token; // Fetch the token from cookies

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  try {
    const userProfile = await getUserProfile(token); // Get user profile data

    return {
      props: {
        userProfile, // Pass the user profile as a prop
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