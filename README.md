## 과제 수행 및 제출 방법

```
KDT기수번호_이름  |  E.g, KDT0_ParkYoungWoong
```

1. 현재 저장소를 로컬에 클론(Clone)합니다.
1. 자신의 본명으로 브랜치를 생성합니다.(구분 가능하도록 본명을 꼭 파스칼케이스로 표시하세요, `git branch KDT0_ParkYoungWoong`)
1. 자신의 본명 브랜치에서 과제를 수행합니다.
1. 과제 수행이 완료되면, 자신의 본명 브랜치를 원격 저장소에 푸시(Push)합니다.(`main` 브랜치에 푸시하지 않도록 꼭 주의하세요, `git push origin KDT0_ParkYoungWoong`)
1. 저장소에서 `main` 브랜치를 대상으로 Pull Request 생성하면, 과제 제출이 완료됩니다!(E.g, `main` <== `KDT0_ParkYoungWoong`)

- `main` 혹은 다른 사람의 브랜치로 절대 병합하지 않도록 주의하세요!
- Pull Request에서 보이는 설명을 다른 사람들이 이해하기 쉽도록 꼼꼼하게 작성하세요!
- Pull Request에서 과제 제출 후 절대 병합(Merge)하지 않도록 주의하세요!
- 과제 수행 및 제출 과정에서 문제가 발생한 경우, 바로 담당 멘토나 강사에서 얘기하세요!

## 요구사항

필수 요구사항은 꼭 달성해야 하는 목표로, 수정/삭제는 불가하고 추가는 가능합니다.  
선택 요구사항은 단순 예시로, 자유롭게 추가/수정/삭제해서 구현해보세요.  
각 요구사항은 달성 후 마크다운에서 `- [x]`로 표시하세요.

### ❗ 필수

- [x] 영화 제목으로 검색이 가능해야 합니다!
- [x] 검색된 결과의 영화 목록이 출력돼야 합니다!
- [x] 단일 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 볼 수 있어야 합니다!
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.

### ❔ 선택

- [x] 한 번의 검색으로 영화 목록이 20개 이상 검색되도록 만들어보세요.
- [x] 영화 개봉연도로 검색할 수 있도록 만들어보세요.
- [x] 영화 목록을 검색하는 동안 로딩 애니메이션이 보이도록 만들어보세요.
- [ ] 무한 스크롤 기능을 추가해서 추가 영화 목록을 볼 수 있도록 만들어보세요.
- [x] 영화 포스터가 없을 경우 대체 이미지를 출력하도록 만들어보세요.
- [x] 영화 상세정보가 출력되기 전에 로딩 애니메이션이 보이도록 만들어보세요.
- [x] 영화 상세정보 포스터를 고해상도로 출력해보세요. (실시간 이미지 리사이징)
- [ ] 차별화가 가능하도록 프로젝트를 최대한 예쁘게 만들어보세요.
- [ ] 영화와 관련된 기타 기능도 고려해보세요.
