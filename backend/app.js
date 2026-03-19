require("dotenv").config();

const PORT = process.env.PORT || 3005;
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const db = require("./db");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");


app.use(express.static('uploads'));


const corsOptions = {
  origin: true,
};

app.use(cors(corsOptions));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // point to the front url
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    // console.log(Object.keys(data.id));
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    // console.log("cheeeccccccking send_message",data);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../frontend/build")));

const usersRouter = require("./routes/users");
const testsRouter = require("./routes/tests");
const dashboardRouter = require("./routes/dashboard");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");
const messageRouter = require("./routes/message");
const questionsRouter = require("./routes/questions");
const appointmentsRouter = require("./routes/appointments");
const bookingRouter = require("./routes/booking");
const deleteRouter = require("./routes/delete");
const editRouter = require("./routes/edit");
const examRouter = require("./routes/exam");
const uploadRouter = require("./routes/upload")
const forgotRouter = require("./routes/forgot")
const changeRouter = require("./routes/change")
const addExamRouter = require("./routes/addExam")
const viewStudentRouter = require("./routes/viewStudent")
const viewProctorRouter = require("./routes/viewProctor")
const deleteUserRouter = require("./routes/deleteUser")
const getTestRouter = require("./routes/getTest")

app.use("/api/users", usersRouter(db));
app.use("/api/tests", testsRouter(db));
app.use("/api/dashboard", dashboardRouter(db));
app.use("/api/login", loginRouter(db));
app.use("/api/logout", logoutRouter(db));
app.use("/api/upload", uploadRouter(db));
app.use("/api/register", registerRouter(db));
app.use("/api/message", messageRouter(db));
app.get("/api/authentication"); // how do you kow if the user is logged in if you need to refresh?
app.use("/api/questions", questionsRouter(db));
app.use("/api/appointments", appointmentsRouter(db));
app.use("/api/booking", bookingRouter(db));
app.use("/api/delete", deleteRouter(db));
app.use("/api/edit", editRouter(db));
app.use("/api/exam", examRouter(db));
app.use("/api/forgot", forgotRouter(db))
app.use("/api/change", changeRouter(db))
app.use("/api/addExam", addExamRouter(db))
app.use("/api/viewProctor", viewProctorRouter(db))
app.use("/api/viewStudent", viewStudentRouter(db))
app.use("/api/deleteUser", deleteUserRouter(db))
app.use("/api/getTest", getTestRouter(db))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
