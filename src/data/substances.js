export const substances = [
  {
    slug: "aurum-lacrima",
    name: "아우룸 라크리마",
    type: "액체형",
    danger: "고위험",
    status: "소량 확보",
    description:
      "금빛 눈물 형태의 초물질. 에고르의 흔적과 연결되는 것으로 추정. 자지맨의 능력 기원 조사 과정에서 반응 확인.",
    details: [
      { label: "외형", content: "금빛 액체. 빛을 받으면 내부에서 발광." },
      { label: "성질", content: "생명체 접촉 시 반응. 반응 양상은 개체마다 다름." },
      { label: "위험도", content: "고위험. 과다 접촉 시 정신 침식 보고 있음." },
      {
        label: "에고르와의 연결",
        content:
          "아우룸 라크리마 반응 추적 → 눈물의 이유 → 에고르 흔적 발견 순으로 연결.",
      },
      {
        label: "자지맨과의 연결",
        content: "자지맨 능력 기원 조사 중 아우룸 라크리마 반응 감지. 인과관계 조사 중.",
      },
    ],
  },
  {
    slug: "void-fragment",
    name: "보이드 프래그먼트",
    type: "고체형",
    danger: "중위험",
    status: "다수 확보",
    description:
      "심연층에서 채취 가능한 파편형 초물질. VOID COVENANT가 주로 활용하는 것으로 추정.",
    details: [
      { label: "외형", content: "검은 파편. 표면에 빛이 흡수됨." },
      { label: "성질", content: "심연 에너지를 압축한 형태로 추정. 불안정." },
      { label: "위험도", content: "중위험. 불안정 시 폭발 가능." },
      {
        label: "VOID COVENANT 연관",
        content: "V.C. 멤버 다수가 보유 중으로 추정. 입수 경로 불명.",
      },
    ],
  },
  {
    slug: "null-core",
    name: "널 코어",
    type: "에너지형",
    danger: "최고위험",
    status: "미확보 / 존재 추정",
    description:
      "근원층에서 발생하는 것으로 추정되는 초물질. 실체 미확인. EGO 내부 기밀 분류.",
    details: [
      { label: "외형", content: "관측 불가. 존재 자체가 주변 인식을 교란." },
      { label: "성질", content: "미확인. 이론상 물리 법칙 무효화 가능." },
      { label: "위험도", content: "최고위험. 접근 시도 기록 없음." },
      { label: "비고", content: "REDACTED 직군 전담 조사 항목." },
    ],
  },
];
