const getLaughType = (age: number) => {
  if (age < 12) {
    return {
      body: "hi",
    };
  } else if (age < 23) {
    return {
      body: "kkkkkk",
    };
  } else if (age < 30) {
    return { body: "hahaha" };
  } else if (age < 35) {
    return { body: "jiasjaiosjaoisja" };
  } else if (age < 40) {
    return { body: "hauahuahuha" };
  } else if (age < 50) {
    return { body: "ahsuahsu" };
  } else if (age < 60) {
    return { body: "kkkk" };
  } else {
    return { body: "hehe" };
  }
};

export const laughGenerator = (age: number, intensity: number) => {
  const body = getLaughType(age);
  let text = "";
  for (let i = 0; i < intensity; i++) {
    text += body.body;
  }
  if (intensity > 6) {
    text = text.toUpperCase();
  }

  return text;
};
