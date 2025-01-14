import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import {
  WindowOutlined,
  BuildOutlined,
  StorefrontOutlined,
  SettingsOutlined,
  LayersOutlined,
  DoorSlidingOutlined,
} from "@mui/icons-material";

const services = [
  {
    title: "Aluminum Work",
    description: [
      "Aluminum Window Fitting (Sliding, Casement, and Fixed)",
      "Aluminum Door Installation",
      "Customized Aluminum Frames",
    ],
    icon: <WindowOutlined style={{ fontSize: 50, color: "#3498db" }} />,
  },
  {
    title: "Glass Fitting",
    description: [
      "Single and Double-Glazed Glass Installation",
      "Laminated Glass Fitting",
      "Glass Partitions and Dividers",
      "Mirrors and Decorative Glass Installation",
    ],
    icon: <BuildOutlined style={{ fontSize: 50, color: "#e67e22" }} />,
  },
  {
    title: "Glass Fronts",
    description: [
      "Shop and Office Glass Front Installation",
      "Frameless Glass Doors",
      "Customized Glass Paneling for Exteriors",
    ],
    icon: <StorefrontOutlined style={{ fontSize: 50, color: "#2ecc71" }} />,
  },
  {
    title: "Steel Work",
    description: [
      "Fabrication of Steel Frames for Glass",
      "Steel Structure Support for Glass Installations",
      "Custom Steel Designs for Doors and Windows",
    ],
    icon: <LayersOutlined style={{ fontSize: 50, color: "#9b59b6" }} />,
  },
  {
    title: "UPVC Windows and Doors",
    description: [
      "UPVC Window Installation (Sliding, Casement, and Fixed)",
      "UPVC Door Installation",
      "Energy-Efficient and Durable UPVC Frames",
    ],
    icon: <DoorSlidingOutlined style={{ fontSize: 50, color: "#f39c12" }} />,
  },
  {
    title: "Specialized Services",
    description: [
      "Double-Glazing for Noise and Thermal Insulation",
      "Emergency Glass Replacement and Repairs",
      "Frosted and Tinted Glass Installation",
      "Shower Enclosures and Bathroom Glass Solutions",
    ],
    icon: <SettingsOutlined style={{ fontSize: 50, color: "#f1c40f" }} />,
  },
];

const ServicesSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f9f9", py: 5, px: 2 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, color: "#2c3e50" }}>
        Our Services
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 5, color: "#7f8c8d", maxWidth: "700px", mx: "auto" }}
      >
        Labbyk Glass and Aluminium Inc. specializes in providing high-quality
        aluminum, glass, and UPVC solutions. Explore our wide range of services below:
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                minHeight: 300,
                boxShadow: 3,
                "&:hover": { transform: "scale(1.05)", transition: "0.3s" },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" sx={{ color: "#34495e", mb: 2 }}>
                  {service.title}
                </Typography>
                <ul style={{ paddingLeft: 20, color: "#7f8c8d" }}>
                  {service.description.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
