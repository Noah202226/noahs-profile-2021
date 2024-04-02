import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Contact = () => {
  const formRef = useRef();

  const [isSending, setIsSending] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        setIsSending(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Grid
      container
      sx={{
        bgcolor: "var(---div-title-bg)",
        color: "var(---font-color)",
      }}
    >
      <Grid item xs={12} md={5} bgcolor={"cyan"}>
        <Stack
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          p={{ xs: 2, md: 3 }}
        >
          <Image src={"/email.svg"} alt="image" width={120} height={120} />
          <Typography
            variant="body"
            sx={{
              fontSize: { xs: 36, md: 28, lg: 22 },
              my: { xs: 5, md: 0 },
              alignItems: 'end',
              justifyContent: 'end'
            }}
          >
            Contact: 09456738504
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontSize: { xs: 36, md: 28, lg: 22 },
              my: { xs: 5, md: 0 },
              alignItems: 'self-start',
              justifyContent: 'start'
            }}
          >
            Email: noaligpitan@gmail.com
          </Typography>
          <Typography
            variant="body"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: 36, md: 28, lg: 16 },
              my: { xs: 5, md: 2 },
            }}
          >
            If you have questions and want to get in touch, use the form. I will
            appreciate your message and will response as soon as possible. Thank
            you.
          </Typography>

          
        </Stack>
      </Grid>

      <Grid item xs={12} md={7} p={"1rem"}>
        <Typography
          variant="h6"
          textAlign={"center"}
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontSize: { xs: 36, md: 28, lg: 46 },
            fontFamily: "Lato, sans-serif",
            my: { xs: 0, md: 2 },
            // fontStyle: "italic",
          }}
        >
          Send me a message:
        </Typography>

        <form ref={formRef} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item container md={12} spacing={3}>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Your name"
                  name="user_name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <TextField
                  label="Email"
                  name="user_name"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                label="Message"
                multiline
                name="message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  padding: 1,
                  width: { xs: "100%", md: "200px" },
                  textAlign: { xs: "center", md: "left" },
                  fontSize: { xs: 26, md: 28, lg: 30 },
                  fontFamily: "Lato, sans-serif",
                  fontWeight: { xs: "bold", md: "normal" },
                }}
              >
                {isSending ? "Sending ..." : "Submit"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Snackbar
        open={isSending}
        autoHideDuration={6000}
        message="Message sent!"
      >
        <Alert severity="success">Message sent completed. Thanks!</Alert>
      </Snackbar>
    </Grid>
  );
};

export default Contact;
