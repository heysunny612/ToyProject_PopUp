# 토이프로젝트 모달팝업

![Animation](https://user-images.githubusercontent.com/127499117/235353931-9e5f548e-b3af-4e3a-83b8-228414455406.gif)

_제로베이스 토이프로젝트 강좌에 있는 모달팝업 강좌를 들은 후, 응용하여 구현해보았다. 강의에서는 특정 버튼을 누르면, 팝업이 뜰 수 있게 구현하였지만, for 반복문과 각각의 영화의 데이터를 객체의 프로퍼티로 만들어서, 위 처럼 다른 정보(영화)를 클릭했을때, 해당 정보의 데이터가 출력 될 수 있도록 만들어 보았다._

<br/>
<br/>

## 새로 배운 것들

 <br/>

```js
$containerModal.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target.tagName === 'IMG')) return;
  const imgId = String(target.dataset.id);
  const [, id] = imgId.split('-');
  toggleOpenModal();
  const $modalWrapDOM = showModalDOM(id);
  $modal.appendChild($modalWrapDOM);
});
```

_자바스크립트에서 제공되는 메서드를 직접 프로젝트에 적용할때마다, 모던자바스크립트라는 책 목차 옆에 내가 사용한 메서드를 표시하는 버릇?이 생겼다. 얼마나 많은 프로젝트에 적용하고 있는지 알고있어야, 나중에 String 뿐만아니라, Array등 수 많은 메서드를 복습할 때 도움이 될 뿐만아니라, 가장 많이 사용한 메서드 기준으로 복습을 하기때문이다.! split은 String 메서드 중, 표시가 가장 많이 되어있는 것들 중 한가지 였다._

 <br/>

## 1.split

> 정의: split 매서드는 대상 문자열에서 첫 번째 인수로 전달한 문자열을 구분한 후, 분리된 각 문자열을 이루어진 배열을 반환한다.

> 적용 : `<img src="img.jpg" data-id="img-1"> ` 이미지의 data-id는 곧, 이미지가 나열되는 순서와 같았기에, id의 숫자를 받아오고 싶어 spilt이라는 메서드를 사용하여 '-' 기준으로 문자를 분리한 후, 숫자만 가져와서 id로 사용하였다.

 <br/>
 
## 2. 구조분해할당
> 정의: 영어로는 디스트럭처릭 할당 (destructuring assignment)이다. 구조분해할당은 구조화된 배열과 같은 이터러블 또는 객체를 비구조화(destructuring)하여 1개이상의 변수에 개별적으로 할당하는 것을 말한다.

> 적용 :위의 split 메서드를 사용하면, 분리된 문자열로 이루어진 또 다른 배열을 반환하기때문에, 내가 원하는 배열의 index로도 값을 가져올 수 있었지만, 내가 필요한 값만 추출하여 변수에 할당할 때, 유용한 구조분해 할당을 사용하였다.

```js
const toggleOpenModal = () => {
  $modal.classList.toggle('show');
  $body.classList.add('scroll_lock');
};
```

 <br/>

## 3.toggle

> 정의: 영어로는 디스트럭처릭 할당 (destructuring assignment)이다. 구조분해할당은 구조화된 배열과 같은 이터러블 또는 객체를 비구조화(destructuring)하여 1개이상의 변수에 개별적으로 할당하는 것을 말한다.

> 적용 :위의 split 메서드를 사용하면, 분리된 문자열로 이루어진 또 다른 배열을 반환하기때문에, 내가 원하는 배열의 index로도 값을 가져올 수 있었지만, 내가 필요한 값만 추출하여 변수에 할당할 때, 유용한 구조분해 할당을 사용하였다.
