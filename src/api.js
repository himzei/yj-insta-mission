const BACK_URL =
  "https://port-0-landing-iwon-backend-by52fb24lbbufx8n.gksl2.cloudtype.app";

export async function performanceUpdate(data) {
  console.log(data);
  return fetch(`${BACK_URL}/api/v1/mission/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
