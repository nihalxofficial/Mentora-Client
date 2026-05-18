"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function EnrollmentButton() {

    return (
        <Button
            color="primary"
            size="lg"
            className="w-full font-bold shadow-lg mt-4"
            // onPress={handleEnroll}
            // isLoading={enrolling}
        >
            Enroll Now
        </Button>
    );
}