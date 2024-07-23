import Account from "@/components/budgeter/Account";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Settings } from "lucide-react";

function Budgeter() {
	return (
		<div className="p-1 m-1">
			<Card className="mx-4 my-2">
				<CardHeader>
					<div className="flex">
						<Input type="number" placeholder="Paycheck" className="mr-1" />
						<Button size="icon" variant="outline">
							<Settings className="w-4 h-4" />
						</Button>
					</div>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2">
					<Account name="Savings" amount={200} />
					<Account name="Chequing" amount={450} />
				</CardContent>
			</Card>
		</div>
	);
}

export default Budgeter;
