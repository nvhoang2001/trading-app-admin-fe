import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

console.log("fullConfig: ", fullConfig.theme.colors.sky);

export default function DefaultLayout() {
	return (
		<div>
			<div className="w-screen h-screen">
				<Layout className="w-full h-full">
					<Layout.Sider style={{ backgroundColor: fullConfig.theme.colors.sky[300] }}>
						<Sidebar />
					</Layout.Sider>
					<Layout>
						<Layout.Header>
							<Header />
						</Layout.Header>
						<Layout.Content>
							<div>
								<main className="flex-auto overflow-auto bg-[#f6f7fb] p-3">
									<Outlet />
								</main>
							</div>
						</Layout.Content>
					</Layout>
				</Layout>
			</div>
		</div>
	);
}
