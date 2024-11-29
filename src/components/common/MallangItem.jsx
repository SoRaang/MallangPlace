import Remix from './Remix';

const MallangItem = ({ mallangObject, isEditMode = false }) => {
    return (
        <div className="mallang-item">
            <div className="mallang-image-container">
                {mallangObject.petImage ? (
                    <img
                        className="mallang-image"
                        src={mallangObject.petImage}
                        alt="말랑이 사진"
                    />
                ) : (
                    <img
                        className="mallang-image non-exist"
                        src="/src/assets/images/placeholder-paw.png"
                        alt="말랑이 사진이 존재하지 않습니다."
                    />
                )}
            </div>

            <dl className="mallang-item-descriptions">
                <dt className="mallang-item-name-container">
                    {mallangObject.isMain && (
                        <p className="mallang-main-indicator">
                            {mallangObject.isMain && '대표'}
                        </p>
                    )}

                    <h5 className="mallang-name">
                        <marquee>
                            <span>{mallangObject.petName ?? '이름 없음'}</span>
                        </marquee>
                    </h5>

                    {isEditMode && (
                        <button type="button" className="button-mallang-config">
                            <Remix iconName={'settings-3-fill'} />
                        </button>
                    )}
                </dt>

                <dd className="mallang-item-summary">
                    <Remix iconName={'search-eye-line'} />
                    <p>{mallangObject.petType ?? '알 수 없음'}</p>
                    <span>·</span>
                    <p>{mallangObject.petAge ?? 0}세</p>
                    <span>·</span>
                    <p>{mallangObject.petGender ?? '알 수 없음'}</p>
                </dd>
            </dl>
        </div>
    );
};

export default MallangItem;
