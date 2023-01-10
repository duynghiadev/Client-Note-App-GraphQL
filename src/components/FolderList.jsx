import { Box, Card, CardContent, List, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function FolderList({ folders }) {
  const { folderId } = useParams();
  const [activeFolderId, setActiveFolderId] = useState(folderId);

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "#7D9D9C",
        height: "100%",
        padding: "10px",
        textAlign: "left",
        overflow: "auto",
      }}
      subheader={
        <Box>
          <Typography sx={{ fontWeight: "bold", color: "white" }}>
            Folders
          </Typography>
        </Box>
      }
    >
      {folders.map(({ id, name }) => {
        return (
          <Link
            key={id}
            to={`folders/${id}`}
            style={{
              textDecoration: "none",
            }}
            onClick={() => setActiveFolderId(id)}
          >
            <Card
              sx={{
                mb: "5px",
                backgroundColor:
                  id === activeFolderId ? "rgb(255 211 140)" : null,
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": { paddingBottom: "10px" },
                  padding: "10px",
                }}
              >
                <Typography sx={{ fontSize: 16, fontWeight: "bold" }}>
                  {name}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </List>
  );
}
