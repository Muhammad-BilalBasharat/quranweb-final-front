import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Profile() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
                <CardDescription>View and manage your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <form className="grid grid-cols-2 gap-5">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" type="text" defaultValue="John Doe" readOnly />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="john.doe@example.com" readOnly />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" readOnly />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" defaultValue="123 Main Street, Washington, USA" readOnly />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" defaultValue="Software Developer" readOnly />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="joinDate">Joined Date</Label>
                        <Input id="joinDate" defaultValue="January 15, 2023" readOnly />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-end">
                <div className="text-sm text-muted-foreground">Last updated: March 10, 2024</div>
            </CardFooter>
        </Card>
    )
}