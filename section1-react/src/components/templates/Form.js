import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
} from "@mui/material";

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
    <Container>
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
        />
        <Box sx={{ width: "100%", mt: 2 }}>
          <InputLabel id="demo-simple-select-label">年齢</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={form.age}
            name="age"
            onChange={handleInputChange}
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
              defaultValue="女性"
              name="radio-buttons-group"
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
        />
        <br />
        <label htmlFor="name">
          名前
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label htmlFor="age">
          年齢
          <select
            name="age"
            id="age"
            value={form.age}
            onChange={handleInputChange}
            fullWidth
          >
            <option value={10}>10代</option>
            <option value={20}>20代</option>
            <option value={30}>30代</option>
            <option value={40}>40代</option>
            <option value={50}>50代</option>
          </select>
        </label>
        <br />
        <label htmlFor="gender">
          性別
          <input
            id="male"
            name="gender"
            type="radio"
            value="male"
            onChange={handleInputChange}
          />
          男性
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            onChange={handleInputChange}
          />
          女性
          <input
            id="other"
            name="gender"
            type="radio"
            value="other"
            onChange={handleInputChange}
          />
          その他
        </label>
        <br />
        <label htmlFor="comment">
          コメント
          <textarea
            name="comment"
            placeholder="コメントを入れてください"
            value={form.comment}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <p>確認用</p>
        <p>名前：{form.name}</p>
        <p>年齢：{form.age}</p>
        <p>性別：{form.gender}</p>
        <p>備考：{form.comment}</p>
        <br />
        <button onClick={handleSubmit}>送信</button>
        <br />
        <Link to="/result">結果頁へ</Link>
      </Box>
    </Container>
  );
};
export default Form;
