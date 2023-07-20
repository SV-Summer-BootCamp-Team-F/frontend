// src/mocks/handlers.js
import { rest } from "msw";

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

    // Replace the following placeholder data with actual user information
    const userProfile = {
      userId: "1",
      profilePictureUrl: "https://example.com/user-profile-picture.jpg",
      name: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "123-456-7890",
      passwd: "examplePassword123",
    };

    return res(ctx.status(200), ctx.json(userProfile));
  }),
];

export default handlers;
