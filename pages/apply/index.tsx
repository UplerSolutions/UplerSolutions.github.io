import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { CustomForm } from '@/components/ui/customform/CustomForm'

const Apply: NextPage = () => {
  return (
    <Layout title='Upler - Apply'>
      <CustomForm />
    </Layout>
  )
}

export default Apply

// export const getServerSideProps = async (ctx) => {
//   const { auth } = cookies(ctx);

//   if (!auth) {
//       const { res } = ctx;
//       res.setHeader("location", "/login");
//       res.statusCode = 302;
//       res.end();
//       return;
//   }

//   return {
//       props: {
//           user: auth,
//       },
//   };
// };