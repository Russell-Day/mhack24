import React from "react";
import Navbar from "./Navbar";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image"; // Using Next.js Image component for better optimization
import Scroll from "react-scroll";
import Link from "next/link";
import Features from "./Features";
import About from "./About2";

// Import the sprout image
import sproutImage from "../../../public/assets/images/feature-8.png"; // Adjust the path if necessary

const Landing = () => {
    const Element = Scroll.Element;

    return (
        <>
            <Navbar />
            <Container sx={{ paddingTop: 20 }}>
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 5,
                        color: "#fff", // White color for the text
                        backgroundColor: "#000", // Dark background to match the mockup
                        padding: 5,
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
                    }}
                >
                    {/* Image and Title */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src={sproutImage}
                            alt="Sprout"
                            width={100}
                            height={100}
                        />
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "Arial, sans-serif",
                                fontWeight: "bold",
                                mt: 2,
                            }}
                        >
                            DuoHealth
                        </Typography>
                    </Box>
                    {/* Subtitle */}
                    <Typography
                        variant="h5"
                        sx={{ fontFamily: "Arial, sans-serif", mt: 1 }}
                    >
                        Two Paths, One Goal: Partner Up for Better Health!
                    </Typography>
                </Box>
            </Container>
            <Element name="features">
                <About />
            </Element>
        </>
    );
};

export default Landing;
