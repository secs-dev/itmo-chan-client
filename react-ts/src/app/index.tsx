import React, {useEffect} from "react";
import { router } from "@/shared/routing";
import { RouterProvider } from "atomic-router-react";
import { Pages } from "@/pages";

import "./index.css";
import {$errorStore} from "@/shared/error";
import {message} from "antd";
import {logoutFx} from "@/features/auth";

export const App = () => {
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        $errorStore.watch(state => {
            if (state?.code === 401) {
                logoutFx()
                messageApi.error("Вы не авторизированны")
            }
            else
                if (state?.message)
                    messageApi.error(state?.message)
            })
    }, [])

  return (
    <React.StrictMode>
      <RouterProvider router={router}>
        {contextHolder}
        <Pages />
      </RouterProvider>
    </React.StrictMode>
  );
};
