import { Card, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

type propsType = {
	name: string;
	url: string;
};

const WidgetButton = ({ name, url }: propsType) => {
	return (
		<Link to={url}>
			<Card className="cursor-pointer mb-4">
				<CardHeader>{name}</CardHeader>
			</Card>
		</Link>
	);
};

export default WidgetButton;
