import React from "react";
import { Typography,
    Link

} from "@mui/material";
export default function Footer(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://webapp.duongtambeautyspa.com">
                ThoaiNgo
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}