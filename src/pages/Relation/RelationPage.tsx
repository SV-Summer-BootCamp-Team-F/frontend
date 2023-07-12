import DraggableContainer from "../../components/containers/DraggableContainer";

const RelationPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <DraggableContainer>
        <div className="w-full h-full p-4 bg-gray-200 rounded shadow">
          This is draggable and covers the entire screen!
        </div>
      </DraggableContainer>
    </div>
  );
};

export default RelationPage;
