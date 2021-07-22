import { Button } from "@material-ui/core";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guests</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">숙소 유형</Button>
        <Button variant="outlined">요금</Button>
        <Button variant="outlined">침실과 침대</Button>
        <Button variant="outlined">출장</Button>
        <Button variant="outlined">필터 추가하기</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c32e84f8-77c4-442c-8d11-566835f3412c.jpg?im_w=960"
        location="종로"
        title="Jongno jeje'House"
        description="최대인원 2명, 침실 1개, 침대 1개, 욕실 1개, 주방, 무선 인터넷, 에어컨, 헤어드라이어"
        star={4.74}
        price="₩50000 / night"
        total="₩150000 / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/3dfeacd4-bea8-4c2e-820f-bf61f8053323.jpg?im_w=960"
        location="충무로"
        title="Myeongdong"
        description="최대인원 3명, 침실 1개, 침대 2개, 욕실 1개, 주방, 무선 인터넷, 에어컨, 헤어드라이어"
        star={4.54}
        price="₩40000 / night"
        total="₩130000 / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-49694087/original/581a9a72-f86b-4aca-b26c-20385342a06c.jpeg?im_w=960"
        location="홍대"
        title="Big Private room with bathroom"
        description="최대인원 1명, 침실 1개, 침대 1개, 욕실 1개, 주방, 무선 인터넷, 에어컨"
        star={4.3}
        price="₩30000 / night"
        total="₩115000 / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/miso/Hosting-40583316/original/c6274a25-c531-4e2b-95fd-d453d45f8cbe.jpeg?im_w=960"
        location="중구"
        title="T4 프라이빗 모임 + 감성 in 명동 (방역, 소독)"
        description="최대인원 3명, 침실 1개, 침대 3개, 욕실 1개, 주방, 무선 인터넷, 에어컨, 헤어드라이어"
        star={4.59}
        price="₩55000 / night"
        total="₩170000 / total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/1d592723-c46a-429c-b30d-c34bdfe363a3.jpg?im_w=960"
        location="마포"
        title="복층 지하철3분"
        description="최대인원 3명, 침실 1개, 침대 1개, 욕실 1개, 주방, 무선 인터넷, 에어컨, 헤어드라이어"
        star={5.0}
        price="₩50000 / night"
        total="₩150000 / total"
      />
    </div>
  );
}

export default SearchPage;
