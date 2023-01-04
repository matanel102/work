
 export class LocalStorage {
  constructor() {
    this.storage = window.localStorage;
  }
  
  deleteAllButton(key) {
    this.storage.removeItem(key);
  }
}

const deleteAllButton = document.getElementById('deleteAllButton');
  deleteAllButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
  });
