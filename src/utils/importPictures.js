const pictures = [];

function importAll(pic) {
  pic.keys().forEach(key => pictures[key.slice(2)] = pic(key)["default"]);
}

importAll(require.context('../assets/pics', true, /\.(png|jpg)$/));

export default pictures;
