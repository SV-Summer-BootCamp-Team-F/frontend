// utils/fetchRelations.ts
import axios from "axios";
import { NodeType, LinkType, RelationType } from "../types/types";

// Mock 데이터 정의
const mockData = {
  nodes: Array.from({ length: 20 }, (_, i) => ({
    user_uid: i === 0 ? "100" : String(i + 1),
    friend_uid: i === 19 ? "100" : String(i + 2),
    card_name: `사용자${i + 1}`,
    user_photo: `https://picsum.photos/200/200?random=${i + 1}`, // add random images
    relation_name: ["친구", "가족", "직장 동료", "지인"][Math.floor(Math.random() * 4)],
  })),
  links: Array.from({ length: 19 }, (_, i) => ({
    source: i === 0 ? "100" : String(i + 1),
    target: i === 18 ? "100" : String(i + 2),
  })).concat(
    Array.from({ length: 10 }, () => ({
      source: "100",
      target: String(Math.ceil(Math.random() * 19) + 1),
    }))
  ),
};

export const fetchRelations = async (): Promise<RelationType> => {
  const user_uuid = localStorage.getItem("user_uuid"); // localStorage에서 user_uuid를 가져옵니다.

  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/v1/relations/all/${user_uuid}/`);
    const result = response.data.result;

    const nodes: NodeType[] = [];
    const links: LinkType[] = [];

    result.forEach((relation: any) => {
      // 각 관계를 노드로 변환
      const node: NodeType = {
        user_uid: relation.user_uid,
        friend_uid: relation.friend_uid,
        card_name: relation.card_name,
        user_photo: relation.user_photo,
        relation_name: relation.relation_name,
      };
      console.log("node", node);
      nodes.push(node);

      // 관계를 링크로 변환
      const link: LinkType = {
        source: relation.user_uid,
        target: relation.friend_uid,
      };
      links.push(link);
    });

    return { nodes, links };
  } catch (error) {
    console.error(`Error fetching relations for user ${user_uuid}: ${error}`);
    console.log("Mock data will be used instead.");
    console.log(mockData);
    return mockData;
  }
};
