import { GetStaticPropsContext } from "next";
import { service } from "../data";

const index = (props) => {
  // console.log("CLIENT", service);

  return (
    <div>
      <h1 className="bg-white">Next.ja Bye Bye</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/service");
//   const data = await res.json();

//   console.log("Server", service);

//   return {
//     props: {
//       service: data.service,
//     },
//   };
// };

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const res = await fetch("http://localhost:3000/api/service");
  const data = await res.json();

  console.log("Server", service);

  return {
    props: {
      service: data.service,
    },
  };
};
