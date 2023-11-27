function hexStringToRGB(s) {
 return {
	r: parseInt(s.slice(1,3), 16),
	g: parseInt(s.slice(3,5), 16),
	b: parseInt(s.slice(5), 16),
 } 
}

const hexStringToRGB = str => {
  const [r, g, b] = str.match(/\w{2}/g).map(x => parseInt(x, 16));
  return { r, g, b };
}