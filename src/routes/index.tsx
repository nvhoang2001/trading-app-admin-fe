import { RouteObject, createBrowserRouter } from "react-router-dom";

// import VoidLayout from "@/layouts/Void";
import DefaultLayout from "@/layouts/Default";
import AuthLayout from "@/layouts/Auth";
import Homepage from "@/pages/Homepage";
import SignInPage from "@/pages/SignInPage";

export const routes: RouteObject[] = [
	{
		path: "/sign-in",
		element: <AuthLayout />,
		children: [
			{
				index: true,
				element: <SignInPage />,
			},
		],
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
