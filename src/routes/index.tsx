import { RouteObject, createBrowserRouter } from "react-router-dom";

import VoidLayout from "@/layouts/Void";
import DefaultLayout from "@/layouts/Default";
import Homepage from "@/pages/Homepage";

export const routes: RouteObject[] = [
	{
		path: "/dang-nhap",
		element: <VoidLayout />,
		children: [],
	},
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				index: true,
				element: <Homepage />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
