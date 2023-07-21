import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="bg-white flex justify-between items-center pr-5 shadow-2xl">
			<Link to="/" className="flex items-center bg-[#404e67] w-[240px] px-4 py-2">
				<img src="/images/logo-mini.png" alt="" height={50} width={50} />
				<span className="border-0 border-l-4 border-solid border-orange-500 text-white pl-4">
					Trading App
				</span>
			</Link>

			<Button shape="circle" className="[&.ant-btn]:h-12 w-12">
				<FontAwesomeIcon icon={faUser} size="2x" />
			</Button>
		</div>
	);
}

export default Header;
