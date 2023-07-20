// src/mocks/handlers.js
import { rest } from "msw";

const usersData = [
  {
    user_id: 1,
    user_name: "진원",
    user_email: "jinwon0@naver.com",
    password: "juwinwon987",
    phone_num: "010-1234-1234",
    user_photo:
      "jigeumbuteo_amumarina_haebodorok_hagessseupnida_ama_ige_siljerodo_jom_gilge_naol_geos_gataseo_gilge_hanbeon_sseoboassseupnida",
  },
  {
    user_id: 2,
    user_name: "유진",
    user_email: "yujin@naver.com",
    password: "yujin123",
    phone_num: "010-9876-9876",
    user_photo:
      "amumarina_haebodorok_hagessseupnida_ama_ige_siljerodo_jom_gilge_naol_geos_gataseo_gilge_hanbeon_sseoboassseupnida",
  },
];

const handlers = [
  rest.get("/api/products", (req, res, ctx) => {
    const errorCode = req.url.searchParams.get("error_code");

    if (errorCode) {
      return res(ctx.status(Number(errorCode)));
    }

    return res(
      ctx.status(200),
      ctx.delay(4000),
      ctx.json({
        items: [{ name: "product-1" }, { name: "product-2" }],
      })
    );
  }),

  rest.get("/api/v1/users/info/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    const user = usersData.find((user) => user.user_id === Number(userId));

    if (!user) {
      return res(ctx.status(404));
    }

    return res(
      ctx.status(200),
      ctx.json({
        message: "유저정보 불러오기 성공",
        result: user,
      })
    );
  }),
];

export default handlers;
