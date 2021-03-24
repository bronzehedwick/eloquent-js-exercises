class Group {

    constructor(list) {
        if (list) this._group = list;
        else this._group = [];
    }

    static from(list) {
        // Create a group that contains all values from iterating over `list`.
        let filteredList = [];
        for (const item of list) {
            let uniqueItem = true;
            for (const member of filteredList) {
                if (item === member) {
                    uniqueItem = false;
                }
            }
            if (uniqueItem) {
                filteredList.push(item);
            }
        }
        return new Group(filteredList);
    }

    add(value) {
        // Add `value` to group, if it doesn't already exist.
        if (!this.has(value)) {
            this._group.push(value);
        }
    }

    delete(value) {
        // Remove `value` from group, if it exists.
        if (!this.has(value)) return;
        for (let i = 0; i < this._group.length; i++) {
            if (this._group[i] === value) {
                this._group.splice(i, 1);
            }
        }
    }

    has(value) {
        // Return boolean if `value` exists in group.
        for (const item of this._group) {
            if (item === value) return true;
        }
        return false;
    }

}

module.exports = Group;
