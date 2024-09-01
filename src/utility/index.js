const colors = {
  base: "#f5f5f5",
  color1: "#ffffff",
  color2: "#cce4fd",
  color3: "#77b6fb",
  color4: "#2382f7",
  color5: "#196bde",
  color6: "#0f3375",
};
export const getColor = (value) => {
  return colors[value];
};

export function getRandomEventUrls(events) {
  const randomEventUrls = {};

  for (const eventName in events) {
    if (events.hasOwnProperty(eventName)) {
      const urls = events[eventName];
      const randomIndex = Math.floor(Math.random() * urls.length);
      randomEventUrls[urls[randomIndex]] = eventName;
    }
  }

  return randomEventUrls;
}
