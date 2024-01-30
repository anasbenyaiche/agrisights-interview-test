import pushPrefixAndSlice from "./helper/pushPrefixAndSlice";

const combinatePrefix = (prefixes: string[]) => {
  const result: string[] = [];

  for (let i = 0; i < prefixes.length; i++) {
    pushPrefixAndSlice(prefixes[i], prefixes.slice(i + 1), result);
  }
  console.log(result);
  return result;
};

export default combinatePrefix;
