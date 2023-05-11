/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import BookedService from "../Pages/Home/BookedService/BookedService";
import OrderReview from "../Pages/OrderReview/OrderReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "/sing-up",
				element: <Register />,
			},
			{
				path: `/booked-service/:id`,
				element: (
					<PrivateRoute>
						<BookedService />
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/services/${params.id}`),
			},
			{
				path: "order-review",
				element: <OrderReview />,
			},
		],
	},
]);

export default router;