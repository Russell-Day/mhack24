import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import SupportIcon from "@mui/icons-material/Support";

const AboutUs = () => {
    return (
        <Box
            sx={{
                padding: 5,
                backgroundColor: "#f9f9f9", // Light background
                borderRadius: 2,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)", // Soft shadow
                marginTop: 5,
            }}
        >
            <Container>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 3,
                        color: "#333",
                    }}
                >
                    About Us
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 18,
                        textAlign: "center",
                        mb: 5,
                        color: "#666",
                    }}
                >
                    We believe accountability and friendships are essential in
                    your health journey, whether that’s mental health, physical
                    health, or lifestyle improvement!
                </Typography>
                <Grid container spacing={4}>
                    {/* Why DuoHealth Section */}
                    <Grid item xs={12} md={4}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
                        >
                            Why DuoHealth?
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <PeopleIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#4caf50", // Green color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                Accountability: Having a partner increases
                                accountability and makes it more likely for
                                users to stick to their health plans.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <GroupAddIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#2196f3", // Blue color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                Social Connection: It provides a sense of
                                friendship and shared purpose, reducing feelings
                                of isolation in personal health journeys.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <FitnessCenterIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#f44336", // Red color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                Flexible & Inclusive: Suitable for all fitness
                                levels and health goals, whether users are
                                looking to improve physical fitness, mental
                                well-being, or lifestyle habits.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Key Features Section */}
                    <Grid item xs={12} md={8}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", mb: 2, color: "#333" }}
                        >
                            Our Key Features:
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <TrackChangesIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#ff9800", // Orange color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                1. <strong>Partner Matching:</strong> Users are
                                paired based on their health goals and
                                preferences ensuring a compatible and effective
                                partnership.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <SupportIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#673ab7", // Purple color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                2. <strong>Goal Setting:</strong> The platform
                                offers structured goal-setting tools for weight
                                loss, fitness, diet, mental health, and more.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <LocalActivityIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#ff5722", // Deep Orange color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                3. <strong>Progress Tracking:</strong> Both
                                partners can monitor their progress through
                                personalized daily tasks.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <SupportIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#607d8b", // Blue Grey color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                4. <strong>Motivation & Support:</strong>{" "}
                                Regular reminders and motivational messages keep
                                users engaged and committed to their health
                                journey.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <LocalActivityIcon
                                sx={{
                                    fontSize: 40,
                                    color: "#009688", // Teal color for icon
                                    marginRight: 2,
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{ color: "#666", fontSize: 16 }}
                            >
                                5. <strong>Reward System:</strong> A fun goal as
                                you become healthier: growing your own tree!
                                Pick a seed and grow it as you finish daily
                                tasks for your goal(s).
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AboutUs;
