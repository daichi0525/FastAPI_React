import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "10",
    gender: "",
    comment: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    console.log({ ...form });
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();

  const goToResult = (form) => {
    navigate("/result", { state: form });
  };

  const handleSubmit = (event) => {
    goToResult(form);
  };

  return (
    <Container maxWidth="xs">
      {/* <Box sx={{ p: 2, border: "1px dashed grey" }}> */}
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color={"red"}>
          アンケート提出
        </Typography>
        <TextField
          id="outlined-basic"
          label="名前"
          variant="outlined"
          value={form.name}
          onChange={handleInputChange}
          fullWidth
          name="name"
        />
        <Box sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-simple-select-label">年齢</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.age}
            name="age"
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value={10}>10代</MenuItem>
            <MenuItem value={20}>20代</MenuItem>
            <MenuItem value={30}>30代</MenuItem>
          </Select>
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel>
          <Box sx={{ border: 1, borderRadius: 1, borderColor: "grey.400" }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="女性"
              />
              <FormControlLabel value="male" control={<Radio />} label="男性" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="その他"
              />
            </RadioGroup>
          </Box>
        </Box>
        <TextField
          id="outlined-basic"
          label="コメント"
          variant="outlined"
          onChange={handleInputChange}
          value={form.comment}
          fullWidth
          sx={{ mt: 2 }}
          name="comment"
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmit}
          sx={{ mt: 2 }}
          fullWidth
        >
          {/* README参照：yarn add @mui/icons-material */}
          送信
        </Button>
      </Box>
    </Container>
  );
};
export default Form;
