import { useEffect } from "react";

export const buildTitle = (subTitle: string) => "TruPlay | " + subTitle;

export const useTitle = (subTitle: string) => {
  useEffect(() => {
    document.title = buildTitle(subTitle);
  }, [subTitle]);
};
