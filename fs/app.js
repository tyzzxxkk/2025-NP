const express = require("express");
const app = express();

// ① GET /hello → "안녕하세요~"
app.get("/hello", (req, res) => {
  res.send("안녕하세요~");
});

// ② GET /square/:num → 제곱값 출력
app.get("/square/:num", (req, res) => {
  const num = Number(req.params.num);
  const result = num * num;
  res.send(`정답은 ${result}입니다.`);
});

// ③ GET /greet?name=김윤지 → “김윤지님 안녕하세요!”
app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`${name}님 안녕하세요!`);
});

// ④ GET /shop/:category/:itemid
//    detail=Y 일 때 가격도 출력
app.get("/shop/:category/:itemid", (req, res) => {
  const { category, itemid } = req.params;
  const detail = req.query.detail;

  if (detail === "Y") {
    res.send(`카테고리 : ${category}, 상품번호 : ${itemid} 1000원입니다.`);
  } else {
    res.send(`카테고리 : ${category}, 상품번호 : ${itemid}`);
  }
});

// 서버 실행
app.listen(3000, () => {
  console.log("서버가 3000번 포트에서 실행 중입니다!");
});
