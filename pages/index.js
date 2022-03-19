import EventList from "../components/events/event-list.js";
import { getFeaturedEvents } from "../dummy-data.js";

function HomePage() {
	const featuredEvents = getFeaturedEvents();
	return (
		<div>
			<EventList items={featuredEvents} />
		</div>
	);
}

export default HomePage;
