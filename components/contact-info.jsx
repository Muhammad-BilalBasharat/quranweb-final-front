import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
                <CardDescription>View and manage your contact information</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5">

                    <div className="grid gap-2">
                        <Label htmlFor="phone-one">Phone One</Label>
                        <Input type="text" id="phone-one" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone-two">Phone Two</Label>
                        <Input type="text" id="phone-two" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone-three">Phone Three</Label>
                        <Input type="text" id="phone-three" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp">Whatsapp Number</Label>
                        <Input type="text" id="whatsapp" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="Email" id="email" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" id="address" />
                    </div>

                    <CardHeader className={"col-span-2 -px-5"}>
                        <CardTitle className="text-xl">Social Links</CardTitle>
                        <CardDescription>View and manage your social links</CardDescription>
                    </CardHeader>

                    <div className="grid gap-2">
                        <Label htmlFor="facebook">Facebook Link</Label>
                        <Input type="text" id="facebook" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="twitter">Twitter Link</Label>
                        <Input type="text" id="twitter" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="instagram">Instagram Link</Label>
                        <Input type="text" id="instagram" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="youtube">Youtube Link</Label>
                        <Input type="text" id="youtube" />
                    </div>

                    <div className="flex col-span-2 gap-5 items-center">
                        <Button type="submit" color="primary">
                            Update Contact Info
                        </Button>
                    </div>

                </form>
            </CardContent>
        </Card>
    )
}