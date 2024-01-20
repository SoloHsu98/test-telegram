"use client";

import { LoginButton } from "@telegram-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import TelegramLoginButton from "react-telegram-login";
const TestPage = () => {
  const router = useRouter();

  const handleLogin = async () => {
    // await login();
    router.push("tg://user?id=1621433445");
  };
  // const validator = new AuthDataValidator({
  //   botToken: "6379860500:AAF87f4STd4KT0lC0fHJ5hgDHTzVlYRHt3U",
  // });

  // const data = urlStrToAuthDataMap(request.url);

  // try {
  //   const user = validator.validate(data);

  //   // The data is now valid and you can sign in the user.

  //   console.log(user);
  // } catch (error) {
  //   console.error(error);
  // }
  const handleTelegramResponse = (response) => {
    console.log(response);
  };

  // useEffect(() => {
  //   // Get the button element by its ID
  //   var button = document.getElementsByClassName("tgme_widget_login_button");

  //   // Remove all children nodes from the button
  //   while (button?.firstChild) {
  //     button?.removeChild(button.firstChild);
  //   }
  // }, []);
  return (
    <div className="p-4 bg-white">
      {/* <button
        type="button"
        onClick={handleLogin}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login hello
      </button> */}

      <LoginButton
        usePic={false}
        botUsername="college_dao_bot"
        onAuthCallback={(data) => {
          console.log(data);
          // call your backend here to validate the data and sign in the user
        }}
      >
        <span>hello</span>
      </LoginButton>
      <TelegramLoginButton
        dataOnauth={handleTelegramResponse}
        botName="college_dao_bot"
      >
        <span>hello</span>
      </TelegramLoginButton>
    </div>
  );
};

export default TestPage;
