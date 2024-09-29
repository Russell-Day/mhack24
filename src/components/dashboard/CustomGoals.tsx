import React, { useState, useEffect } from "react";
import {
    Container,
    Paper,
    Typography,
    Box,
    Grid,
    Checkbox,
    FormControlLabel,
    Button,
    CircularProgress,
    Alert, // Import Alert for success message
} from "@mui/material";
import { fetcher } from "@/lib/fetcher";
import { useUser } from "@/lib/hooks/useUser";

// Define the goal categories and goals
const goalCategories = {
    MentalHealth: [
        "Quit Social Media",
        "Meditation",
        "Improve Sleep Quality",
        "Manage Stress",
    ],
    PhysicalHealth: [
        "Fitness / Get Stronger",
        "Quit Smoking",
        "Weight Loss",
        "Nutrition and Healthy Eating",
        "Increase Daily Steps",
        "Hydration Goals",
    ],
    SocialHealth: [
        "Strengthen Family Bonds",
        "Build New Friendships",
        "Improve Communication Skills",
        "Reconnect with Old Friends",
        "Volunteer / Community Service",
        "Plan Regular Social Activities",
    ],
};

const CustomGoals = () => {
    const { data } = useUser();
    console.log(data);

    // State to store selected goals and submission status
    const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false); // For success message
    const [loading, setLoading] = useState(false); // For button loading state

    // Populate selected goals from user data
    useEffect(() => {
        if (data?.payload?.goals) {
            const userGoals = data.payload.goals.map(
                (goal: any) => goal.goalName
            );
            setSelectedGoals(userGoals);
        }
    }, [data]);

    if (!data?.payload) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    // Handler for checking/unchecking a goal
    const handleGoalToggle = (goal: string) => {
        setSelectedGoals((prevSelectedGoals) =>
            prevSelectedGoals.includes(goal)
                ? prevSelectedGoals.filter((g) => g !== goal)
                : [...prevSelectedGoals, goal]
        );
    };

    const handleSubmit = async () => {
        setLoading(true); // Set loading to true
        console.log(selectedGoals);
        const response = await fetcher("/api/update-goals", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            data: {
                user: data?.payload?.name, // Using the user name from payload
                goals: selectedGoals.map((el) => {
                    return {
                        goalName: el, // Goal name must be between 1 and 100 characters
                        progress: 0, // Progress should be between 0 and 100 percent
                        startDate: new Date().toISOString(), // ISO string date format
                        endDate: new Date(
                            Date.now() + 1000 * 60 * 60 * 24 * 7
                        ).toISOString(), // Example: End date 7 days from now
                    };
                }),
            },
        });
        console.log("response: ", response);
        setLoading(false); // Set loading to false
        setSubmitted(true); // Show success message
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                flexGrow: 1,
                backgroundColor: "#f4f6f8", // Light background for contrast
                justifyContent: "flex-start", // Ensure content is aligned at the top
                minHeight: "100vh", // Adjust height based on content
            }}
        >
            {/* Header Section */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    marginBottom: 3,
                    paddingLeft: 2,
                    textAlign: "left", // Center the title
                }}
            >
                Customize Your Goals
            </Typography>

            {/* Success Message */}
            {submitted && (
                <Alert severity="success" sx={{ marginBottom: 3 }}>
                    Goals submitted successfully!
                </Alert>
            )}

            <Grid container spacing={3}>
                {/* Mental Health Section */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: "#ffe0b2", // Light orange background
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: 2,
                                textAlign: "center",
                            }} // Center the section title
                        >
                            Mental Health
                        </Typography>
                        {goalCategories.MentalHealth.map((goal, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={selectedGoals.includes(goal)}
                                        onChange={() => handleGoalToggle(goal)}
                                    />
                                }
                                label={goal}
                            />
                        ))}
                    </Paper>
                </Grid>

                {/* Physical Health Section */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: "#c8e6c9", // Light green background
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: 2,
                                textAlign: "center",
                            }} // Center the section title
                        >
                            Physical Health
                        </Typography>
                        {goalCategories.PhysicalHealth.map((goal, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={selectedGoals.includes(goal)}
                                        onChange={() => handleGoalToggle(goal)}
                                    />
                                }
                                label={goal}
                            />
                        ))}
                    </Paper>
                </Grid>

                {/* Social Health Section */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: "#b3e5fc", // Light blue background
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: 2,
                                textAlign: "center",
                            }} // Center the section title
                        >
                            Social Health
                        </Typography>
                        {goalCategories.SocialHealth.map((goal, index) => (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox
                                        checked={selectedGoals.includes(goal)}
                                        onChange={() => handleGoalToggle(goal)}
                                    />
                                }
                                label={goal}
                            />
                        ))}
                    </Paper>
                </Grid>
            </Grid>

            {/* Submit Button */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 15,
                }} // Increase marginTop for more space
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? <CircularProgress size={24} /> : "Submit Goals"}
                </Button>
            </Box>
        </Box>
    );
};

export default CustomGoals;
