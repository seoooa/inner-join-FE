import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../common/ui";
import { useEffect, useState } from "react";
import { PositionModal } from "../components";
import { ApplicantPage } from "../page";

export const RecruitmentPage = () => {
  const { clubId } = useParams<Record<string, string>>();
  const navigate = useNavigate();
  const [positions, setPositions] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const mockPositions = ["디자이너", "프론트 개발자", "백엔드 개발자"];
    setPositions(mockPositions);
  }, []);

  const closeModal = () => setIsModalOpen(false);

  const handlePositionSelect = (position: string) => {
    closeModal();
    navigate(`/application/${clubId}`, { state: { position } });
  };

  return (
    <ApplicantPage>
      {clubId}
      <Button label="지원하기" onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <PositionModal
          closeModal={closeModal}
          positions={positions}
          onSelect={handlePositionSelect}
        />
      )}
    </ApplicantPage>
  );
};
