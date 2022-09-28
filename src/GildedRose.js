export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items = [];
  minQuality = 0;
  maxQuality = 50;

  ageItemNames = ['Aged Brie'];
  eventItemNames = ['Backstage passes'];
  legendaryItemNames = ['Sulfuras'];
  conjuredItemNames = ['Conjured'];

  constructor(items = []) {
    this.items = items;
  }

  /**
   *
   * @param {number} by
   * @param {Item} item
   * @returns Return a modified item
   */
  updateItemQuality(by, item) {
    item.quality += by;

    if (item.quality <= this.minQuality) {
      item.quality = this.minQuality;
    }

    if (item.quality >= this.maxQuality) {
      item.quality = this.maxQuality;
    }

    return item;
  }

  checkType(types, itemName) {
    // Option A: enough to have some key words
    return types.some((type) => itemName.includes(type));

    // Option B: exact match
    return types.includes(itemName);
  }

  /**
   *
   * @param {Item} param
   * @returns Item type filtered by its name
   */
  getItemType({ name }) {
    if (this.checkType(this.legendaryItemNames, name)) {
      return 'LEGENDARY';
    }
    if (this.checkType(this.eventItemNames, name)) {
      return 'EVENT';
    }
    if (this.checkType(this.ageItemNames, name)) {
      return 'AGED';
    }
    if (this.checkType(this.conjuredItemNames, name)) {
      return 'CONJURED';
    }

    return 'REGULAR';
  }

  updateQuality() {
    this.items = this.items.map((item) => {
      const itemType = this.getItemType(item);

      // Legendary: never has to be sold or decreases in `quality`.
      if (itemType === 'LEGENDARY') {
        return item;
      }

      item.sellIn -= 1;

      // Aged: increases in `quality` the older it gets.
      if (itemType === 'AGED') {
        const agedQuality = item.sellIn < 0 ? 2 : 1;
        return this.updateItemQuality(agedQuality, item);
      }

      // Event: increases in `quality` according to event date
      if (itemType === 'EVENT') {
        if (item.sellIn === 0) {
          return item;
        }

        // `quality` drops to 0 after the concert."
        if (item.sellIn <= 0) {
          item.quality = 0;
          return item;
        }

        // `quality` increases by 3 when there are 5 days or less
        if (item.sellIn <= 5) {
          return this.updateItemQuality(3, item);
        }

        // `quality` increases by 2 when there are less than 10 days
        if (item.sellIn < 10) {
          return this.updateItemQuality(2, item);
        }

        return this.updateItemQuality(1, item);
      }

      // Conjured: degrade in `quality` twice as fast as normal items.
      if (itemType === 'CONJURED') {
        const conjuredQuality = item.sellIn < 0 ? -4 : -2;
        return this.updateItemQuality(conjuredQuality, item);
      }

      // Regular: Once the sellIn has passed, `quality` degrades twice as fast.
      const regularQuality = item.sellIn < 0 ? -2 : -1;
      return this.updateItemQuality(regularQuality, item);
    });

    return this.items;
  }
}
