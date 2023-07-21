import {
	faBugs,
	faChartPie,
	faComments,
	faGifts,
	faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, type MenuProps } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
	const location = useLocation();
	const navigator = useNavigate();

	const menuClickHandler: MenuProps["onClick"] = (event) => {
		navigator(event.key);
	};

	return (
		<aside>
			<Menu
				onClick={menuClickHandler}
				style={{ backgroundColor: "transparent" }}
				selectedKeys={[location.pathname]}
				mode="inline"
				items={[
					{
						label: "Dashboard",
						key: "/",
						icon: <FontAwesomeIcon icon={faChartPie} />,
					},
					{
						label: "User management",
						key: "/user",
						icon: <FontAwesomeIcon icon={faUsersGear} />,
					},
					{
						label: "Vip management",
						key: "/vip",
						icon: <FontAwesomeIcon icon={faGifts} />,
					},
					{
						label: "Issue management",
						key: "/issue",
						icon: <FontAwesomeIcon icon={faBugs} />,
					},
					{
						label: "Feedback management",
						key: "/feedback",
						icon: <FontAwesomeIcon icon={faComments} />,
					},
				]}
			/>
		</aside>
	);
}

export default Sidebar;
