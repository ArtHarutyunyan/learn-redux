export function loadCurrentUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Khachatur Jackyan",
      });
    }, 1000);
  });
}
