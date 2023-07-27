// RelationGraph 컴포넌트를 가져옵니다.
import RelationGraph from "../../components/relation/RelationGraph";

// RelationPage는 RelationGraph 컴포넌트를 표시하는 페이지 컴포넌트입니다.
const RelationPage = () => {
  return (
    <div>
    {/* // flex, items-center, justify-center를 사용하여 RelationGraph를 화면 중앙에 배치합니다.
    // w-screen, h-screen을 사용하여 페이지가 전체 화면을 차지하도록 합니다. */}
    <div className="flex items-center justify-center w-screen h-screen">
      <RelationGraph />
    </div>
    </div>
  );
};

// RelationPage 컴포넌트를 내보냅니다. 이를 통해 다른 파일에서 이 컴포넌트를 사용할 수 있습니다.
export default RelationPage;
