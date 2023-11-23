import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { ContactForm } from '@/components/ui/contactform/ContactForm'
import Stepper from '@/components/ui/contactform/Stepper'

const Apply: NextPage = () => {
	return (
		<Layout title="Upler - Apply">
			<div className=" flex h-[800px] items-center justify-center bg-purple-50 lg:h-[100vh] ">
				<Stepper />
			</div>
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
