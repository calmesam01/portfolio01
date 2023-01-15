import { useRouter } from "next/router";
import React, { useEffect } from "react";
import userData from "../constants/data";

export default function ResumePage() {
    const router = useRouter();
    const { resumeUrl } = userData;
    const resumeRedirect = () => {
        router.push(resumeUrl)
    }
    useEffect(() => {
        setTimeout(resumeRedirect(), 10);
    }, []);
    return (
        <></>
    );
}