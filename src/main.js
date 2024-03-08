const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputName = document.getElementById('name').value;
  const inputEmail = document.getElementById('email').value;
  const inputPhone = document.getElementById('phone').value;
  const userArray = [
    {
      name: inputName,
      email: inputEmail,
      phone: inputPhone,
    },
  ];
  let user = JSON.stringify(userArray);

  localStorage.setItem('user', user);
  localStorage.setItem('name', inputName);
  localStorage.setItem('email', inputEmail);
  render();
  //   console.log(parsedData);
  //   console.log(dataFromLocalStorage);
});

function render() {
  const cardSection = document.getElementById('section');
  let dataFromLocalStorage = localStorage.getItem('user');
  let parsedData = JSON.parse(dataFromLocalStorage);
  parsedData.map((item) => {
    let divUser = document.createElement('div');
    divUser.classList.add(
      'flex',
      'flex-col',
      'gap-2',
      'bg-blue-300',
      'p-2',
      'w-5/6',
      'h-32',
      'm-5',
      'rounded-md'
    );
    let name = document.createElement('p');
    name.innerText = 'name : ';
    let userName = document.createElement('span');
    userName.innerText = item.name;
    name.append(userName);
    let emailUser = document.createElement('p');
    emailUser.innerText = 'Email :';
    let email = document.createElement('span');
    email.innerText = item.email;
    emailUser.append(email);
    let phoneUser = document.createElement('p');
    phoneUser.innerText = 'Phone :';
    let phone = document.createElement('span');
    phone.innerText = item.phone;
    phoneUser.append(phone);
    divUser.append(name, emailUser, phoneUser);
    cardSection.append(divUser);
  });
}
