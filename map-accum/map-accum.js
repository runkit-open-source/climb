module.exports = function mapAccum(f, acc, list)
{
  var idx = 0;
  var len = list.length;
  if (len<=0)
    return [acc, []];
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = f(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
}