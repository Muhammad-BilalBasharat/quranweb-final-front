import { Button } from "./ui/button";
export default function TrailCard() {
    return (
        <div className="bg-extra-dark px-5 rounded-lg text-white max-w-82 text-center m-10 py-5">
            <h2 className="text-xl font-semibold text-center">3 Days Free Trail</h2>
            <p className="text-xs ">Join our 3 days free trail class by providing your details.</p>
            <form>
                <div className="flex flex-col gap-2 my-3">

                    <input type="text" placeholder="Full Name" className={"rounded-sm text-xs text-extra-dark bg-white p-2.5 outline-none border-none"} />

                    <input type="email" placeholder="Email" className={"rounded-sm text-xs text-extra-dark bg-white p-2.5 outline-none border-none"} />

                    <input type="text" placeholder="Phone No." className={"rounded-sm text-xs text-extra-dark bg-white p-2.5 outline-none border-none"} />

                    <Button type="submit" className="w-full">
                        Submit Info
                    </Button>
                </div>
            </form>
        </div>
    );
}