import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.primary.main,
        p: 6,
      }}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="#FFFFFF" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/">
            Tree
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
}