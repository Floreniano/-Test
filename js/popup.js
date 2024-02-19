// Отображение popup (переменные)
const popupBg = document.getElementById('popupBg');
const popup = document.getElementById('popup');
const openPopupButton = document.getElementById('deliveryBtn');
const closePopupButton = document.getElementById('popupClose');
const popupSubmit = document.getElementById('popupSubmit');
const body = document.getElementById('body');

// Обработка ошибок (переменные)
let errors = 0;
const firstName = document.getElementById('firstName');
const popupForm = document.getElementById('popupForm');
const succesMessage = document.getElementById('succesMessage');
const succesBtn = document.getElementById('succesBtn');

// Отображение popup
const closePopup = () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
  body.classList.remove('lock');
  succesBtn.classList.add('hidden');
  popupForm.classList.remove('hidden');
  succesMessage.innerText = '';
};
const openPopup = () => {
  popupBg.classList.add('active');
  popup.classList.add('active');
  body.classList.add('lock');
  succesBtn.classList.add('hidden');
  popupForm.classList.remove('hidden');
  succesMessage.innerText = '';
};
openPopupButton.addEventListener('click', (e) => {
  e.preventDefault();
  openPopup();
});
closePopupButton.addEventListener('click', () => {
  closePopup();
});
succesBtn.addEventListener('click', () => {
  closePopup();
});
document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    closePopup();
  }
});

// Обработка ошибок
const setError = (element, message) => {
  errors++;
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.popup-error');

  errorDisplay.innerText = message;
  element.classList.add('error');
};

const setSucces = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.popup-error');

  errorDisplay.innerText = '';
  element.classList.remove('error');
};

const succesForm = () => {
  succesMessage.innerText = 'Ваша заявка успешно отправлена.';
  popupForm.classList.add('hidden');
  succesBtn.classList.remove('hidden');
};
const validateInputs = () => {
  const phoneLength = phone.value.match(/\d/g).join('').length;
  const firstNameValue = firstName.value.trim();
  errors = 0;
  if (firstNameValue === '') {
    setError(firstName, 'Введите имя');
  } else {
    setSucces(firstName);
  }
  if (phoneLength !== 11) {
    setError(phone, 'Введите номер');
  } else {
    setSucces(phone);
  }
  if (errors === 0) {
    succesForm();
    firstName.value = '';
    phone.value = '';
  }
};

popupSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  validateInputs();
});
