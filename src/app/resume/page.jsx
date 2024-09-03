import Form from "@/components/form";
import Test from "@/components/test";

export default function Resume() {
    return (
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="w-1/2 p-8 mr-0 overflow-y-auto">
                    <Form />
                </div>
                <div className="w-1/2 bg-[#F3F2EF] flex justify-center items-center">
                    <Test />
                </div>
            </div>
        </>
    )
}