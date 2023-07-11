import { DraggableContainer } from "../../components/containers/DraggableContainer";

const RelationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <DraggableContainer>
        <div className=" p-4 bg-gray-200 rounded shadow">this is draggable</div>
      </DraggableContainer>
    </div>
  );
};

export default RelationPage;
