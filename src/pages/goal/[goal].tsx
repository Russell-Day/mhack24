import { useRouter } from "next/router";
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { DashboardLayout } from "../../components/dashboard/DashboardLayout";
import { useUser } from "@/lib/hooks/useUser";

const GoalPage = () => {
    const router = useRouter();
    const { goal } = router.query; // Get the goal name from the route

    const { data } = useUser();
    console.log(data);
    const matchedUsers = [
        {
            name: "person 1",
            email: "npm@gmail.com",
            goals: [
                {
                    goalName: "Quit Smoking",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Hydration Goals",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Improve Sleep Quality",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
            ],
            _id: "66f904fd7476b35f343cecff",
            about: " ",
            emailVerified: false,
            createdAt: "2024-09-29T07:41:38.077Z",
        },
        {
            name: "person 2",
            email: "npm@gmail.com",
            goals: [
                {
                    goalName: "Quit Smoking",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Hydration Goals",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Improve Sleep Quality",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
            ],
            _id: "66f904fd7476b35f343cecff",
            about: " ",
            emailVerified: false,
            createdAt: "2024-09-29T07:41:38.077Z",
        },
        {
            name: "person 3",
            email: "npm@gmail.com",
            goals: [
                {
                    goalName: "Quit Smoking",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Hydration Goals",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
                {
                    goalName: "Improve Sleep Quality",
                    progress: 0,
                    startDate: "2024-09-29T08:24:23.718Z",
                    endDate: "2024-10-06T08:24:23.718Z",
                    tasks: [
                        { name: "task 1", isCompleted: true },
                        { name: "task 2", isCompleted: false },
                        { name: "task 3", isCompleted: true },
                    ],
                },
            ],
            _id: "66f904fd7476b35f343cecff",
            about: " ",
            emailVerified: false,
            createdAt: "2024-09-29T07:41:38.077Z",
        },
    ];

    return (
        <DashboardLayout>
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
                {/* Goal Name Header */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        paddingLeft: 2,
                    }}
                >
                    Goal: {goal}
                </Typography>

                <Grid container spacing={3}>
                    {/* Daily Tasks Section */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                borderRadius: 2,
                                backgroundColor: "#ffebee",
                                minHeight: "300px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "ceanter",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                            >
                                Daily Tasks
                            </Typography>
                            <Box sx={{ paddingLeft: 2, marginTop: 1 }}>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        <input type="checkbox" /> Task 1
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Task 2
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Task 3
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Task 4
                                    </li>
                                </ul>
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", marginTop: 2 }}
                            >
                                Extra Tasks
                            </Typography>
                            <Box sx={{ paddingLeft: 2, marginTop: 1 }}>
                                <ul style={{ paddingLeft: 20 }}>
                                    <li>
                                        <input type="checkbox" /> Extra Task 1
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Extra Task 2
                                    </li>
                                    <li>
                                        <input type="checkbox" /> Extra Task 3
                                    </li>
                                </ul>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Partner Status Section */}
                    <Grid item xs={12} md={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                borderRadius: 2,
                                backgroundColor: "#fffde7",
                                minHeight: "300px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                            >
                                Partner Status
                            </Typography>
                            <Box sx={{ paddingLeft: 2, marginTop: 1 }}>
                                <ul style={{ paddingLeft: 20 }}>
                                    {matchedUsers.map((el) => {
                                        return (
                                            <li>
                                                <input type="checkbox" />{" "}
                                                {el.name}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Box>
                        </Paper>
                    </Grid>

                    {/* Weekly View Section */}
                    <Grid item xs={12} md={3}>
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                borderRadius: 2,
                                backgroundColor: "#fffde7",
                                minHeight: "300px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold" }}
                            >
                                This Week
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    marginTop: 2,
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                }}
                            >
                                {["M", "T", "W", "Th", "F", "Sat", "Sun"].map(
                                    (day) => (
                                        <Box
                                            key={day}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                width: 30,
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                {day}
                                            </Typography>
                                            <input type="checkbox" />
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </DashboardLayout>
    );
};

export default GoalPage;

// {
//     /* Weekly View Section */
// }
// <Grid item xs={12} md={3}>
//     <Paper
//         elevation={3}
//         sx={{
//             padding: 3,
//             borderRadius: 2,
//             backgroundColor: "#fffde7",
//             minHeight: "300px",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//         }}
//     >
//         <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             This Week
//         </Typography>
//         <Box
//             sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 width: "100%",
//                 marginTop: 2,
//                 paddingLeft: 2,
//                 paddingRight: 2,
//             }}
//         >
//             {["M", "T", "W", "Th", "F", "Sat", "Sun"].map((day) => (
//                 <Box
//                     key={day}
//                     sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         width: 30,
//                     }}
//                 >
//                     <Typography variant="body2" sx={{ fontWeight: "bold" }}>
//                         {day}
//                     </Typography>
//                     <input type="checkbox" />
//                 </Box>
//             ))}
//         </Box>
//     </Paper>
// </Grid>;
