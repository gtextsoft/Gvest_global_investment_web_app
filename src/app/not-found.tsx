"use client"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import ErrorImg from "../../public/images/error-404.png";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>404 Page Not Found || GVEST</title>
      </Head>
      <section className="max-w-[1400px] justify-center px-5 md:px-10 mx-auto bg-white pt-10 pb-28 text-center flex-row">
        <div className="flex justify-center my-10">
          <Image
            width={550}
            quality={90}
            height={550}
            src={ErrorImg}
            alt="error 404"
          />
        </div>
        <div className="grid justify-items-center gap-2">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-semibold mb-2.5">
            404 - Page Not Found
          </h2>
          <h3 className="text-sm sm:text-xl">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </h3>
          <Link
            href="/"
            className={`w-fit border mt-8 h-fit md:min-w-fit rounded-sm !bg-lonestar-900 !text-white py-2 px-4 text-base font-normal`}
          >
            Go Back home
          </Link>
          <Button
            onClick={() => router.back()}
            className={`w-fit border mt-8 h-fit md:min-w-fit rounded-sm !bg-lonestar-900 !text-white py-2 px-4 text-base font-normal`}
          >
            Go To Previous Page
          </Button>
        </div>
      </section>
    </>
  );
};
export default NotFound;
