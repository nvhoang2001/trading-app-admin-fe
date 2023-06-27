import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
	return (
		<div>
			<div className="w-screen h-screen flex flex-col">
				<div className="flex-auto flex">
					<main className="flex-auto overflow-auto bg-[#f6f7fb] p-3">
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
}
