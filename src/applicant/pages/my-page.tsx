import { ApplicantPage } from "../page";
import { MyApplicationStatusSection, MyInfoSection } from "../components";

export const MyPage = () => {
  return (
    <ApplicantPage>
      <MyInfoSection />
      <MyApplicationStatusSection />
    </ApplicantPage>
  );
};
