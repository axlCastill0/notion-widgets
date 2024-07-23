import { Card, CardContent, CardHeader } from "@/components/ui/card";

type propsType = {
	name: string;
	amount: number;
};

const Account = ({ name, amount }: propsType) => {
	return (
		<Card className="w-auto">
			<CardHeader>
				<span className="font-bold">{name}</span>
			</CardHeader>
			<CardContent className="flex justify-center">{amount}$</CardContent>
		</Card>
	);
};

export default Account;
