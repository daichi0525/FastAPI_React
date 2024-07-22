import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    age: "",
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

  const goToResult = () => {
    navigate("/result");
  };

  const handleSubmit = (event) => {
    goToResult();
  };

  return (
    <>
      <form>
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
      </form>
      <p>確認用</p>
      <p>{form.name}</p>
      <p>{form.age}</p>
      <p>{form.gender}</p>
      <p>{form.comment}</p>
      <br />
      <button onClick={handleSubmit}>送信</button>
      <br />
      <Link to="/result">結果頁へ</Link>
    </>
  );
};
export default Form;
