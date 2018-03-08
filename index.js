const app = "I don't do much."
function destructivelyAppendKitten(element) {
  kittens.push(element)
  return kittens
}
function destructivelyPrependKitten(element) {
  kittens.unshift(element)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}