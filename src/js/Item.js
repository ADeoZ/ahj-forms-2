export default class Item {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;

    this.node = document.createElement('tr');
    const itemName = document.createElement('td');
    itemName.innerText = this.name;
    const itemCost = document.createElement('td');
    itemCost.innerText = this.cost;
    const itemControls = document.createElement('td');
    itemControls.innerHTML = '<span class="crm_edit">✎</span><span class="crm_delete">✕</span>';
    this.node.append(itemName, itemCost, itemControls);
  }
}
