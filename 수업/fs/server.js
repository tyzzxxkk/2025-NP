const express = require("express");
const app = express();

// [1] 관리자 인증 미들웨어
function adminAuth(req, res, next) {
  const role = req.query.role;
  if (role !== "admin") {
    return res.status(403).send("관리자만 접근 가능합니다!");
  }
  console.log("관리자 인증 통과");
  next();
}

// [2] 특정 경로에만 미들웨어 적용
app.use("/admin", adminAuth);

// [3] 라우트들
app.get("/admin/dashboard", (req, res) => res.send("관리자 대시보드"));
app.get("/admin/users", (req, res) => res.send("관리자 사용자 관리"));
app.get("/", (req, res) => res.send("일반 사용자 페이지"));

app.listen(3000, () => console.log("http://localhost:3000"));