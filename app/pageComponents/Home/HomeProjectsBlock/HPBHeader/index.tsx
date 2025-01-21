import { Box, Typography } from "@mui/material";

const HPBHeader = () => {
  return (
    <>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "white", // Black text color for the heading
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
          lineHeight: { xs: "1.2", md: "1.5" },
          mb: 2,
        }}
      >
        OUR PROJECTS
      </Typography>
      
      <Box
        sx={{
          backgroundColor: "transparent", // No background color
          color: "white", // Black text color
          borderRadius: "12px",
          padding: "20px",
          mx: "auto",
          boxShadow: 0, // No box shadow
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: "1.8",
            mb: 2,
          }}
        >
          At{" "}
          <span style={{ fontWeight: "bold" }}>
            Labbyk Glass and Aluminium
          </span>
          , we deliver high-quality glass and aluminum solutions. Recent projects include{" "}
          <span style={{ fontWeight: "bold" }}>Winterland Park</span> and{" "}
          <span style={{ fontWeight: "bold" }}>Motorway Toll Plazas</span>.
          <span style={{ fontWeight: "bold" }}>Ary New Studios</span>,{" "}
          <span style={{ fontWeight: "bold" }}>Lahore Abs Developer</span>, and{" "}
          <span style={{ fontWeight: "bold" }}>Bhira University Lahore</span>.
        </Typography>
      </Box>
    </>
  );
};

export default HPBHeader;
