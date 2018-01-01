const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');


// 아이템 추가 훵션
function addItem() {
  // 아이템 추가
  const itemEl = document.createElement('div');
  itemEl.textContent = inputEl.value;
  listEl.appendChild(itemEl);
  itemEl.classList.add('list-item');

  // 빈칸 만들기
  inputEl.value = '';

  // 완료/취소 기능
  itemEl.addEventListener('click', e => {
    if (itemEl.classList.contains('complete')) {
      itemEl.classList.remove('complete');
    } else {
      itemEl.classList.add('complete');
    }
  });

  // 삭제 버튼
  const removeButtonsEl = document.createElement('div');
  itemEl.appendChild(removeButtonsEl);
  removeButtonsEl.textContent = 'x';
  removeButtonsEl.classList.add('remove-button');

  // 삭제 기능
  removeButtonsEl.addEventListener('click', e => {
    listEl.removeChild(itemEl);
  });
}

// 클릭하면 입력
addButtonEl.addEventListener('click', e => {
  if (inputEl.value !== '') {
    addItem();
  }
})

// 엔터 누르면 입력
inputEl.addEventListener('keyup', e => {
  let key = e.keyCode;
  if (key === 13 && inputEl.value !== '') {
    addItem();
  }
})