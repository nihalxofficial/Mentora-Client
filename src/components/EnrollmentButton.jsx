"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { addEnrollment } from "@/lib/courses/action";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EnrollmentButton({course}) {
    const { data: session } = useSession();

    const handleEnroll = async ()=>{
        const { data: jwtData } = await authClient.token();
        const token = jwtData?.token;
        if (!token) {
            toast.error("Authentication failed. Enrollment not add.")
            return;
        }

        const enrolledData = {
            userId: session?.user?.id,
            studentName: session?.user?.name,
            studentEmail: session?.user?.email,
            courseTitle: course?.title,
            thumbnail: course?.thumbnail
        }
        const data = await addEnrollment(enrolledData, course?._id, token)
        if(data){
            toast.success("Enrollment Successful! 🎉")
        }
    }
    return (
        <Button
            color="primary"
            size="lg"
            className="w-full font-bold shadow-lg mt-4"
            onClick={handleEnroll}
            // isLoading={enrolling}
        >
            Enroll Now
        </Button>
    );
}