import { useEffect } from "react";

export const buildTitle = (subTitle: string) => "TruPlay | " + subTitle;

export const useTitle = (subTitle: string) => {
  useEffect(() => {
    document.title = buildTitle(subTitle);
  }, [subTitle]);
};

export type FormValues = {
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
};
