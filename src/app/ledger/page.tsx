
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { transactions } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const actionVariantMapping: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
    ISSUED: "default",
    SOLD: "secondary",
    LISTED: "outline",
    RETIRED: "destructive",
}

export default function LedgerPage() {
    return (
        <div className="container mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Public Audit Ledger</CardTitle>
                    <CardDescription>A transparent and immutable log of all carbon credit transactions.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">Tx Hash</TableHead>
                                <TableHead>Action</TableHead>
                                <TableHead>Credit ID</TableHead>
                                <TableHead>Amount (tCO₂e)</TableHead>
                                <TableHead>From</TableHead>
                                <TableHead>To</TableHead>
                                <TableHead className="text-right">Timestamp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.length > 0 ? (
                                transactions.map((tx) => (
                                    <TableRow key={tx.txHash}>
                                        <TableCell className="font-mono text-xs truncate">{tx.txHash}</TableCell>
                                        <TableCell>
                                            <Badge variant={actionVariantMapping[tx.action] || 'default'}>{tx.action}</Badge>
                                        </TableCell>
                                        <TableCell>{tx.creditId}</TableCell>
                                        <TableCell>{tx.amountTons?.toLocaleString() ?? 'N/A'}</TableCell>
                                        <TableCell>{tx.from}</TableCell>
                                        <TableCell>{tx.to}</TableCell>
                                        <TableCell className="text-right">{new Date(tx.timestamp).toLocaleString()}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center py-16 text-muted-foreground">
                                        No transactions recorded yet.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}

    