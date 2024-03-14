import CreatePost from "./items/CreatePost";
import Home from "./items/Home";
import Notifications from "./items/Notifications";
import Search from "./items/Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
            <Search />
            <Notifications />
            <CreatePost />
		</>
	);
};

export default SidebarItems;