import React from "react";
import { DashboardLayout } from "../components/dashboard/DashboardLayout";
import Chatbot from "@/components/BotFriend/Chatbot";

const Chatbotpage = () => {
    return (
        <>
            <DashboardLayout>
                <Chatbot />
            </DashboardLayout>
        </>
    );
};

export default Chatbotpage;
