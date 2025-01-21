import { Box, ImageList, ImageListItem, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { imageList } from "./data";
import { imageListType } from "./types";
import Image from "next/image";
import { ArrowForward, ArrowBack } from "@mui/icons-material"; // For navigation arrows

const HomeProductsList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if it's a mobile screen

  return (
    <div className="w-full flex flex-col justify-center items-center text-[aliceblue] h-auto mt-14">
      {/* ImageList Component from MUI for the image display */}
      <ImageList
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          gap: 2, // Adds spacing between the items
        }}
        cols={isMobile ? 1 : 3} // Show 1 image per row on mobile, 3 on larger screens
        rowHeight={isMobile ? 200 : 300} // Adjust row height for mobile
      >
        {imageList.map((item: imageListType, index: number) => (
          <ImageListItem key={index} sx={{ position: "relative" }}>
            <Image
              src={item.imageUrl}
              alt={`Image ${item.id}`}
              className="object-cover"
              width={isMobile ? 320 : 300} // Adjust width for mobile screens
              height={isMobile ? 200 : 300} // Adjust height for mobile screens
              title={`Image ${item.id}`}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Optional: Arrow navigation for the slider */}
      {!isMobile && (
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <IconButton>
            <ArrowBack sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <IconButton>
            <ArrowForward sx={{ fontSize: 40, color: "white" }} />
          </IconButton>
        </Box>
      )}
    </div>
  );
};

export default HomeProductsList;
