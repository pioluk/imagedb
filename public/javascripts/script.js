function createForm(id) {
  var form = document.createElement('form');
  form.method = 'post';
  form.action = '/update/' + id;
  form.role = 'form';
  form.id = 'js-created';
  form.style.padding = "15px";

  var titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'image_title';
  titleInput.placeholder = 'Title';
  titleInput.classList.add('form-control');
  titleInput.style.margin = "5px";
  form.appendChild(titleInput);

  var URLInput = document.createElement('input');
  URLInput.type = 'text';
  URLInput.name = 'image_url';
  URLInput.placeholder = 'url';
  URLInput.classList.add('form-control');
  URLInput.style.margin = "5px";
  form.appendChild(URLInput);

  var submitButton = document.createElement('button');
  submitButton.classList.add("btn");
  submitButton.classList.add("btn-primary");
  submitButton.classList.add("my-button");
  submitButton.style.margin = "5px";

  var spanIcon = document.createElement('span');
  spanIcon.classList.add('glyphicon');
  spanIcon.classList.add('glyphicon-ok');
  submitButton.appendChild(spanIcon);

  form.appendChild(submitButton);

  return form;
}

function edit(element) {
  var parent = element.parentNode;

  if (!element.active) {
    parent.appendChild(createForm(element.id));
    element.active = true;
  }
  else {
    parent.removeChild(parent.querySelector("form"));
    element.active = false;
  }
}