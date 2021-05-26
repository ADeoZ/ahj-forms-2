export default class Modal {
  constructor() {
    this.closeModal = this.closeModal.bind(this);
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.classList.add('crm_modal');
    this.modal.innerHTML = `<form class="crm_form">
    <div>Название</div><input type="text" name="item-name" class="item_name" required>
    <div>Стоимость</div><input type="text" name="item-cost" class="item_cost" pattern="[1-9][0-9]*" required>
    <div class="controls">
      <button>Сохранить</button>
      <button type="button" class="close">Отмена</button>
    </div>
  </form>`;

    this.form = this.modal.querySelector('.crm_modal .crm_form');
    this.inputName = this.form.querySelector('.item_name');
    this.inputCost = this.form.querySelector('.item_cost');
    this.close = this.modal.querySelector('.crm_modal .close');
  }

  showModal(callback, item) {
    document.body.appendChild(this.modal);
    this.close.addEventListener('click', this.closeModal);

    if (item) {
      this.inputName.value = item.name;
      this.inputCost.value = item.cost;
    }
    this.form.addEventListener('submit', this.checkValidity.bind(this, callback));
  }

  closeModal() {
    this.modal.remove();
  }

  checkValidity(callback, event) {
    console.log('проверяем');
    event.preventDefault();
    callback();
  }
}
