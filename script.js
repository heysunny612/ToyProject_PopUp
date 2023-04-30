const $body = document.body;
const $containerModal = document.querySelector('.container-modal');
const $modalBoxes = [];
const $modal = document.querySelector('.modal');

const movieInfoList = [
  {
    imgSrc: './images/movie1.jpg',
    title: '백두산 2019.12.19.',
    description:
      '대한민국 관측 역사상 최대 규모의 백두산 폭발 발생. 갑작스러운 재난에 한반도는 순식간에 아비규환이 되고, 남과 북 모두를 집어삼킬 추가 폭발이 예측된다. 사상 초유의 재난을 막기 위해 ‘전유경’(전혜진)은 백두산 폭발을 연구해 온 지질학 교수 ‘강봉래’(마동석)의 이론에 따른 작전을 계획하고, 전역을 앞둔 특전사 EOD 대위 ‘조인창’(하정우)이 남과 북의 운명이 걸린 비밀 작전에 투입된다. 작전의 키를 쥔 북한 무력부 소속 일급 자원 ‘리준평’(이병헌)과 접선에 성공한 ‘인창’. 하지만 ‘준평’은 속을 알 수 없는 행동으로 ‘인창’을 곤란하게 만든다. 한편, ‘인창’이 북한에서 펼쳐지는 작전에 투입된 사실도 모른 채 서울에 홀로 남은 ‘최지영’(배수지)은 재난에 맞서 살아남기 위해 고군분투하고 그 사이, 백두산 마지막 폭발까지의 시간은 점점 가까워 가는데…!',
  },
  {
    imgSrc: './images/movie2.jpg',
    title: '히말라야 2015.12.16',
    description:
      '해발 8,750 미터 히말라야 에베레스트 데스존 인간의 접근을 허락하지 않은 신의 영역 그곳에 우리 동료가 묻혀있다. 산 아래 하나였고, 또 다른 가족이었던 사람들 생을 마감한 후배 대원의 시신을 찾기 위해 기록도, 명예도, 보상도 없는 가슴 뜨거운 여정을 시작한다. 그 누구도 시도하지 않았던 위대한 도전 엄홍길 대장과 휴먼원정대의 감동 실화가 공개된다!',
  },
  {
    imgSrc: './images/movie3.jpg',
    title: '마돈나 2015.07.02.',
    description:
      '한 병원의 간호조무사 해림(서영희)과 의사 혁규(변요한)는 심장 이식이 필요한 전신마비 환자 철오를 담당하게 된다. 철오의 아들 상우(김영민)가 아버지의 재산을 얻기 위해 모든 수단을 동원해 아버지의 생명을 억지로 연장하고 있다는 사실을 알게 된 그들. 어느 날, 정체불명의 사고 환자 미나(권소현)가 실려오게 되고, 냉혹한 재벌 2세 상우는 해림에게 그녀의 가족을 찾아 장기기증 동의서를 받아오라는 위험한 거래를 제안한다. 상황이 어려웠던 해림은 제안을 어렵게 수락하고, ‘마돈나’라는 별명을 가졌던 미나의 과거를 추적해가며 충격적인 비밀들을 마주하게 되는데… “전 최선을 다했어요…언제나”',
  },
  {
    imgSrc: './images/movie4.png',
    title: '부산행 2016.07.20.',
    description:
      '정체불명의 바이러스가 전국으로 확산되고 대한민국 긴급재난경보령이 선포된 가운데, 열차에 몸을 실은 사람들은 단 하나의 안전한 도시 부산까지 살아가기 위한 치열한 사투를 벌이게 된다. 서울에서 부산까지의 거리 442KM 지키고 싶은, 지켜야만 하는 사람들의 극한의 사투!',
  },
  {
    imgSrc: './images/movie5.jpg',
    title: '영화5',
    description: '영화5',
  },
  {
    imgSrc: './images/movie6.jpg',
    title: '영화6',
    description: '영화6',
  },
  {
    imgSrc: './images/movie7.jpg',
    title: '영화7',
    description: '영화7',
  },
  {
    imgSrc: './images/movie8.jfif',
    title: '영화8',
    description: '영화8',
  },
  {
    imgSrc: './images/movie9.jpg',
    title: '영화9',
    description: '영화9',
  },
  {
    imgSrc: './images/movie10.jpg',
    title: '영화10',
    description: '영화10',
  },
];

const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
};

const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    if (!children) return;
    target.appendChild(children);
  });
};

const showBoxListDOM = () => {
  for (let i = 0; i < movieInfoList.length; i++) {
    const { imgSrc, title } = movieInfoList[i];
    const $box = makeDOMwithProperties('div', { className: 'box' });
    const $boxImg = makeDOMwithProperties('img', {
      src: imgSrc,
      alt: title,
    });
    $boxImg.dataset.id = `img-${i}`;
    $modalBoxes.push($box);
    $box.appendChild($boxImg);
  }
  appendChildrenList($containerModal, $modalBoxes);
};

const showModalDOM = (index) => {
  $modal.innerHTML = '';
  const { title, description } = movieInfoList[index];
  const modalWrap = makeDOMwithProperties('div', {
    className: 'modal_wrap',
  });
  const modalHeader = makeDOMwithProperties('div', {
    className: 'modal_header',
    innerText: title,
  });
  const modalBody = makeDOMwithProperties('div', {
    className: 'modal_body',
    innerText: description,
  });
  const modalFooter = makeDOMwithProperties('div', {
    className: 'modal_footer',
  });
  const cancleBtn = makeDOMwithProperties('button', {
    className: 'modal_button cancel',
    innerText: '취소',
    onclick: () => $modal.classList.toggle('show'),
  });
  const confirmBtn = makeDOMwithProperties('button', {
    className: 'modal_button confirm',
    innerText: '구매하기',
    onclick: () => alert('추후 구현'),
  });
  appendChildrenList(modalWrap, [modalHeader, modalBody, modalFooter]);
  appendChildrenList(modalFooter, [cancleBtn, confirmBtn]);
  return modalWrap;
};

const toggleOpenModal = () => {
  $modal.classList.toggle('show');
  $body.classList.add('scroll_lock');
};

$containerModal.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target.tagName === 'IMG')) return;
  const imgId = String(target.dataset.id);
  const [, id] = imgId.split('-');
  toggleOpenModal();
  const $modalWrapDOM = showModalDOM(id);
  $modal.appendChild($modalWrapDOM);
});

window.addEventListener('click', (event) => {
  if (event.target === $modal) {
    $modal.classList.toggle('show');
  }
});

showBoxListDOM();
