import { UserModelSchemaType } from "@/schema/UserSchema";
import React from "react";
import { Container, Paper, Typography, Box, Grid } from "@mui/material";

interface IProps {
    user: Omit<UserModelSchemaType, "password">;
}

const Home = ({ user }: IProps) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: 3,
                flexGrow: 1,
                backgroundColor: "#f0f0f0", // Light background for contrast
                minHeight: "100vh", // Ensures the container covers full height
            }}
        >
            {/* Header Section */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    marginBottom: 3,
                    paddingLeft: 2,
                }}
            >
                Good morning, {user.name}!
            </Typography>

            <Grid container spacing={3}>
                {/* Goals Section */}
                <Grid item xs={12} md={8}>
                    <Grid container spacing={3}>
                        {Array(4)
                            .fill(null)
                            .map((_, index) => (
                                <Grid item xs={12} md={6} key={index}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            padding: 3,
                                            borderRadius: 2,
                                            backgroundColor:
                                                index === 5
                                                    ? "#e3f2fd"
                                                    : "#fffde7",
                                            border:
                                                index === 5
                                                    ? "2px solid #2196f3"
                                                    : "1px solid #cfd8dc",
                                            height: "120px", // Adjusted height for uniformity
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center", // Center align content
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                textAlign: "center",
                                            }}
                                        >
                                            Goal:
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{ textAlign: "center" }}
                                        >
                                            Current Streak:
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        {/* Daily Affirmations */}
                        <Grid item xs={12}>
                            <Paper
                                elevation={3}
                                sx={{
                                    padding: 3,
                                    borderRadius: 2,
                                    backgroundColor: "#fffde7",
                                    minHeight: "150px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: "bold", marginBottom: 2 }}
                                >
                                    Daily Affirmations{" "}
                                    <span role="img" aria-label="heart">
                                        ❤️
                                    </span>
                                </Typography>
                                <Box sx={{ paddingLeft: 2, marginTop: 1 }}>
                                    <ul style={{ paddingLeft: 20 }}>
                                        <li>_____________ - Partner Name</li>
                                        <li>_____________ - Partner Name</li>
                                        <li>_____________ - Partner Name</li>
                                        <li>_____________ - AI</li>
                                        <li>_____________ - AI</li>
                                    </ul>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Growth Section */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{
                            padding: 3,
                            borderRadius: 2,
                            backgroundColor: "#ffebee",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: "bold", marginBottom: 2 }}
                        >
                            Your Growth
                        </Typography>
                        <Box
                            sx={{
                                backgroundColor: "#fce4ec",
                                padding: 3,
                                borderRadius: 2,
                                textAlign: "center",
                                height: "80%",
                                width: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: "bold" }}
                            >
                                Your Plant
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
