import { Box, Divider, Paper, Typography } from "@mui/material";
import type { Note } from "../types/task";

interface NoteListProps {
    notes: Note[];
}

export default function NoteList ({ notes } : NoteListProps){
    return (
        <Paper
            variant="outlined"
            sx={{
                p: 3,
                borderRadius: 2,
            }}
        >
            <Typography
                variant="h6"
            >
                Notes
            </Typography>

            <Box sx={{ mt: 2 }}>
                {notes.map((note, index) => (
                    <Box key={note.id}>
                        {index > 0 && (
                            <Divider sx={{ my: 2 }} />
                        )}

                        <Typography>
                            {note.text}
                        </Typography>

                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{
                                display: "block",
                                mt: 1,
                            }}
                        >
                            {new Date(
                                note.createdAt
                            ).toLocaleString("cs-CZ")}
                        </Typography>
                    </Box>
                ))}

                {notes.length === 0 && (
                    <Typography color="text.secondary">
                        No notes yet.
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}