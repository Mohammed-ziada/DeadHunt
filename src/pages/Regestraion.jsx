import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import framer-motion for animations
import Login from "../components/Auth/Login/Login";
import logo from '../assets/images/Logo.svg';
import { Text } from "@radix-ui/themes";
import Register from "../components/Auth/Register/Register";

export default function Registration() {
    const [tabValue, setTabValue] = useState("Login");

    return (
        <>
            <Tabs.Root
                defaultValue="Login"
                onValueChange={(value) => setTabValue(value)}
            >
                <div className="flex justify-center py-2">
                    <img src={logo} alt="Logo" className="h-6" />
                </div>

                {/* AnimatePresence for handling fade-out/fade-in when tab changes */}
                <AnimatePresence mode="wait" >
                    <motion.div
                        key={tabValue} // key ensures re-rendering the element on tab change
                        initial={{ opacity: 0 }} // initial state before animation (invisible)
                        animate={{ opacity: 1 }} // animate to visible
                        exit={{ opacity: 0 }} // fade out when exiting
                        transition={{ duration: 0.2 }} // control the timing
                        className="text-center   "
                    >
                        <h1 className="font-medium text-black text-xl tracking-normal py-2 capitalize "> {tabValue === "Login"
                            ? "Log in to your account"
                            : "Create Account"}</h1>
                        <Text className="text-gray-500  tracking-wider  ">
                            {tabValue === "Login"
                                ? "Welcome back! Please enter your details."
                                : "Create a new account. Join us today!"}
                        </Text>
                    </motion.div>
                </AnimatePresence>

                {/* Tabs List */}
                <Tabs.List aria-label="Manage your account" className="flex w-full py-4">
                    <Tabs.Trigger
                        className="py-1 w-full text-gray-900 text-center rounded-l-md focus:outline-none 
              data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-gray-300
              bg-gray-100 border border-transparent hover:bg-gray-50"
                        value="Login"
                    >
                        Log in
                    </Tabs.Trigger>
                    <Tabs.Trigger
                        className="py-1 w-full text-gray-900 text-center rounded-r-md focus:outline-none 
              data-[state=active]:bg-white data-[state=active]:border data-[state=active]:border-gray-300
              bg-gray-100 border border-transparent hover:bg-gray-200"
                        value="SignUp"
                    >
                        Sign Up
                    </Tabs.Trigger>
                </Tabs.List>

                {/* Login Tab Content */}
                <Tabs.Content value="Login">


                    <Login />

                </Tabs.Content>

                {/* Sign Up Tab Content */}
                <Tabs.Content value="SignUp">
                    <Register />
                </Tabs.Content>
            </Tabs.Root>
        </>
    );
}
