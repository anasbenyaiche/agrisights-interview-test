function pushPrefixAndSlice(
  prefix: string,
  remainingPrefixes: string[],
  result: string[]
): void {
  result.push(prefix);

  for (let i = 0; i < remainingPrefixes.length; i++) {
    pushPrefixAndSlice(
      prefix + remainingPrefixes[i],
      remainingPrefixes.slice(i + 1),
      result
    );
  }
}

export default pushPrefixAndSlice;
