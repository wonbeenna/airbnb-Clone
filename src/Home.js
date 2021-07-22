import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                    title="자연생활을 만끽할 수 있는 숙소"
                    description="물놀이 가능한 예쁜 숙소 / 침실 / 캠핑 / 바베큐 / 휴가"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                    title="독특한 공간의 숙소"
                    description="바다위에 있는 숙소 / 힐링"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480"
                    title="온라인 체험"
                    description="호스트와 실시간으로 소통하면서 액티비티를 즐겨보세요"
                />
            </div>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/ccf7ecef-2801-4b8e-9a57-bf4b0d1dceb5.jpg?im_w=960"
                    title="홍대의 아름다운 렌탈집!"
                    description="최대 인원 3명, 침실 1개, 침대 2개, 욕실 1개, 주방, 무선 인터넷, 에어컨, 헤어드라이어"
                    price="₩50000/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/d9fb7454-fd02-4faf-8712-aa1f84f0f60f.jpg?im_w=960"
                    title="Clean & cozy room right"
                    description="최대 인원 2명, 침실 1개, 침대 1개, 욕실 1개, 주방, 무선 인터넷, 에어컨"
                    price="₩45000/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/c36bc194-b867-47a9-b760-a91d06a920b1.jpg?im_w=960"
                    title="한강 정면뷰#일몰#일출# 유니크한 인테리어#지하주차# 파티룸"
                    description="최대 인원 2명, 침실 1개, 침대 1개"
                    price="₩55000/night"
                />
            </div>
        </div>
    )
}

export default Home
