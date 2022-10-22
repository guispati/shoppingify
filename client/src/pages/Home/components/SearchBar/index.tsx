import { SearchForm } from "./SearchForm";
import { SearchBarContainer } from "./styles";

export function SearchBar() {
	return (
		<SearchBarContainer>
			<h1><strong>Shoppingify</strong> allows you take your shopping list wherever you go</h1>

			<SearchForm />
		</SearchBarContainer>
	);
}