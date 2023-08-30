# svelte 입문 가이드
인프런 svelte.js 입문 가이드 강의를 참고하여 작성하였습니다.

## 📌 event_handling_practice.svelte

| 클릭 전 | 클릭 후 |
|:------:|:------:|
|<img width="300" alt="image" src="https://github.com/JooHyeonKim/svelte_study/assets/56497471/658957ba-62f3-46c4-af0d-3d739784ed2c">|<img width="300" alt="image" src="https://github.com/JooHyeonKim/svelte_study/assets/56497471/b052aeb1-539e-4f6f-86ed-1a31c8bcf720">|


## 📌 eventHandling _ mouseEnter & mouseLeave
- mouseenter_and_mouseleave.svelte
<img width="300" alt="image" src="https://github.com/JooHyeonKim/svelte_study/assets/56497471/a8d06e5f-433b-4d1a-accc-9fec2c7fa6cc">


## 📌 eventHandling _ bind: 양방향 데이터 전달
- eventHandling_bind.svelte
<img width="300" alt="image" src="https://github.com/JooHyeonKim/svelte_study/assets/56497471/22e78306-a0ff-40e9-829c-fb28da83ccef">

## 📌 Component
- App.svelte는 Fruits.svelte의 부모 컴포넌트
<img width="290" alt="image" src="https://github.com/JooHyeonKim/svelte_study/assets/56497471/94aab17f-9162-41d8-b0e9-80d2319efc7b">

## 📌 Store
App <br>
 |<br>
Parent<br>
 |<br>
Child
- App에서 Parent를 거쳐 Child로 데이터를 보내주는 것은 비효율적. 
- Store : APP -> Child로 직접 데이터를 전달할 수 있게 해줌.
- store는 객체이므로 변수로 사용하려면 $를 붙여줘야 함.






