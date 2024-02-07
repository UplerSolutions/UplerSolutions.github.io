import { NextPage } from "next";
import { Layout } from "@/components/layout/Layout";
import { Panel } from "@/components/ui/panel/Panel";
import { SideBar } from "@/components/ui/sidebar-dashboard";

const Settings : NextPage = () => {
    return (
        <Layout title="Upler - Dashboard">
            <div className="h-[90vh] w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">

                <div className="flex w-full justify-center pb-64  text-neutral-600 xl:gap-5">
                    <SideBar />
                    <Panel />
                </div>

            </div>
            {/*       <pre>
			<div className='text-black pt-24 h-[90vh] bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'>
			{JSON.stringify(session, null, 2)}
			</div>
		</pre> */}
        </Layout>
    )
};

export default Settings;
