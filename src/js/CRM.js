import Item from './Item';

export default class CRM {
  constructor(element) {
    this.table = element.querySelector('.crm_table');
    this.add = element.querySelector('.crm_add');
    this.modal = element.querySelector('.crm_modal');
    this.form = this.modal.querySelector('.crm_modal .crm_form');
    this.inputName = this.form.querySelector('.item_name');
    this.inputCost = this.form.querySelector('.item_cost');
    this.close = this.modal.querySelector('.crm_modal .close');
    this.items = [];

    this.items = [new Item('IPhone', 60000), new Item('Xiaomi', 20000)];

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addItem = this.addItem.bind(this);
    this.changeItem = this.changeItem.bind(this);
    // this.editItem = this.editItem.bind(this);
  }

  init() {
    this.add.addEventListener('click', this.showModal);
    this.close.addEventListener('click', this.closeModal);
    this.showTable();
  }

  showTable() {
    this.table.innerHTML = '';
    const headTable = document.createElement('tr');
    headTable.innerHTML = '<th>Название</th><th>Стоимость</th><th>Действия</th>';
    this.table.append(headTable);

    for (const item of this.items) {
      this.table.append(item.node);
    }

    this.table.addEventListener('click', this.changeItem);
  }

  showModal(event) {
    this.modal.classList.toggle('active');

    if (!event.target.classList.contains('crm_edit')) {
      this.form.addEventListener('submit', this.addItem);
    } else {
      const targetNode = event.target.closest('tr');
      const item = this.items.find((itemFind) => itemFind.node === targetNode);
      this.inputName.value = item.name;
      this.inputCost.value = item.cost;
      this.form.addEventListener('submit', this.editItem.bind(null, targetNode));
    }
  }

  closeModal() {
    this.modal.classList.toggle('active');
    this.inputName.value = '';
    this.inputCost.value = '';
  }

  addItem(event) {
    event.preventDefault();
    const item = new Item(this.inputName.value, this.inputCost.value);
    this.items.push(item);
    this.closeModal();
    this.showTable();
  }

  changeItem(event) {
    if (event.target.classList.contains('crm_edit')) {
      this.showModal(event);
    } else if (event.target.classList.contains('crm_delete')) {
      this.deleteItem(event);
    }
  }

  editItem(targetNode, event) {
    event.preventDefault();
    console.log('редактирование');
    // arr[0].preventDefault();
    console.log(targetNode);
  }

  deleteItem(event) {
    const targetNode = event.target.closest('tr');
    const itemIndex = this.items.findIndex((itemFind) => itemFind.node === targetNode);
    this.items.splice(itemIndex, 1);
    targetNode.remove();
  }
}
