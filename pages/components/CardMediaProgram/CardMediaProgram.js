import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import React from "react";
import Image from "next/image";
import { Box, Chip, Grid, Stack } from "@mui/material";

export default function CardMediaProgram({
  ImageSrc,
  altImage,
  title,
  description,
  link,
  code,
  techUsedArray,
}) {
  return (
    <Card sx={{ position: "relative", marginY: 1 }}>
      <Box>
        <Image
          className="apps-images"
          src={ImageSrc}
          alt={altImage}
          width={560}
          height={560}
        />
      </Box>

      <CardContent>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack>
            <div className="media-card">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color={"black"}
              >
                {title}
              </Typography>
            </div>
            <div className="media-card">
              <Typography variant="body2" color={"black"} noWrap width={"80%"}>
                {description}
              </Typography>
            </div>
          </Stack>

          <Stack
            flexDirection={"row"}
            alignItems={"flex-end"}
            justifyContent={"flex-end"}
            height={"100%"}
            bgcolor={"#202124"}
          >
            <Button variant="filed" size="small" target="_blank" href={link}>
              View
            </Button>
            {/* <Button variant="filed" size="small" target="_blank" href={code}>
              Code
            </Button> */}
          </Stack>
        </Stack>
      </CardContent>
      <CardActions>
        <Grid container mx={2}>
          <Grid item xs={12} md={12}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color={"black"}
              borderTop={"2px solid"}
              textAlign={"end"}
            >
              Technology I used
            </Typography>

            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              {techUsedArray?.map((tech) => (
                <Chip
                  label={tech}
                  sx={{ backgroundColor: "#202124" }}
                  key={tech}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
