// src/mocks/handlers.js
import { rest } from "msw";
import { UserProfilePropsType } from "../components/user/UserProfile";
import { CardInfoPropsType } from "../components/card/CardInfo";
const usersData = [
  {
    user_id: 1,
    user_name: "Jinwon",
    user_email: "jinwon0@naver.com",
    password: "juwinwon987",
    phone_num: "010-1234-1234",
    instroduction: "Hello, I'm Jinwon!",
    user_photo:
      "https://scontent-gmp1-1.xx.fbcdn.net/v/t1.6435-9/33644915_611600572507025_6634514494133370880_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=MVXfzeH_nOMAX_VA4dB&_nc_oc=AQk-NpsIMddvsYlqVN0u4lDpMeSH-iuP4PkTwbliHXyYq7kGw7OUNIXakcAEQWKzXRE&_nc_ht=scontent-gmp1-1.xx&oh=00_AfCwlgofJci9NDopdKSSTOf6avu1n4kTOHvy8_YJaGnTxQ&oe=64E0DDF9",
  },
  {
    user_id: 2,
    user_name: "Yujin",
    user_email: "yujin@naver.com",
    password: "yujin123",
    phone_num: "010-9876-9876",
    instroduction: "Hello, I'm Yujin!",
    user_photo:
      "https://mblogthumb-phinf.pstatic.net/MjAxNzEwMjlfMjI5/MDAxNTA5MjgyMzEzODE1.p1XqaXbPZtTTWjluUAnITK_tMoKLkLPCCHiz08MlPEkg.KMg4PxuW_I71dQ5w1hM54BMagZUjWsZ3pBk5tRMWxjEg.JPEG.lovelyse80/%EC%B9%B4%ED%86%A1%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B4%ED%94%84%EC%82%AC%EC%B6%94%EC%B2%9C%EA%B0%80%EC%9D%84%EB%B9%88%ED%8B%B0%EC%A7%80%EA%B0%90%EC%84%B1%EC%BB%A4%ED%94%BC%EA%B9%94%EB%81%94%ED%95%98%EA%B3%A0%EC%98%88%EC%81%9C%EB%B0%B0%EA%B2%BD%ED%99%94.jpg?type=w2",
  },
];

const cardsData = [
  {
    user_id: 1,
    card_name: "정진원",
    card_email: "jinwon0@naver.com",
    phone_num: "010-1234-1234",
    card_intro: "Hello, I'm Jinwon!",
    card_photo: "https://www.printrobo.co.kr/cdn/blog/870x531-pb10008.jpg",
  },
  {
    user_id: 2,
    card_name: "백유진",
    card_email: "yujin@naver.com",
    phone_num: "010-4567-4567",
    card_intro: "Hello, I'm Yujin!",
    card_photo:
      "https://img.freepik.com/free-psd/corporative-card_24972-818.jpg?w=1800&t=st=1689917501~exp=1689918101~hmac=c455579ec42572fd79c0cc81a7387f132dd63a399fcc7ae6d1699b15266ef352",
  },
];

const handlers = [
  rest.get("/api/v1/users/info/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    const user = usersData.find((user) => user.user_id === Number(userId));

    if (!user) {
      return res(ctx.status(404));
    }

    return res(
      ctx.status(201),
      ctx.json({
        message: "유저정보 불러오기 성공",
        result: user,
      })
    );
  }),

  rest.get("/api/v1/cards/info/:userId", (req, res, ctx) => {
    const { userId } = req.params;
    const card = cardsData.find((card) => card.user_id === Number(userId));

    if (!card) {
      return res(ctx.status(404));
    }

    return res(
      ctx.status(201),
      ctx.json({
        message: "명함정보 불러오기 성공",
        result: card,
      })
    );
  }),

  rest.put<UserProfilePropsType>("/api/v1/users/update/:userId", (req, res, ctx) => {
    const requestBody = req.body;
    const { userId } = req.params;

    const user = usersData.find((user) => user.user_id === Number(userId));

    if (!user) {
      return res(ctx.status(404), ctx.json({ message: "유저를 찾을 수 없습니다." }));
    }

    user.user_name = requestBody.name;
    user.user_email = requestBody.email;
    user.password = requestBody.passwd;

    return res(
      ctx.status(202),
      ctx.json({
        message: "유저정보 수정 성공",
      })
    );
  }),
];

export default handlers;
