const timelines = [
  { desc: "lunch is best", likes: 0 },
  { desc: "2", likes: 10 },
  { desc: "3", likes: 0 },
  { desc: "4", likes: 3 },
];

function makeDataGenrator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}

export const getNextTimeline = makeDataGenrator(timelines);
