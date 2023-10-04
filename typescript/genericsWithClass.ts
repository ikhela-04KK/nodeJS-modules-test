// how to use generics contraitns for class 


interface RecyclableItem {
    name: string;
    date: number;
}

class RecyclingBin<U, T extends RecyclableItem> {
    private items: T[] = [];
    private owner: U;

    constructor(owner: U) {
        this.owner = owner;
    }

    addItem(item: T) {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }

    getItemCount(): number {
        return this.items.length;
    }

    getOwner(): U {
        return this.owner;
    }
}

// Utilisation de la classe générique
const bin1 = new RecyclingBin("John"); // U est string, T est RecyclableItem
const bin2 = new RecyclingBin(42); // U est number, T est RecyclableItem

const item1: RecyclableItem = { name: "camera", date: 21 };
const item2: RecyclableItem = { name: "iphone12", date: 74 };

bin1.addItem(item1);
bin2.addItem(item2);

console.log("Propriétaire de la poubelle 1:", bin1.getOwner());
console.log("Articles dans la poubelle 2:", bin2.getItems());
