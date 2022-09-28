import { GildedRose, Item } from './GildedRose';

function testItemHistory(expectedHistory) {
  const [initialItemState, ...remainingHistory] = expectedHistory;
  const gildedRose = new GildedRose([new Item(...initialItemState)]);
  for (const historyState of remainingHistory) {
    const items = gildedRose.updateQuality();
    const expectedItem = new Item(...historyState);
    expect(items[0]).toEqual(expectedItem);
  }
  const items = gildedRose.updateQuality();
}

describe('GildedRose', function () {
  it('Aged Brie', () => {
    const expectedHistory = [
      ['Aged Brie', 2, 0],
      ['Aged Brie', 1, 1],
      ['Aged Brie', 0, 2],
      ['Aged Brie', -1, 4],
      ['Aged Brie', -2, 6],
      ['Aged Brie', -3, 8],
      ['Aged Brie', -4, 10],
      ['Aged Brie', -5, 12],
      ['Aged Brie', -6, 14],
    ];
    testItemHistory(expectedHistory);
  });

  it('+5 Dexterity Vest', () => {
    const expectedHistory = [
      ['+5 Dexterity Vest', 10, 20],
      ['+5 Dexterity Vest', 9, 19],
      ['+5 Dexterity Vest', 8, 18],
      ['+5 Dexterity Vest', 7, 17],
      ['+5 Dexterity Vest', 6, 16],
      ['+5 Dexterity Vest', 5, 15],
      ['+5 Dexterity Vest', 4, 14],
      ['+5 Dexterity Vest', 3, 13],
      ['+5 Dexterity Vest', 2, 12],
      ['+5 Dexterity Vest', 1, 11],
    ];
    testItemHistory(expectedHistory);
  });

  it('Elixir of the Mongoose', () => {
    const expectedHistory = [
      ['Elixir of the Mongoose', 5, 7],
      ['Elixir of the Mongoose', 4, 6],
      ['Elixir of the Mongoose', 3, 5],
      ['Elixir of the Mongoose', 2, 4],
      ['Elixir of the Mongoose', 1, 3],
      ['Elixir of the Mongoose', 0, 2],
      ['Elixir of the Mongoose', -1, 0],
      ['Elixir of the Mongoose', -2, 0],
      ['Elixir of the Mongoose', -3, 0],
      ['Elixir of the Mongoose', -4, 0],
    ];
    testItemHistory(expectedHistory);
  });

  it('Sulfuras, Hand of Ragnaros (expired)', () => {
    const expectedHistory = [
      ['Sulfuras, Hand of Ragnaros', -1, 80],
      ['Sulfuras, Hand of Ragnaros', -1, 80],
    ];
    testItemHistory(expectedHistory);
  });

  it('Sulfuras, Hand of Ragnaros', () => {
    const expectedHistory = [
      ['Sulfuras, Hand of Ragnaros', 0, 80],
      ['Sulfuras, Hand of Ragnaros', 0, 80],
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 15 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 15, 20],
      ['Backstage passes to a TAFKAL80ETC concert', 14, 21],
      ['Backstage passes to a TAFKAL80ETC concert', 13, 22],
      ['Backstage passes to a TAFKAL80ETC concert', 12, 23],
      ['Backstage passes to a TAFKAL80ETC concert', 11, 24],
      ['Backstage passes to a TAFKAL80ETC concert', 10, 25],
      ['Backstage passes to a TAFKAL80ETC concert', 9, 27],
      ['Backstage passes to a TAFKAL80ETC concert', 8, 29],
      ['Backstage passes to a TAFKAL80ETC concert', 7, 31],
      ['Backstage passes to a TAFKAL80ETC concert', 6, 33],
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 10 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 10, 49],
      ['Backstage passes to a TAFKAL80ETC concert', 9, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 8, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 7, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 6, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 5, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 4, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 3, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 2, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 1, 50],
    ];
    testItemHistory(expectedHistory);
  });

  it('Backstage passes to a TAFKAL80ETC concert (in 5 days)', () => {
    const expectedHistory = [
      ['Backstage passes to a TAFKAL80ETC concert', 5, 49],
      ['Backstage passes to a TAFKAL80ETC concert', 4, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 3, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 2, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 1, 50],
      ['Backstage passes to a TAFKAL80ETC concert', 0, 50],
      ['Backstage passes to a TAFKAL80ETC concert', -1, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -2, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -3, 0],
      ['Backstage passes to a TAFKAL80ETC concert', -4, 0],
    ];
    testItemHistory(expectedHistory);
  });

  it('Conjured Mana Cake', () => {
    const expectedHistory = [
      ['Conjured Mana Cake', 5, 15],
      ['Conjured Mana Cake', 4, 13],
      ['Conjured Mana Cake', 3, 11],
      ['Conjured Mana Cake', 2, 9],
      ['Conjured Mana Cake', 1, 7],
      ['Conjured Mana Cake', 0, 5],
      ['Conjured Mana Cake', -1, 1],
      ['Conjured Mana Cake', -2, 0],
      ['Conjured Mana Cake', -3, 0],
      ['Conjured Mana Cake', -4, 0],
    ];

    testItemHistory(expectedHistory);
  });
});
