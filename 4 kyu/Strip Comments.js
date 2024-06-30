function solution(text, markers) {
  let lines = text.split("\n");

  for (let i = 0; i < markers.length; i++) {
    lines = lines.map((line) => {
      let index = line.indexOf(markers[i]);
      if (index !== -1)  return line.substring(0, index) 
      else return line.replace(/\s*$/, "");
    });
  }
  return lines.join("\n").trim();
}

console.log(
  solution("#aa bb\n!cc dd",  ["#","!"])
);

// result should == "apples, pears\ngrapes\nbananas"
