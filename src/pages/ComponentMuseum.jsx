import { Link } from 'react-router-dom';
import ReviewItem from '../components/common/ReviewItem';
import MallangItem from '../components/common/MallangItem';
import ArticleItem from '../components/common/ArticleItem';
import ModalInstruction from '../components/common/ModalInstruction';
import ReviewTotalScore from '../components/common/ReviewTotalScore';
import ModalSectionTitle from '../components/common/ModalSectionTitle';
import ModalDateSeparator from '../components/common/ModalDateSeparator';
import ModalFormInput from '../components/common/ModalFormInput';
import ReplyItem from '../components/common/ReplyItem';
import StarRating from '../components/common/StarRating';
import ChatItem from '../components/common/ChatItem';
import ThreadItem from '../components/common/ThreadItem';
import ImageGallery from '../components/common/ImageGallery';
import MultipleImageUploader from '../components/common/MultipleImageUploader';

const ComponentMuseum = () => {
    const tempListContainer = {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: '.8rem',
        marginBlockStart: '1.2rem',
        padding: '.8rem',
        border: '1px solid rgb(var(--clr-text) / .15)',
        borderRadius: 'var(--rad-lg)',
        backgroundColor: 'rgb(var(--clr-white))',
    };

    return (
        <aside className="inner-wrapper">
            <div style={tempListContainer}>
                <h5>
                    컴포넌트↗ 박물관에↘ 당도한 것을→ 환영하오↘ 낯↘선↗이여↘
                </h5>

                <p>
                    <Link to="/login">로그인 테스트 페이지</Link>
                </p>

                <p>
                    <Link to="/register">회원가입 테스트 페이지</Link>
                </p>

                <p>
                    <Link to="/whatthehellisgoingonhere">
                        에러 테스트 페이지
                    </Link>
                </p>
            </div>

            <div style={tempListContainer}>
                <h5>이미지 업로더 컴포넌트</h5>

                <MultipleImageUploader />
            </div>

            <div style={tempListContainer}>
                <h5>이미지 갤러리 컴포넌트</h5>

                <ImageGallery />
            </div>

            <div style={tempListContainer}>
                <h5>채팅 컴포넌트</h5>

                <ModalDateSeparator />

                <ChatItem chatContent="맘에 없는 그런 말하고 돌아서면 더 힘들지 그런 건 너무 가슴이 아파 아무 말도 할 수 없는 오늘은 길었던 하루가 다 지나도 뭘 했는지도 모르겠어 그래 이런 건 너무 마음이 아파 아무 것도 할 수 없는 오늘은 있잖아 내가 만약에 내가 너에게 가슴 아픈 말을 했다면 잊어줘 미안해 내가 그러려던 건 아니었는데 하고 전화를 할까 말까" />

                <ChatItem
                    chatFrom="opposite"
                    chatContent="요즘 drowning 이라는 노래를 하루에 10000번 듣고 있음. 그거랑 이호광의 롤라,, 마약이야 진짜,, 롤~~~라~~~~ ㅋㅋㅋㅋㅋㅋ 개웃김 진짜ㅠㅠ"
                />
            </div>

            <div style={tempListContainer}>
                <h5>기타 컴포넌트</h5>

                <ModalInstruction
                    index={0}
                    instEmoji="⚠️"
                    instHeadline="앗!"
                    instContent="무언가 신묘한 기분이 든다"
                />

                <StarRating />

                <StarRating currentPoint={5} isClickable={false} />
            </div>

            <div style={tempListContainer}>
                <h5>글타래 컴포넌트</h5>

                <ThreadItem />

                <ThreadItem
                    index={1}
                    threadType="rescue"
                    threadState="expired"
                />

                <ThreadItem index={2} threadType="missing" threadState="done" />

                <ThreadItem
                    index={3}
                    threadType="others"
                    threadState="hidden"
                />
            </div>

            <div style={tempListContainer}>
                <h5>내 게시물 컴포넌트</h5>

                <ArticleItem index={1} />

                <ArticleItem index={2} isEditMode={true} />
            </div>

            <div style={tempListContainer}>
                <h5>말랑이 컴포넌트</h5>

                <ModalSectionTitle sectionTitle="대표 말랑이" />

                <MallangItem />

                <ModalSectionTitle sectionTitle="다른 말랑이들" />

                <MallangItem />

                <MallangItem />

                <MallangItem />

                <MallangItem isEditMode={true} />
            </div>

            <div style={tempListContainer}>
                <h5>리뷰 컴포넌트</h5>

                <ReviewTotalScore
                    reviewTarget="김씨마구로"
                    reviewScoreEverage={4.3}
                    reviewCount={12345}
                />

                <ReviewItem index={1} />

                <ReviewItem index={2} />

                <ReviewItem index={3} />

                <ReviewItem
                    index={4}
                    isEditMode={true}
                    userObject={{
                        userID: 2,
                        userImage: 'https://picsum.photos/24/24?random=1',
                        userName: '정발산기슭곰발냄새타령부인사잘해',
                    }}
                    reviewImage={'https://picsum.photos/1920/1080'}
                    reviewContent={'인사자뢔'}
                    starPoint={4.2}
                    writtenDate="2024-12-24 21:31"
                />

                <ModalFormInput />
            </div>

            <div style={tempListContainer}>
                <h5>댓글 컴포넌트</h5>

                <ReplyItem />

                <ReplyItem />

                <ReplyItem />

                <ReplyItem
                    index={1}
                    replyContent="이것이 나의 진심 댓글이다"
                    writtenDateTime="2024-12-24 21:31"
                    isMyReply={true}
                    isEditMode={true}
                />

                <ModalFormInput isIncludeImage={false} />
            </div>
        </aside>
    );
};

export default ComponentMuseum;
