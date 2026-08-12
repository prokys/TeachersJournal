import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

export default function LoginPage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "background.default",
            }}
        >

            <Paper
                elevation={3}
                sx={{
                    width: 400,
                    p: 4,
                }}
            >

                <Typography
                    variant="h4"
                >
                    Teachers Journal
                </Typography>

                <TextField
                    fullWidth
                    label="Login"
                    type="username"
                    margin="normal"
                />

                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    margin="normal"
                />

                <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>

            </Paper>

        </Box>
    );
}