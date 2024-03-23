import ColorModeButton from "./items/ColorModeButton";
import CreatePost from "./items/CreatePost";
import Home from "./items/Home";
import Notifications from "./items/Notifications";
import ProfileLink from "./items/ProfileLink";
import Search from "./items/Search";

const SidebarItems = () => {
	return (
		<>
			<Home />
            <Search />
            <Notifications />
            <CreatePost />
            <ProfileLink />
			<ColorModeButton />
		</>
	);
};

export default SidebarItems;