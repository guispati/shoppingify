import { ArrowLeft } from "phosphor-react";
import { useParams } from "react-router-dom";
import { FullDateWithIcon } from "../../../components/FullDateWithIcon";
import { BackButton, Header, HistoryDetailContainer } from "./styles";

export function HistoryDetail() {
	const { listId } = useParams();

	const dateFill = new Date(Date.now());

	return (
		<HistoryDetailContainer>
			<BackButton to="/history">
				<ArrowLeft size={16} />
				<span>back</span>
			</BackButton>

			<Header>
            	<h1>History Detail</h1>
				<FullDateWithIcon date={dateFill} />
			</Header>
		</HistoryDetailContainer>
	);
}