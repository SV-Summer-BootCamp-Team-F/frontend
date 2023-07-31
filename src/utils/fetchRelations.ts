// utils/fetchRelations.ts
import axios from "axios";
import { NodeType, LinkType, RelationType } from "../types/types";

// Mock 데이터 정의
const mockData = {
  nodes: [
    {
      user_uid: "100",
      friend_uid: "1",
      card_name: "동열",
      user_photo: "photo_link",
      relation_name: "지인",
    },
    {
      user_uid: "1",
      friend_uid: "4",
      card_name: "아정",
      user_photo: "photo_link",
      relation_name: "친구",
    },
    {
      user_uid: "4",
      friend_uid: "5",
      card_name: "민수",
      user_photo: "photo_link",
      relation_name: "가족",
    },
    {
      user_uid: "5",
      friend_uid: "6",
      card_name: "수지",
      user_photo: "photo_link",
      relation_name: "친구",
    },
    {
      user_uid: "6",
      friend_uid: "7",
      card_name: "윤성",
      user_photo: "photo_link",
      relation_name: "친구",
    },
    {
      user_uid: "7",
      friend_uid: "8",
      card_name: "석진",
      user_photo: "photo_link",
      relation_name: "직장 동료",
    },
    {
      user_uid: "8",
      friend_uid: "100",
      card_name: "경수",
      user_photo: "photo_link",
      relation_name: "직장 동료",
    },
  ],
  links: [
    {
      source: "100",
      target: "1",
    },
    {
      source: "100",
      target: "4",
    },
    {
      source: "100",
      target: "5",
    },
    {
      source: "100",
      target: "6",
    },
    {
      source: "100",
      target: "7",
    },
    {
      source: "7",
      target: "8",
    },
    {
      source: "8",
      target: "100",
    },
  ],
};

export const fetchRelations = async (): Promise<RelationType> => {
  const user_uid = localStorage.getItem("user_uuid"); // localStorage에서 user_uuid를 가져옵니다.

  try {
    const response = await axios.get(`http://localhost:8000/api/v1/relations/all/${user_uid}`);
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
    console.error(`Error fetching relations for user ${user_uid}: ${error}`);
    console.log("Mock data will be used instead.");
    console.log(mockData);
    return mockData;
  }
};
