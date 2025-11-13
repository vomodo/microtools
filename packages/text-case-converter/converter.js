function toTitleCase(txt) {
  return txt.replace(/\w\S*/g, w=>w.charAt(0).toUpperCase()+w.slice(1).toLowerCase());
}
function toCamelCase(txt) {
  let out = txt.replace(/(?:^|\s|_|-)([a-zA-Z])/g, (_,c)=>c.toUpperCase())
    .replace(/\s|_|-/g,'');
  return out.charAt(0).toLowerCase() + out.slice(1);
}
function toSnakeCase(txt) {
  return txt.replace(/\s+/g, '_').replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
function convertCase(type, txt) {
  if(type==='upper') return txt.toUpperCase();
  if(type==='lower') return txt.toLowerCase();
  if(type==='title') return toTitleCase(txt);
  if(type==='camel') return toCamelCase(txt);
  if(type==='snake') return toSnakeCase(txt);
  return txt;
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('textInput');
  const output = document.getElementById('output');
  document.getElementById('btn-upper').onclick = () => output.value = convertCase('upper', input.value);
  document.getElementById('btn-lower').onclick = () => output.value = convertCase('lower', input.value);
  document.getElementById('btn-title').onclick = () => output.value = convertCase('title', input.value);
  document.getElementById('btn-camel').onclick = () => output.value = convertCase('camel', input.value);
  document.getElementById('btn-snake').onclick = () => output.value = convertCase('snake', input.value);
  document.getElementById('copyBtn').onclick = () => { output.select(); document.execCommand('copy'); };
});
