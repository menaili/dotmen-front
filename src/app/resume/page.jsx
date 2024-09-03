'use client'
import { useState } from "react";
import Form from "@/components/form";
import Test from "@/components/test";

export default function Resume() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };
    return (
        <>
            <div className="flex flex-row w-full h-screen">
                <div className="w-1/2 p-8 mr-0 mt-8 overflow-y-auto">
                    <Form formData={formData} handleInputChange={handleInputChange}/>
                </div>
                <div className="w-1/2 bg-[#F3F2EF] flex justify-center items-center overflow-y-auto">
                    <Test formData={formData}/>
                </div>
            </div>
        </>
    )
}