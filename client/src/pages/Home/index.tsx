import { ItemList } from "./components/ItemList";
import { SearchBar } from "./components/SearchBar";
import { HomeContainer } from "./styles";

export function Home() {
	return (
		<HomeContainer>
			<SearchBar />
			<ItemList />
		</HomeContainer>
	);
}