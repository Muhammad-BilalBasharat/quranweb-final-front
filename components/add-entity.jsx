import {toast} from "react-hot-toast";

export default function AddEntityForm({ formTitle, entityType, onSuccess }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post(`/api/${entityType}`, data);
            onSuccess?.(response.data);
            reset();
            toast.success(`${capitalize(entityType)} added successfully!`);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(`Failed to add ${capitalize(entityType)}. Please try again.`);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{formTitle}</CardTitle>
                <CardDescription>Add a new {entityType} to the system</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="name">{capitalize(entityType)} Name</Label>
                        <Input type="text" id="name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-red-500 text-xs">Name is required</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{capitalize(entityType)} Email</Label>
                        <Input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500 text-xs">Email is required</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">{capitalize(entityType)} Phone</Label>
                        <Input type="tel" id="phone" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-red-500 text-xs">Phone is required</span>}
                    </div>
                    <div className="flex col-span-2 gap-5 items-center">
                        <Button type="submit" color="primary">
                            Add {capitalize(entityType)}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}