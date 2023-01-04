export class pepoleStorge {
    archive = [];
    constructor() {
        this.getArchive();
    }
    updateArchive() {
        localStorage.setItem('pepole:',JSON.stringify(this.archive));
        this.getArchive();
    }
    getArchive() {
        if (!localStorage.getItem('pepole:')) {
            this.updateArchive();
        } else {
            this.archive = JSON.parse(localStorage.getItem('pepole:')); 
        }
    }
}