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
            if (state?.message)
                messageApi.error(state?.message)
            if (state?.code === 401) {
                logoutFx()
            }
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
