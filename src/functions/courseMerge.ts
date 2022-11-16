export function courseMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }
  if (Array.isArray(a) || Array.isArray(b) || typeof a !== typeof b) {
    throw new Error("Can not merge two differnet types");
  }
  const merged = { ...a };
  for (const key of Object.keys(b)) {
    if (typeof a[key] === "object" || Array.isArray(a[key]))
      merged[key] = courseMerge(a[key], b[key]);
    else merged[key] = b[key];
  }
  return merged;
}
