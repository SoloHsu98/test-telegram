"use client";

import { LoginButton } from "@telegram-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
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

  useEffect(() => {
    // Get the button element by its ID
    var button = document.getElementById("widget_login");

    console.log("button", button);
    // Remove all children nodes from the button
    // while (button?.firstChild) {
    //   button?.removeChild(button.firstChild);
    // }
  }, []);
  return (
    <div className="p-4 bg-white">
      {/* <button
        type="button"
        onClick={handleLogin}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login hello
      </button> */}
      <div className="wrapper">
        <LoginButton
          usePic={false}
          botUsername="solo_telegram_bot"
          onAuthCallback={(data) => {
            console.log(data);
            // call your backend here to validate the data and sign in the user
          }}
        />
        <SocialIcon
          network="telegram" // Pass the social URL dynamically
          label="social url"
          className="cursor-pointer"
          fgColor="#ffffff"
          style={{
            height: 50,
            width: 50,
            zIndex: 1,
            position: "absolute",
          }}
          botUsername="solo_telegram_bot"
          onAuthCallback={(data) => {
            console.log(data);
            // call your backend here to validate the data and sign in the user
          }}
        >
          <LoginButton
            className="first-btn"
            usePic={false}
            botUsername="solo_telegram_bot"
            onAuthCallback={(data) => {
              console.log(data);

              // call your backend here to validate the data and sign in the user
            }}
          />
        </SocialIcon>
      </div>
      <div className="wrapper">
        <TelegramLoginButton
          dataOnauth={handleTelegramResponse}
          botName="solo_telegram_bot"
          className="sec-btn"
        />

        {/* <SocialIcon
          network="telegram" // Pass the social URL dynamically
          label="social url"
          className="cursor-pointer z-1"
          fgColor="#ffffff"
          style={{
            width: "50px",
            height: "30px",
            position: "absolute",
            zIndex: 1,
            top: "0",
            left: "0",
          }}
        /> */}
      </div>
    </div>
  );
};

export default TestPage;
